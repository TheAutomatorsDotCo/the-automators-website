# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm i              # Install dependencies
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Build to dist/
npm run build:prerender  # Build + pre-render all routes for SEO (runs Puppeteer)
npm run prerender  # Pre-render only (requires dist/ to already exist)
```

There is no test suite or linter configured.

## Architecture

This is a **React 18 SPA** (Vite + TypeScript + Tailwind) for The Automators business website at `https://theautomators.co`.

### Routing

All routes are declared in [`src/App.tsx`](src/App.tsx) using React Router v6. The dev server uses `historyApiFallback: true` so all routes serve `index.html`. The production build is a static SPA — the prerender script uses Puppeteer to produce per-route `index.html` files in `dist/` for SEO.

### Page components

Each route maps to a page component in `src/components/`. Case study pages live under `src/components/CaseStudies/`. The layout is: `<Header>` + `<main>` (route outlet) + `<Footer>`, rendered in `App.tsx`.

### SEO

- [`src/components/SEO.tsx`](src/components/SEO.tsx) — reusable component wrapping `react-helmet-async`. Every page component should use it.
- [`src/components/GoogleAnalytics.tsx`](src/components/GoogleAnalytics.tsx) — injects GA4 (`G-K061PHT292`) once at app root.
- [`scripts/prerender.mjs`](scripts/prerender.mjs) — visits every route with Puppeteer, saves the rendered HTML, deduplicates `<head>` meta tags injected by both `index.html` defaults and `react-helmet-async`. When adding a new route, add it to the `ROUTES` array in this script.

### UI components

`src/components/ui/` contains the full shadcn/ui component library (Radix UI primitives + Tailwind). Use these existing primitives rather than adding new UI libraries. The `@` alias resolves to `src/`.

### 3D / visual

`@react-three/fiber` and `@react-three/drei` are used for 3D scenes (e.g. [`src/components/StarBackground.tsx`](src/components/StarBackground.tsx)). `three` is a direct dependency.

### Prerender environment detection

`scripts/prerender.mjs` auto-detects the platform: on Linux (Vercel/CI) it uses `@sparticuz/chromium` + `puppeteer-core`; on Windows/Mac it uses the bundled `puppeteer` binary.
