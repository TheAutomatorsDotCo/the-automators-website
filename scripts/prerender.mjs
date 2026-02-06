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
 *
 * Usage: node scripts/prerender.mjs
 * Run after `vite build` completes.
 */

import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist');
const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

// All routes to pre-render (must match App.tsx routes)
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
  '/assessment',
  '/terms',
  '/privacy-policy',
  '/tickets',
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
      // Parse URL to strip query strings / hash
      let pathname;
      try {
        pathname = new URL(req.url, BASE_URL).pathname;
      } catch {
        pathname = req.url;
      }

      // Resolve file path from the dist directory
      const filePath = join(DIST_DIR, pathname);
      const ext = extname(pathname);

      // If the request has a file extension and the file exists, serve it
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

      // SPA fallback: ALWAYS serve the original index.html from memory
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(spaFallbackHtml);
    });

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.error(`[prerender] ERROR: Port ${PORT} is already in use.`);
        console.error('            Kill the process using it or change PORT in the script.');
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
  // Match meta tags with name or property attributes
  const metaRegex = /<meta\s+[^>]*?(?:name|property)\s*=\s*["']([^"']+)["'][^>]*?\/?>/gi;
  // Match canonical link tags
  const canonicalRegex = /<link\s+[^>]*?rel\s*=\s*["']canonical["'][^>]*?\/?>/gi;

  // Collect all meta tags with their positions
  const metaOccurrences = new Map();
  let match;

  while ((match = metaRegex.exec(html)) !== null) {
    const key = match[1].toLowerCase();
    if (!metaOccurrences.has(key)) {
      metaOccurrences.set(key, []);
    }
    metaOccurrences.get(key).push({ start: match.index, length: match[0].length });
  }

  // Collect canonical link positions
  const canonicals = [];
  while ((match = canonicalRegex.exec(html)) !== null) {
    canonicals.push({ start: match.index, length: match[0].length });
  }

  // Build list of ranges to remove (all but last occurrence of each duplicate)
  const toRemove = [];

  for (const [, occurrences] of metaOccurrences) {
    if (occurrences.length > 1) {
      // Remove all but the last (helmet-injected) occurrence
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

  // Sort by position descending so removals don't shift earlier indices
  toRemove.sort((a, b) => b.start - a.start);

  let result = html;
  for (const { start, length } of toRemove) {
    // Also remove surrounding whitespace/newline
    let end = start + length;
    while (end < result.length && (result[end] === '\n' || result[end] === '\r' || result[end] === ' ')) {
      end++;
    }
    result = result.substring(0, start) + result.substring(end);
  }

  return result;
}

async function prerender() {
  console.log('[prerender] Starting pre-render process...\n');

  // Verify dist/ exists
  const indexPath = join(DIST_DIR, 'index.html');
  if (!existsSync(indexPath)) {
    console.error('[prerender] ERROR: dist/index.html not found. Run `vite build` first.');
    process.exit(1);
  }

  // Read the ORIGINAL SPA shell before any pre-rendering modifies it
  const originalHtml = readFileSync(indexPath, 'utf-8');
  console.log(`[prerender] Original index.html loaded (${(originalHtml.length / 1024).toFixed(1)} KB)`);

  // Start the static file server using the original HTML for SPA fallback
  const server = await startServer(originalHtml);

  // Launch Puppeteer
  console.log('[prerender] Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--disable-software-rasterizer',
      '--disable-dev-shm-usage',
      '--disable-web-security',
      '--disable-features=IsolateOrigins',
      '--disable-site-isolation-trials',
      // Suppress WebGL warnings
      '--ignore-gpu-blocklist',
      '--use-gl=swiftshader',
    ],
  });

  console.log(`[prerender] Browser launched. Rendering ${ROUTES.length} routes...\n`);

  let successCount = 0;
  const errors = [];

  for (const route of ROUTES) {
    let page;
    try {
      console.log(`[prerender] Rendering ${route}...`);
      page = await browser.newPage();

      // Set a reasonable viewport
      await page.setViewport({ width: 1280, height: 800 });

      // Suppress noisy console messages (WebGL errors, Three.js warnings, etc.)
      page.on('console', () => {});
      page.on('pageerror', () => {});

      // Navigate and wait for network to settle
      await page.goto(`${BASE_URL}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 45000,
      });

      // Wait for React to render meaningful content in #root
      await page.waitForFunction(
        () => {
          const root = document.getElementById('root');
          if (!root) return false;
          // Must have child elements and substantial content
          return root.children.length > 0 && root.innerHTML.length > 200;
        },
        { timeout: 20000 }
      );

      // Extra wait for react-helmet-async to update <head> meta tags
      // and for any final renders to settle
      await new Promise((r) => setTimeout(r, 2500));

      // Get the full rendered HTML
      const html = await page.content();

      // Determine output path
      const outputDir = route === '/' ? DIST_DIR : join(DIST_DIR, ...route.split('/').filter(Boolean));

      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
      }

      const outputPath = join(outputDir, 'index.html');

      // Clean up React-specific data attributes and deduplicate head tags
      let cleanHtml = html
        .replace(/ data-react-helmet="true"/g, '')
        .replace(/ data-rh="true"/g, '')
        .replace(/ data-reactroot=""/g, '');

      // Deduplicate meta tags and canonical links in <head>.
      // react-helmet-async appends page-specific tags AFTER the originals from
      // index.html. We keep the LAST occurrence of each (the helmet one).
      cleanHtml = deduplicateHeadTags(cleanHtml);

      // Clean up orphaned HTML comments from the original index.html template
      cleanHtml = cleanHtml.replace(/\s*<!--[^>]*?-->\s*/g, '\n');

      writeFileSync(outputPath, cleanHtml, 'utf-8');
      successCount++;

      // Log verification info
      const titleMatch = cleanHtml.match(/<title[^>]*>([^<]+)<\/title>/);
      const title = titleMatch ? titleMatch[1] : '(no title found)';
      const hasJsonLd = cleanHtml.includes('application/ld+json');
      const rootContent = cleanHtml.match(/<div id="root"[^>]*>([\s\S]*?)<\/div>\s*<script/);
      const contentLength = rootContent ? rootContent[1].length : 0;

      console.log(`[prerender]   OK  ${route}`);
      console.log(`             Title: "${title}"`);
      console.log(`             Size: ${(cleanHtml.length / 1024).toFixed(1)} KB | Root content: ${(contentLength / 1024).toFixed(1)} KB | JSON-LD: ${hasJsonLd ? 'yes' : 'no'}`);
      console.log('');

    } catch (err) {
      console.error(`[prerender]   FAIL  ${route}: ${err.message}\n`);
      errors.push({ route, error: err.message });
    } finally {
      if (page) await page.close().catch(() => {});
    }
  }

  await browser.close();
  server.close();

  // Summary
  console.log('='.repeat(60));
  console.log(`[prerender] Done! ${successCount}/${ROUTES.length} routes pre-rendered.`);

  if (errors.length > 0) {
    console.log(`\n[prerender] Failed routes:`);
    errors.forEach(({ route, error }) => console.log(`  - ${route}: ${error}`));
  }

  if (successCount === ROUTES.length) {
    console.log('\n[prerender] All routes rendered successfully!');
  }

  // Exit with error code if any routes failed
  if (errors.length > 0) {
    process.exit(1);
  }
}

prerender().catch((err) => {
  console.error('[prerender] Fatal error:', err);
  process.exit(1);
});
