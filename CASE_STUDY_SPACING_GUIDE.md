# Case Study Spacing Guide

Reference for consistent spacing across all case study pages.

**See also:** [CASE_STUDY_LOGO_GUIDE.md](CASE_STUDY_LOGO_GUIDE.md) for logo sizing and aspect ratio configurations.

---

## The Problem

This project uses a **pre-compiled, static** `src/index.css` file -- there is no Tailwind CSS JIT compiler running. This means any Tailwind utility class used in a component **must** have a matching CSS rule in `src/index.css`, or it silently does nothing.

Several critical CSS utilities were missing from the compiled file:

- `py-16` (section vertical padding) did not exist, so all `<section>` elements had **zero** vertical padding.
- Responsive gap variants (`sm:gap-*`, `lg:gap-*`) did not exist, so grid gaps were not scaling with viewport size.
- Responsive padding variants (`sm:py-20`, `lg:py-24`, `lg:py-32`) did not exist.

---

## CSS Utilities Added to `src/index.css`

The following classes were added to fix the spacing. If you ever need a new utility, you must add it manually to `src/index.css` in the correct section.

### Base Utilities (in `@layer utilities`)

| Class     | CSS Rule                                    | Value  |
|-----------|---------------------------------------------|--------|
| `gap-10`  | `gap: calc(var(--spacing) * 10)`            | 40px   |
| `py-16`   | `padding-block: calc(var(--spacing) * 16)`  | 64px   |
| `py-24`   | `padding-block: calc(var(--spacing) * 24)`  | 96px   |
| `pb-16`   | `padding-bottom: calc(var(--spacing) * 16)` | 64px   |
| `mb-10`   | `margin-bottom: calc(var(--spacing) * 10)`  | 40px   |

### Responsive `sm:` Variants (inside `@media (width >= 40rem)`)

| Class       | CSS Rule                                    | Value  |
|-------------|---------------------------------------------|--------|
| `sm:gap-6`  | `gap: calc(var(--spacing) * 6)`             | 24px   |
| `sm:gap-8`  | `gap: calc(var(--spacing) * 8)`             | 32px   |
| `sm:gap-10` | `gap: calc(var(--spacing) * 10)`            | 40px   |
| `sm:gap-12` | `gap: calc(var(--spacing) * 12)`            | 48px   |
| `sm:py-20`  | `padding-block: calc(var(--spacing) * 20)`  | 80px   |
| `sm:pb-20`  | `padding-bottom: calc(var(--spacing) * 20)` | 80px   |
| `sm:mb-10`  | `margin-bottom: calc(var(--spacing) * 10)`  | 40px   |
| `sm:mb-12`  | `margin-bottom: calc(var(--spacing) * 12)`  | 48px   |

### Responsive `lg:` Variants (inside `@media (width >= 64rem)`)

| Class       | CSS Rule                                    | Value  |
|-------------|---------------------------------------------|--------|
| `lg:gap-8`  | `gap: calc(var(--spacing) * 8)`             | 32px   |
| `lg:gap-10` | `gap: calc(var(--spacing) * 10)`            | 40px   |
| `lg:gap-12` | `gap: calc(var(--spacing) * 12)`            | 48px   |
| `lg:py-24`  | `padding-block: calc(var(--spacing) * 24)`  | 96px   |
| `lg:py-32`  | `padding-block: calc(var(--spacing) * 32)`  | 128px  |
| `lg:pb-20`  | `padding-bottom: calc(var(--spacing) * 20)` | 80px   |

---

## Standard Grid Gap Values

Use these gap classes for each grid type across all case study pages:

| Grid Type                          | Classes                          | Mobile | sm (640px+) | lg (1024px+) |
|------------------------------------|----------------------------------|--------|-------------|--------------|
| 4-col stats grid                   | `gap-6 sm:gap-8 lg:gap-10`      | 24px   | 32px        | 40px         |
| 2-col challenge / feature cards    | `gap-8 sm:gap-10`               | 32px   | 40px        | --           |
| 3-col detailed metrics             | `gap-6 sm:gap-8 lg:gap-10`      | 24px   | 32px        | 40px         |
| 3-col related case studies         | `gap-8 sm:gap-10`               | 32px   | 40px        | --           |
| 2-col "Why Us" / side-by-side      | `gap-8 sm:gap-10 lg:gap-12`     | 32px   | 40px        | 48px         |

---

## Section Padding

Every `<section>` on a case study page should use:

```
className="py-16 sm:py-20 lg:py-24"
```

The final CTA section uses a larger bottom value:

```
className="py-16 sm:py-20 lg:py-32"
```

---

## Current Status of Each Page

All four case study pages already have the correct gap and section padding values. The CSS utilities in `src/index.css` are shared across all pages, so the fix applied globally.

| Page                       | File                                                        | Status |
|----------------------------|-------------------------------------------------------------|--------|
| `/case-studies/epic-deals` | `src/components/CaseStudies/EpicDealsCaseStudy.tsx`         | Done   |
| `/case-studies/platinum-repairs` | `src/components/CaseStudies/PlatinumRepairsCaseStudy.tsx` | Done   |
| `/case-studies/device-doctor`    | `src/components/CaseStudies/DeviceDoctorCaseStudy.tsx`    | Done   |
| `/case-studies/in-en-om`         | `src/components/CaseStudies/InEnOmCaseStudy.tsx`          | Done   |

---

## Checklist for New Case Study Pages

When creating a new case study page, verify the following:

1. **Section padding** -- every `<section>` uses `py-16 sm:py-20 lg:py-24`.
2. **Stats grid** -- uses `gap-6 sm:gap-8 lg:gap-10`.
3. **Challenge / feature cards** -- uses `gap-8 sm:gap-10`.
4. **Related case studies grid** -- uses `gap-8 sm:gap-10`.
5. **Side-by-side layouts** -- uses `gap-8 sm:gap-10 lg:gap-12`.
6. **CTA section** -- uses `py-16 sm:py-20 lg:py-32`.
7. **CSS check** -- if you use any new Tailwind utility class, verify it exists in `src/index.css`. If not, add it manually to the correct section (base, `sm:`, or `lg:`).

---

## Important: No Tailwind JIT

This project does **not** have Tailwind CSS installed as a dependency. The `src/index.css` file is a static, pre-compiled artifact. Any class you write in JSX that does not have a matching CSS rule in `src/index.css` will be silently ignored. Always check the CSS file before using a new utility class.
