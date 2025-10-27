# SPA Routing Fix - 404 Error on Page Refresh

## Problem Description

When refreshing any page other than the homepage (e.g., `/assessment`, `/services`, `/pricing`), the application returned a 404 error with "NOT_FOUND" displayed on screen.

**Error Messages:**
```
favicon.ico:1  Failed to load resource: the server responded with a status of 404 ()
assessment:1   Failed to load resource: the server responded with a status of 404 ()
services:1     Failed to load resource: the server responded with a status of 404 ()
```

## Root Cause

This is a common issue with Single Page Applications (SPAs) that use client-side routing:

1. **Client-side routing** (React Router) handles navigation within the app
2. When you **refresh the browser** on a route like `/assessment`, the browser makes a request to the server for that path
3. The server doesn't have a physical file at `/assessment`, so it returns a 404 error
4. The homepage (`/`) works because `index.html` exists at the root

## Solution

The fix requires configuring both the **development server** and **production hosting** to serve `index.html` for all routes, allowing React Router to handle the routing.

---

## Fix for Development (Vite)

**File:** `vite.config.ts`

Add `historyApiFallback: true` to the server configuration:

```typescript
export default defineConfig({
  plugins: [react()],
  resolve: {
    // ... existing config
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true,
    historyApiFallback: true,  // ← Add this line
  },
});
```

**After making this change:**
- Stop your dev server (Ctrl+C)
- Restart with `npm run dev`
- Test by refreshing any page

---

## Fix for Production (Vercel)

**File:** `vercel.json` (create in project root)

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**What this does:**
- Tells Vercel to rewrite all routes to serve `index.html`
- React Router then takes over and renders the correct component
- Automatically applies on next deployment

---

## For Other Hosting Providers

### Netlify
Create `_redirects` file in `public/` folder:
```
/*  /index.html  200
```

### Apache
Create `.htaccess` file:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Nginx
Add to server configuration:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## About the Favicon Warning

The `favicon.ico:1 Failed to load resource: 404` warning is separate and harmless:

- Browsers automatically request `/favicon.ico` by default
- Your app already has a favicon configured in `index.html` using `/logo.png`
- This 404 doesn't break functionality - it's just a console warning

**To eliminate the warning (optional):**
1. Convert `public/logo.png` to `favicon.ico` format
2. Place it in the `public/` folder
3. Update `index.html`:
   ```html
   <link rel="icon" type="image/x-icon" href="/favicon.ico" />
   ```

---

## Git Commits Applied

1. **Commit:** `4d07bdc` - "Fix 404 errors on page refresh by adding historyApiFallback"
   - Modified: `vite.config.ts`

2. **Commit:** `dcfcdc5` - "Add Vercel config for SPA routing - fixes 404 on page refresh"
   - Created: `vercel.json`

---

## Testing Checklist

After applying the fix:

- [ ] Dev server restarts successfully
- [ ] Refresh homepage (`/`) - should work
- [ ] Refresh `/assessment` - should work
- [ ] Refresh `/services` - should work
- [ ] Refresh `/pricing` - should work
- [ ] Refresh `/contact` - should work
- [ ] Navigation between pages works
- [ ] Direct URL access works (type URL in browser)
- [ ] Production deployment succeeds on Vercel

---

## Key Takeaways

1. **Always configure history fallback** for SPAs with client-side routing
2. **Development and production** require separate configurations
3. **Different hosting providers** have different configuration methods
4. This is a **standard requirement** for all React Router (and similar) applications

---

## Related Documentation

- [Vite Server Options](https://vitejs.dev/config/server-options.html#server-history-fallback)
- [Vercel Rewrites](https://vercel.com/docs/projects/project-configuration#rewrites)
- [React Router - Configuring Your Server](https://reactrouter.com/en/main/guides/deploying)

---

**Date Fixed:** October 27, 2025
**Framework:** Vite + React + React Router
**Hosting:** Vercel

