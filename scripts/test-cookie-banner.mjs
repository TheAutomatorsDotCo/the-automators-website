/**
 * Cookie Banner Visibility Test
 *
 * Verifies that the cookie consent banner's Accept button is visible
 * and clickable in the viewport at key screen sizes, and not overlapped
 * by the chat widget launcher.
 *
 * This test prevents regressions where:
 * 1. Missing CSS classes could push the banner off-screen
 * 2. The banner could be covered by the chat widget launcher
 *
 * Usage: node scripts/test-cookie-banner.mjs
 * Requires: Built dist/ directory (run `npm run build` first)
 *
 * Exit codes:
 *   0 - Test passed
 *   1 - Test failed (banner not in viewport or overlapped by chat widget)
 */

import { createServer } from 'http';
import { readFileSync, existsSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist');
const PORT = 4174;
const BASE_URL = `http://localhost:${PORT}`;

const VIEWPORTS = [
  { name: 'Mobile (360x800)', width: 360, height: 800 },
  { name: 'Mobile (390x844)', width: 390, height: 844 },
  { name: 'Mobile (412x915)', width: 412, height: 915 },
  { name: 'Desktop (1440x900)', width: 1440, height: 900 },
];

async function launchBrowser() {
  const commonArgs = [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-gpu',
    '--disable-software-rasterizer',
    '--disable-dev-shm-usage',
  ];

  const isCI = process.platform === 'linux';

  if (isCI) {
    const chromium = (await import('@sparticuz/chromium')).default;
    const puppeteerCore = (await import('puppeteer-core')).default;

    console.log('[test] Using @sparticuz/chromium (CI/Vercel environment)');
    return puppeteerCore.launch({
      args: [...chromium.args, ...commonArgs],
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  } else {
    console.log('[test] Using puppeteer with bundled Chromium (local environment)');
    const puppeteer = (await import('puppeteer')).default;
    return puppeteer.launch({
      headless: true,
      args: commonArgs,
    });
  }
}

function startServer() {
  return new Promise((resolve, reject) => {
    const indexPath = join(DIST_DIR, 'index.html');
    if (!existsSync(indexPath)) {
      reject(new Error('dist/index.html not found. Run `npm run build` first.'));
      return;
    }

    const indexHtml = readFileSync(indexPath, 'utf-8');

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
      res.end(indexHtml);
    });

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.error(`[test] ERROR: Port ${PORT} is already in use.`);
      }
      reject(err);
    });

    server.listen(PORT, () => {
      console.log(`[test] Static server running on ${BASE_URL}`);
      resolve(server);
    });
  });
}

async function testBannerVisibility(browser, viewport) {
  const page = await browser.newPage();

  try {
    await page.setViewport({ width: viewport.width, height: viewport.height });

    await page.evaluateOnNewDocument(() => {
      localStorage.removeItem('ta_cookie_consent');
    });

    await page.goto(BASE_URL, { waitUntil: 'networkidle0', timeout: 30000 });

    await page.waitForSelector('button', { timeout: 10000 });

    // Wait for chat widget to potentially load (it loads async)
    await new Promise((r) => setTimeout(r, 3000));

    const result = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const acceptBtn = buttons.find((btn) => btn.textContent?.trim() === 'Accept');

      if (!acceptBtn) {
        return { found: false, error: 'Accept button not found in DOM' };
      }

      const rect = acceptBtn.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;

      const isInViewport =
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= viewportHeight &&
        rect.right <= viewportWidth;

      // Find chat widget launcher
      const chatSelectors = [
        '#cw-bubble-holder',
        '.woot--bubble-holder',
        '.woot-widget-bubble',
      ];

      let chatRect = null;
      for (const selector of chatSelectors) {
        const el = document.querySelector(selector);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.width > 0 && r.height > 0) {
            chatRect = {
              top: r.top,
              bottom: r.bottom,
              left: r.left,
              right: r.right,
            };
            break;
          }
        }
      }

      // Check for overlap between Accept button and chat widget
      let overlapsChat = false;
      if (chatRect) {
        overlapsChat = !(
          rect.right < chatRect.left ||
          rect.left > chatRect.right ||
          rect.bottom < chatRect.top ||
          rect.top > chatRect.bottom
        );
      }

      const bannerContainer = acceptBtn.closest('.cookie-banner, .fixed');
      const bannerStyles = bannerContainer ? window.getComputedStyle(bannerContainer) : null;

      return {
        found: true,
        isInViewport,
        overlapsChat,
        chatWidgetFound: !!chatRect,
        buttonRect: {
          top: Math.round(rect.top),
          bottom: Math.round(rect.bottom),
          left: Math.round(rect.left),
          right: Math.round(rect.right),
        },
        chatRect: chatRect ? {
          top: Math.round(chatRect.top),
          bottom: Math.round(chatRect.bottom),
          left: Math.round(chatRect.left),
          right: Math.round(chatRect.right),
        } : null,
        viewport: { width: viewportWidth, height: viewportHeight },
        bannerPosition: bannerStyles?.bottom,
        bannerBottom: bannerStyles ? parseInt(bannerStyles.bottom, 10) : null,
      };
    });

    return result;
  } finally {
    await page.close();
  }
}

async function runTests() {
  console.log('[test] Cookie Banner Visibility Test');
  console.log('='.repeat(50));

  const server = await startServer();

  let browser;
  try {
    browser = await launchBrowser();
  } catch (err) {
    server.close();
    console.error('[test] Failed to launch browser:', err.message);
    process.exit(1);
  }

  let allPassed = true;
  const results = [];

  for (const viewport of VIEWPORTS) {
    console.log(`\n[test] Testing ${viewport.name}...`);

    try {
      const result = await testBannerVisibility(browser, viewport);
      results.push({ viewport: viewport.name, ...result });

      if (!result.found) {
        console.error(`[test]   FAIL: ${result.error}`);
        allPassed = false;
      } else if (!result.isInViewport) {
        console.error(`[test]   FAIL: Accept button is NOT in viewport`);
        console.error(`[test]         Button position: top=${result.buttonRect.top}px, bottom=${result.buttonRect.bottom}px`);
        console.error(`[test]         Viewport height: ${result.viewport.height}px`);
        console.error(`[test]         Banner CSS bottom: ${result.bannerPosition}`);
        allPassed = false;
      } else if (result.overlapsChat) {
        console.error(`[test]   FAIL: Accept button OVERLAPS chat widget launcher`);
        console.error(`[test]         Button: top=${result.buttonRect.top}px, bottom=${result.buttonRect.bottom}px, left=${result.buttonRect.left}px, right=${result.buttonRect.right}px`);
        console.error(`[test]         Chat:   top=${result.chatRect?.top}px, bottom=${result.chatRect?.bottom}px, left=${result.chatRect?.left}px, right=${result.chatRect?.right}px`);
        allPassed = false;
      } else {
        console.log(`[test]   PASS: Accept button is in viewport`);
        console.log(`[test]         Button position: top=${result.buttonRect.top}px, bottom=${result.buttonRect.bottom}px`);
        if (result.chatWidgetFound) {
          console.log(`[test]         Chat widget found - no overlap`);
        } else {
          console.log(`[test]         Note: Chat widget not loaded (will verify on live site)`);
        }
      }
    } catch (err) {
      console.error(`[test]   ERROR: ${err.message}`);
      results.push({ viewport: viewport.name, error: err.message });
      allPassed = false;
    }
  }

  await browser.close();
  server.close();

  console.log('\n' + '='.repeat(50));

  if (allPassed) {
    console.log('[test] All tests PASSED');
    console.log('[test] Cookie banner Accept button is visible and not overlapped at all tested screen sizes.');
    process.exit(0);
  } else {
    console.error('[test] Some tests FAILED');
    console.error('[test] The cookie banner may not be visible or may be overlapped by the chat widget,');
    console.error('[test] which would break GA tracking.');
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error('[test] Fatal error:', err);
  process.exit(1);
});
