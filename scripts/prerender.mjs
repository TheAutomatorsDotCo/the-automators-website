/**
 * Pre-rendering script for SEO.
 *
 * Launches a local server from the built dist/ folder, then uses Puppeteer
 * to visit each route, wait for React to render, and save the full HTML.
 *
 * Key design decisions:
 * - The ORIGINAL index.html is kept in memory and always served as the SPA
 *   fallback, so overwriting dist/index.html for the "/" route does NOT break
 *   rendering of subsequent routes.
 * - WebGL/Three.js console errors are suppressed (they don't affect HTML output).
 * - Heavy resources (images, fonts, media) are blocked for speed.
 * - react-helmet-async gets an extra 2s settle time for <head> meta tags.
 * - Each route is retried up to MAX_RETRIES times on failure.
 * - The script continues even if some routes fail (logs warnings, doesn't exit 1).
 *
 * Usage: node scripts/prerender.mjs
 * Run after `vite build` completes.
 */

import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 2000;
const NAVIGATION_TIMEOUT_MS = 90000;
const CONTENT_WAIT_TIMEOUT_MS = 45000;
const SETTLE_DELAY_MS = 2000;

/**
 * Launch browser with the right Chromium for the environment:
 * - Vercel/CI (Linux without system libs): @sparticuz/chromium + puppeteer-core
 * - Local development (Windows/Mac): regular puppeteer with bundled Chromium
 *
 * Detection: use @sparticuz/chromium when running on Linux (Vercel, GitHub Actions, etc.)
 * because those environments lack the system libraries Puppeteer's Chromium needs.
 * On Windows/Mac, use regular puppeteer which bundles a working Chromium.
 */
async function launchBrowser() {
  const commonArgs = [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-gpu',
    '--disable-software-rasterizer',
    '--disable-dev-shm-usage',
    '--disable-web-security',
    '--disable-features=IsolateOrigins',
    '--disable-site-isolation-trials',
    '--ignore-gpu-blocklist',
    '--use-gl=swiftshader',
    '--single-process',
    '--no-zygote',
  ];

  const isCI = process.platform === 'linux';

  if (isCI) {
    const chromium = (await import('@sparticuz/chromium')).default;
    const puppeteerCore = (await import('puppeteer-core')).default;

    console.log('[prerender] Using @sparticuz/chromium (CI/Vercel environment)');
    return puppeteerCore.launch({
      args: [...chromium.args, ...commonArgs],
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
      protocolTimeout: 180000,
    });
  } else {
    console.log('[prerender] Using puppeteer with bundled Chromium (local environment)');
    const puppeteer = (await import('puppeteer')).default;
    return puppeteer.launch({
      headless: true,
      args: commonArgs,
      protocolTimeout: 180000,
    });
  }
}

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist');
const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

const ROUTES = [
  '/',
  '/case-studies',
  '/case-studies/platinum-repairs',
  '/case-studies/device-doctor',
  '/case-studies/in-en-om',
  '/case-studies/epic-deals',
  '/services',
  '/services/automation',
  '/services/voice-agents',
  '/services/chatbots',
  '/pricing',
  '/pricing/automation',
  '/pricing/voice-agents',
  '/pricing/chatbots',
  '/contact',
  '/thank-you',
  '/assessment',
  '/terms',
  '/privacy-policy',
  '/tickets',
  '/chatbots-for-ecommerce',
  '/unsubscribe',
  '/404',
];

/**
 * Simple static file server with SPA fallback.
 * CRITICAL: Always serves the ORIGINAL (in-memory) index.html for non-file
 * routes, not the on-disk version which gets overwritten during pre-rendering.
 */
function startServer(spaFallbackHtml) {
  return new Promise((resolve, reject) => {
    const mimeTypes = {
      '.html': 'text/html; charset=utf-8',
      '.js': 'application/javascript',
      '.mjs': 'application/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.svg': 'image/svg+xml',
      '.webp': 'image/webp',
      '.woff': 'font/woff',
      '.woff2': 'font/woff2',
      '.ico': 'image/x-icon',
      '.xml': 'application/xml',
      '.txt': 'text/plain',
    };

    const server = createServer((req, res) => {
      let pathname;
      try {
        pathname = new URL(req.url, BASE_URL).pathname;
      } catch {
        pathname = req.url;
      }

      const filePath = join(DIST_DIR, pathname);
      const ext = extname(pathname);

      if (ext && existsSync(filePath)) {
        try {
          const content = readFileSync(filePath);
          const contentType = mimeTypes[ext.toLowerCase()] || 'application/octet-stream';
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content);
          return;
        } catch {
          // Fall through to SPA fallback
        }
      }

      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(spaFallbackHtml);
    });

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.error(`[prerender] ERROR: Port ${PORT} is already in use.`);
      }
      reject(err);
    });

    server.listen(PORT, () => {
      console.log(`[prerender] Static server running on ${BASE_URL}`);
      resolve(server);
    });
  });
}

/**
 * Deduplicates meta tags and canonical links in the <head>.
 * react-helmet-async appends page-specific tags AFTER the defaults from
 * index.html. We keep the LAST occurrence of each duplicate, which is the
 * helmet-injected (page-specific) version.
 */
function deduplicateHeadTags(html) {
  const metaRegex = /<meta\s+[^>]*?(?:name|property)\s*=\s*["']([^"']+)["'][^>]*?\/?>/gi;
  const canonicalRegex = /<link\s+[^>]*?rel\s*=\s*["']canonical["'][^>]*?\/?>/gi;

  const metaOccurrences = new Map();
  let match;

  while ((match = metaRegex.exec(html)) !== null) {
    const key = match[1].toLowerCase();
    if (!metaOccurrences.has(key)) {
      metaOccurrences.set(key, []);
    }
    metaOccurrences.get(key).push({ start: match.index, length: match[0].length });
  }

  const canonicals = [];
  while ((match = canonicalRegex.exec(html)) !== null) {
    canonicals.push({ start: match.index, length: match[0].length });
  }

  const toRemove = [];

  for (const [, occurrences] of metaOccurrences) {
    if (occurrences.length > 1) {
      for (let i = 0; i < occurrences.length - 1; i++) {
        toRemove.push(occurrences[i]);
      }
    }
  }

  if (canonicals.length > 1) {
    for (let i = 0; i < canonicals.length - 1; i++) {
      toRemove.push(canonicals[i]);
    }
  }

  if (toRemove.length === 0) return html;

  toRemove.sort((a, b) => b.start - a.start);

  let result = html;
  for (const { start, length } of toRemove) {
    let end = start + length;
    while (end < result.length && (result[end] === '\n' || result[end] === '\r' || result[end] === ' ')) {
      end++;
    }
    result = result.substring(0, start) + result.substring(end);
  }

  return result;
}

/**
 * Sleep helper with optional jitter for retry backoff.
 */
function sleep(ms, jitter = 0) {
  const delay = ms + Math.random() * jitter;
  return new Promise((r) => setTimeout(r, delay));
}

/**
 * Render a single route with retries.
 * Returns { success: boolean, html?: string, error?: string }
 */
async function renderRouteWithRetries(browser, route) {
  let lastError = null;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    let page = null;
    try {
      if (attempt > 1) {
        console.log(`[prerender]   Retry ${attempt}/${MAX_RETRIES} for ${route}...`);
        await sleep(RETRY_DELAY_MS * attempt, 500);
      }

      page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 800 });

      page.on('console', () => {});
      page.on('pageerror', () => {});

      await page.setRequestInterception(true);
      page.on('request', (request) => {
        const url = request.url();
        if (url.includes('chat.theautomators.co') || url.includes('chatwoot')) {
          request.abort().catch(() => {});
          return;
        }
        request.continue().catch(() => {});
      });

      await page.goto(`${BASE_URL}${route}`, {
        waitUntil: 'networkidle0',
        timeout: NAVIGATION_TIMEOUT_MS,
      });

      await page.waitForFunction(
        () => {
          const root = document.getElementById('root');
          if (!root) return false;
          const text = root.textContent || '';
          if (text.includes('Loading...')) return false;
          const hasHeading = root.querySelector('h1, h2');
          const hasSection = root.querySelector('section, article, main');
          const hasContent = root.innerHTML.length > 1000;
          return (hasHeading || hasSection) && hasContent;
        },
        { timeout: CONTENT_WAIT_TIMEOUT_MS }
      );

      await sleep(SETTLE_DELAY_MS);

      await page.evaluate(() => {
        document.getElementById('chatwoot-sdk')?.remove();
        document
          .querySelectorAll('#cw-bubble-holder, #cw-widget-holder, .woot-widget-holder, .woot--bubble-holder')
          .forEach((el) => el.remove());
      });

      const html = await page.content();
      await page.close().catch(() => {});

      return { success: true, html };
    } catch (err) {
      lastError = err;
      console.error(`[prerender]   Attempt ${attempt} failed for ${route}: ${err.message}`);
      if (page) {
        await page.close().catch(() => {});
      }
    }
  }

  return { success: false, error: lastError?.message || 'Unknown error' };
}

/**
 * Process and save rendered HTML for a route.
 */
function saveRenderedHtml(route, html) {
  const outputDir = route === '/' ? DIST_DIR : join(DIST_DIR, ...route.split('/').filter(Boolean));

  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = join(outputDir, 'index.html');

  let cleanHtml = html
    .replace(/ data-react-helmet="true"/g, '')
    .replace(/ data-rh="true"/g, '')
    .replace(/ data-reactroot=""/g, '');

  cleanHtml = deduplicateHeadTags(cleanHtml);
  cleanHtml = cleanHtml.replace(/\s*<!--[^>]*?-->\s*/g, '\n');

  writeFileSync(outputPath, cleanHtml, 'utf-8');

  const titleMatch = cleanHtml.match(/<title[^>]*>([^<]+)<\/title>/);
  const title = titleMatch ? titleMatch[1] : '(no title found)';
  const hasJsonLd = cleanHtml.includes('application/ld+json');
  const rootContent = cleanHtml.match(/<div id="root"[^>]*>([\s\S]*?)<\/div>\s*<script/);
  const contentLength = rootContent ? rootContent[1].length : 0;

  return { title, hasJsonLd, size: cleanHtml.length, contentLength };
}

async function prerender() {
  console.log('[prerender] Starting pre-render process...');
  console.log(`[prerender] Config: MAX_RETRIES=${MAX_RETRIES}, NAV_TIMEOUT=${NAVIGATION_TIMEOUT_MS}ms, CONTENT_TIMEOUT=${CONTENT_WAIT_TIMEOUT_MS}ms\n`);

  const indexPath = join(DIST_DIR, 'index.html');
  if (!existsSync(indexPath)) {
    console.error('[prerender] ERROR: dist/index.html not found. Run `vite build` first.');
    process.exit(1);
  }

  const originalHtml = readFileSync(indexPath, 'utf-8');
  console.log(`[prerender] Original index.html loaded (${(originalHtml.length / 1024).toFixed(1)} KB)`);

  const server = await startServer(originalHtml);

  console.log('[prerender] Launching browser...');
  const browser = await launchBrowser();

  console.log(`[prerender] Browser launched. Rendering ${ROUTES.length} routes...\n`);

  let successCount = 0;
  const errors = [];

  for (const route of ROUTES) {
    console.log(`[prerender] Rendering ${route}...`);

    const result = await renderRouteWithRetries(browser, route);

    if (result.success && result.html) {
      const info = saveRenderedHtml(route, result.html);
      successCount++;
      console.log(`[prerender]   OK  ${route}`);
      console.log(`             Title: "${info.title}"`);
      console.log(`             Size: ${(info.size / 1024).toFixed(1)} KB | Root: ${(info.contentLength / 1024).toFixed(1)} KB | JSON-LD: ${info.hasJsonLd ? 'yes' : 'no'}`);
    } else {
      console.error(`[prerender]   FAIL  ${route}: ${result.error}`);
      errors.push({ route, error: result.error });
    }
    console.log('');
  }

  await browser.close();
  server.close();

  const notFoundSrc = join(DIST_DIR, '404', 'index.html');
  const notFoundDest = join(DIST_DIR, '404.html');
  if (existsSync(notFoundSrc)) {
    copyFileSync(notFoundSrc, notFoundDest);
    console.log('[prerender] Copied 404/index.html to 404.html for Vercel');
  }

  console.log('='.repeat(60));
  console.log(`[prerender] Done! ${successCount}/${ROUTES.length} routes pre-rendered.`);

  if (errors.length > 0) {
    console.log(`\n[prerender] Failed routes (${errors.length}):`);
    errors.forEach(({ route, error }) => console.log(`  - ${route}: ${error}`));
    console.log('\n[prerender] WARNING: Some routes failed but build will continue.');
    console.log('[prerender] Those routes will fall back to client-side rendering.');
  }

  if (successCount === ROUTES.length) {
    console.log('\n[prerender] All routes rendered successfully!');
  }

  if (successCount === 0) {
    console.error('\n[prerender] FATAL: No routes could be rendered. Failing build.');
    process.exit(1);
  }

  if (errors.length > 0 && successCount < ROUTES.length * 0.8) {
    console.error(`\n[prerender] FATAL: Too many failures (${errors.length}/${ROUTES.length}). Failing build.`);
    process.exit(1);
  }
}

prerender().catch((err) => {
  console.error('[prerender] Fatal error:', err);
  process.exit(1);
});
