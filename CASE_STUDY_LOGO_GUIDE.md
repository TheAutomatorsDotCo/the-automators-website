# Case Study Logo Configuration Guide

Reference for correct logo sizing and aspect ratios across all case study pages.

**See also:** [CASE_STUDY_SPACING_GUIDE.md](CASE_STUDY_SPACING_GUIDE.md) for section padding and grid gap configurations.

---

## The Problem

Logo images can appear warped or stretched if the `width` and `height` attributes don't match the logo's natural aspect ratio. Since the case study pages use `w-auto object-contain`, the aspect ratio defined by the `width` and `height` attributes determines how the logo scales.

**Key principle:** The `width:height` ratio in the img attributes must match the logo's natural proportions.

---

## Logo Configurations by Page

| Page | Logo File | Width | Height | Aspect Ratio | CSS Classes | Natural Shape |
|------|-----------|-------|--------|--------------|-------------|---------------|
| Epic Deals | `/ed-logo.svg` | 300 | 72 | 4.17:1 | `h-28 sm:h-32 lg:h-36 w-auto object-contain` | Horizontal |
| Platinum Repairs | `/pr-logo.png` | 560 | 72 | 7.78:1 | `h-24 sm:h-28 lg:h-32 w-auto object-contain` | Wide Horizontal |
| Device Doctor | `/dd-logo.png` | 400 | 72 | 5.56:1 | `h-28 sm:h-32 lg:h-36 w-auto object-contain` | Horizontal |
| IN&OM Suid-Afrika | `/in-en-om-logo.png` | 160 | 160 | 1:1 | `h-32 sm:h-40 lg:h-48 w-auto object-contain` | Circular/Round |

---

## Display Sizes (Actual Height)

### Epic Deals & Device Doctor (Larger logos)
- **Mobile:** 112px (`h-28`)
- **Tablet (≥640px):** 128px (`sm:h-32`)
- **Desktop (≥1024px):** 144px (`lg:h-36`)

### Platinum Repairs (Standard size, widest ratio)
- **Mobile:** 96px (`h-24`)
- **Tablet (≥640px):** 112px (`sm:h-28`)
- **Desktop (≥1024px):** 128px (`lg:h-32`)

### IN&OM (Largest, circular logo)
- **Mobile:** 128px (`h-32`)
- **Tablet (≥640px):** 160px (`sm:h-40`)
- **Desktop (≥1024px):** 192px (`lg:h-48`)

---

## Standard Logo Implementation Template

### For Horizontal Logos (4:1 to 8:1 aspect ratio)

```tsx
<div className="flex justify-center mb-6 sm:mb-8">
  <img 
    src="/logo-file.png" 
    alt="Company Name - descriptive alt text"
    width={400}        // Adjust based on logo's natural aspect ratio
    height={72}        // Keep consistent for horizontal logos
    loading="eager"
    className="h-28 sm:h-32 lg:h-36 w-auto object-contain"
  />
</div>
```

### For Square/Circular Logos (1:1 aspect ratio)

```tsx
<div className="flex justify-center mb-6 sm:mb-8">
  <img 
    src="/logo-file.png" 
    alt="Company Name - descriptive alt text"
    width={160}        // Equal to height for 1:1 ratio
    height={160}       // Equal to width for 1:1 ratio
    loading="eager"
    className="h-32 sm:h-40 lg:h-48 w-auto object-contain"
  />
</div>
```

---

## How to Determine Correct Dimensions for New Logos

1. **Identify the logo's natural shape:**
   - Is it horizontal, vertical, square, or circular?

2. **Determine the aspect ratio:**
   - Horizontal logos typically range from 3:1 to 8:1 (width:height)
   - Square/circular logos use 1:1
   - Vertical logos use ratios like 1:2 or 2:3

3. **Choose appropriate width and height attributes:**
   - Keep `height={72}` as a baseline for horizontal logos
   - Adjust `width` to match the aspect ratio (e.g., width={400} for ~5.5:1)
   - For square logos, use equal values (e.g., width={160} height={160})

4. **Test and adjust:**
   - If the logo appears vertically stretched → increase the width value
   - If the logo appears horizontally squashed → decrease the width value
   - If the logo appears too small → increase height class values (`h-28` → `h-32`)

---

## Common Aspect Ratios Reference

| Ratio | Example Dimensions | Use Case |
|-------|-------------------|----------|
| 3:1 | width={216} height={72} | Compact horizontal logo |
| 4:1 | width={288} height={72} | Standard horizontal logo |
| 5:1 | width={360} height={72} | Wide horizontal logo |
| 6:1 | width={432} height={72} | Very wide horizontal logo |
| 7:1 | width={504} height={72} | Extra wide horizontal logo |
| 8:1 | width={576} height={72} | Extremely wide horizontal logo |
| 1:1 | width={160} height={160} | Circular or square logo |

---

## CSS Classes Explained

### Height Classes
- `h-24` = 96px
- `h-28` = 112px
- `h-32` = 128px
- `h-36` = 144px
- `h-40` = 160px
- `h-48` = 192px

### Essential Classes for Logos
- `w-auto` — Allows width to scale proportionally based on height
- `object-contain` — Ensures the logo fits within its container without distortion
- `flex justify-center` (on parent div) — Centers the logo horizontally

---

## Important Notes

1. **Never modify both width and height simultaneously** when adjusting logo proportions. Change one dimension at a time and test.

2. **The `w-auto` class is critical** — it allows the browser to calculate the width based on the height and aspect ratio.

3. **Always use `object-contain`** — this prevents the logo from being cropped or stretched beyond its natural proportions.

4. **SVG files are more flexible** — they scale better than PNG files, but still benefit from correct aspect ratio attributes.

5. **Test on multiple screen sizes** — what looks good on desktop might be too large or small on mobile.

---

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| Logo appears vertically stretched | Width attribute too small for aspect ratio | Increase `width` value |
| Logo appears horizontally squashed | Width attribute too large for aspect ratio | Decrease `width` value |
| Circular logo appears flat/oval | Non-1:1 aspect ratio | Set width and height to equal values |
| Logo too small overall | Height classes too small | Increase height classes (e.g., `h-24` → `h-28`) |
| Logo too large overall | Height classes too large | Decrease height classes (e.g., `h-36` → `h-32`) |

---

## Changelog

**2026-02-06:** Initial documentation
- Documented correct aspect ratios for all four case study pages
- Fixed warped logos on Platinum Repairs, Device Doctor, and IN&OM pages
- Standardized logo sizing approach across all pages
