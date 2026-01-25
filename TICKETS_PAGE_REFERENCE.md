# Tickets Page Reference

## Overview
A hidden support tickets page that embeds a Fillout form for internal use.

---

## Access
- **URL:** `/tickets`
- **Direct access only** - No navigation links point to this page
- **Production URL:** `https://theautomators.co/tickets`

---

## Technical Details

### Files Created/Modified
| File | Change |
|------|--------|
| `src/components/TicketsPage.tsx` | New component with Fillout embed |
| `src/App.tsx` | Added route for `/tickets` |

### Form Integration
- **Provider:** Fillout
- **Form ID:** `sp9dCp4YsMus`
- **Embed Type:** Standard (fits within page layout)
- **Features:** Dynamic resize, parameter inheritance

### Page Design
- Matches site styling (gradient background, spinning stars)
- Glass card container for the form
- Simple "Tickets" heading
- No subtitle or additional content

---

## Code Reference

### TicketsPage Component
```tsx
// Key features:
// 1. useEffect loads Fillout script on mount, cleans up on unmount
// 2. Standard embed inside glass card container
// 3. Consistent styling with other pages (SEO, StarsCanvas)
```

### Route Definition (App.tsx)
```tsx
<Route path="/tickets" element={<TicketsPage />} />
```

---

## Fillout Form Management
To modify the form:
1. Log into Fillout dashboard
2. Edit form `sp9dCp4YsMus`
3. Changes reflect automatically on the embedded form

---

## Deployment
- **Deployed:** January 25, 2026
- **Commit:** `b9c16cd` - "Add hidden /tickets page with Fillout form embed"
- **Auto-deployed** via Vercel on push to `main`

---

**Document Created:** 2026-01-25
