# Spacing Standards Reference

This document defines the consistent spacing standards to be applied across all pages in The Automators website.

## Last Updated
Applied to: PricingPage.tsx (October 27, 2025)

---

## Section-Level Spacing

### Major Sections (Full-width containers)
```tsx
<section className="relative py-20 px-4 sm:px-6 lg:px-8">
```
- **Standard**: `py-20` (top and bottom padding)
- **Exception**: Hero sections use `pt-32 pb-20` (extra top padding for header clearance)

### Section Separation
- All sections automatically have `py-20` which creates consistent vertical spacing
- No additional margin needed between sections

---

## Hero Section Spacing Pattern

```tsx
{/* Hero Section */}
<section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto text-center relative z-10">
    <div className="h-10 mb-6"></div>                    {/* Header spacer */}
    <h1 className="... mb-6">Title</h1>                   {/* Title */}
    <p className="... mb-12">Description</p>              {/* Description */}
    
    {/* Primary Content (Tabs/Buttons) */}
    <div className="... mb-12">...</div>                  {/* Main interactive element */}
    
    {/* Secondary Content */}
    <div className="mt-12">...</div>                      {/* Follow-up element */}
    
    {/* Tertiary Content */}
    <div className="mt-12">...</div>                      {/* Additional element */}
  </div>
</section>
```

### Hero Section Elements
- **Header spacer**: `h-10 mb-6`
- **Main title**: `mb-6`
- **Subtitle/Description**: `mb-12`
- **Primary interactive elements** (tabs, buttons): `mb-12`
- **Follow-up elements**: `mt-12`
- **Additional elements**: `mt-12`

---

## Content Section Spacing Pattern

### Standard Content Section
```tsx
<section className="relative py-20 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto max-w-7xl relative z-10">
    <div className="text-center mb-12">              {/* Header block */}
      <h2 className="... mb-6">Section Title</h2>    {/* Section title */}
      <p className="...">Description</p>              {/* Optional description */}
    </div>
    
    {/* Main content grid/cards */}
    <div className="grid ... gap-6">...</div>         {/* Content with gap-6 or gap-8 */}
  </div>
</section>
```

### Content Section Elements
- **Section header block**: `mb-12`
- **Section title (h2)**: `mb-6`
- **Section description**: No bottom margin (last element in header block)
- **Content grids**: `gap-6` for dense layouts, `gap-8` for card layouts

---

## Card/Component Internal Spacing

### Pricing Cards
```tsx
<div className="p-8">
  <div className="... mb-6">Icon</div>               {/* Icon/Visual */}
  <h3 className="... mb-2">Title</h3>                {/* Card title */}
  <div className="mb-6">Price</div>                  {/* Price/Stats */}
  <p className="... mb-8">Description</p>            {/* Description */}
  <ul className="space-y-4 mb-8">Features</ul>      {/* Feature list */}
  <button>CTA</button>                               {/* No margin (last element) */}
</div>
```

### Card Spacing Standards
- **Icon/Visual element**: `mb-6`
- **Card title**: `mb-2`
- **Price/Stats**: `mb-6`
- **Description text**: `mb-8`
- **Feature lists**: `space-y-4` between items, `mb-8` after list
- **CTA button**: No margin (last element)

---

## FAQ/List Spacing

### FAQ Section
```tsx
<section className="relative py-20 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto max-w-3xl relative z-10">
    <h2 className="... mb-16">FAQ Title</h2>         {/* Large spacing for standalone titles */}
    
    <div className="space-y-6">                      {/* FAQ items */}
      <div className="... p-8">
        <h4 className="... mb-3">Question</h4>       {/* Question spacing */}
        <p className="...">Answer</p>                 {/* Answer (no margin) */}
      </div>
    </div>
  </div>
</section>
```

### FAQ Elements
- **Standalone section title**: `mb-16`
- **Between FAQ items**: `space-y-6`
- **Question heading**: `mb-3`
- **Answer text**: No margin (last element)

---

## Feature Grid/List Spacing

### Features with Icons
```tsx
<div className="grid ... gap-8">
  <div className="p-6">
    <div className="... mb-4">Icon</div>             {/* Icon */}
    <h4 className="... mb-2">Feature Title</h4>      {/* Title */}
    <p className="...">Description</p>               {/* Description (no margin) */}
  </div>
</div>
```

### Feature Elements
- **Between feature cards**: `gap-6` or `gap-8`
- **Icon**: `mb-4`
- **Feature title**: `mb-2`
- **Description**: No margin (last element)

---

## CTA Section Spacing

### Standard CTA
```tsx
<section className="relative py-20 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto max-w-4xl relative z-10">
    <div className="... p-12 sm:p-16">               {/* Card padding */}
      <div className="text-center">
        <h2 className="... mb-6">CTA Headline</h2>   {/* Headline */}
        <p className="... mb-8">Description</p>      {/* Description */}
        <button>CTA Button</button>                  {/* Button (no margin) */}
      </div>
    </div>
  </div>
</section>
```

### CTA Elements
- **CTA headline**: `mb-6`
- **CTA description**: `mb-8`
- **CTA button**: No margin (last element)

---

## Guarantee/Trust Section Spacing

### Trust Section with Sub-Cards
```tsx
<section className="relative py-20 px-4 sm:px-6 lg:px-8">
  <div className="... p-12">
    <div className="... mb-8">Icon</div>             {/* Large icon */}
    <h2 className="... mb-6">Title</h2>              {/* Title */}
    <p className="... mb-12">Description</p>         {/* Description */}
    <div className="grid ... gap-6">                 {/* Sub-cards */}
      <div className="p-6">
        <h4 className="... mb-2">Sub-title</h4>
        <p>Sub-description</p>
      </div>
    </div>
  </div>
</section>
```

### Trust Section Elements
- **Large icon**: `mb-8`
- **Section title**: `mb-6`
- **Main description**: `mb-12`
- **Sub-card grid**: `gap-6`
- **Sub-card title**: `mb-2`

---

## Tab/Toggle Spacing

### Tabs
```tsx
<div className="flex ... gap-4 mb-12">              {/* Tab container */}
  <button>Tab 1</button>
  <button>Tab 2</button>
  <button>Tab 3</button>
</div>
```

### Toggle Groups
```tsx
<div className="flex ... gap-3 mt-12">              {/* Toggle container */}
  <button>Option 1</button>
  <button>Option 2</button>
</div>
```

### Interactive Elements
- **Tab groups**: `mb-12` (after)
- **Toggle/Switch groups**: `mt-12` (before)
- **Between buttons in group**: `gap-3` or `gap-4`

---

## Payment Plan Grid Spacing

### Payment Options
```tsx
<div className="mt-12 max-w-4xl mx-auto">
  <h3 className="... mb-6">Plan Title</h3>          {/* Plan section title */}
  <div className="grid ... gap-4">                  {/* Plan options */}
    <button className="p-4">...</button>
  </div>
</div>
```

### Plan Elements
- **Plan section**: `mt-12` (separation from above)
- **Plan title**: `mb-6`
- **Between plan options**: `gap-4`
- **Plan card padding**: `p-4`

---

## Typography Spacing Quick Reference

### Headings
- `h1` (Hero): `mb-6`
- `h2` (Section, with description): `mb-6`
- `h2` (Section, standalone): `mb-16`
- `h3` (Subsection): `mb-6` or `mb-2` (in cards)
- `h4` (Card title): `mb-2` or `mb-3` (FAQ)

### Text Blocks
- **Hero description**: `mb-12`
- **Section description**: No margin (in header block)
- **Card description**: `mb-8`
- **Short description**: `mb-6`

### Lists
- **Feature lists**: `space-y-4`
- **FAQ items**: `space-y-6`
- **Card grids**: `gap-6` or `gap-8`

---

## Responsive Spacing Notes

### Breakpoint Adjustments
- Most spacing remains consistent across breakpoints
- Padding may adjust: `p-12 sm:p-16` for larger cards
- Grid gaps may adjust: `gap-6 lg:gap-8` for better desktop spacing

### Mobile Considerations
- Keep spacing proportional but slightly reduced on mobile
- Use responsive padding: `px-4 sm:px-6 lg:px-8`
- Maintain consistent vertical rhythm

---

## Application Checklist

When applying these standards to a new page:

- [ ] Hero section uses `pt-32 pb-20`
- [ ] All other sections use `py-20`
- [ ] Section headers use `mb-12`
- [ ] Tabs/Primary interactions use `mb-12`
- [ ] Toggles/Secondary interactions use `mt-12`
- [ ] Section titles (h2) use `mb-6` or `mb-16` (standalone)
- [ ] Card titles use `mb-2`
- [ ] Descriptions in cards use `mb-8`
- [ ] Feature lists use `space-y-4 mb-8`
- [ ] FAQ items use `space-y-6`
- [ ] CTA headlines use `mb-6`
- [ ] CTA descriptions use `mb-8`
- [ ] Content grids use `gap-6` or `gap-8`

---

## Examples from PricingPage.tsx

### Working Example - Hero Section
```tsx
<section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto text-center relative z-10">
    <div className="h-10 mb-6"></div>
    <h1 className="text-4xl sm:text-5xl lg:text-6xl gradient-text mb-6">
      Simple, Transparent Pricing
    </h1>
    <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12">
      One-time investment, lifetime value...
    </p>

    {/* Tabs */}
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {/* Tab buttons */}
    </div>

    {/* Currency Toggle */}
    <div className="flex items-center justify-center gap-3 mt-12">
      {/* Toggle buttons */}
    </div>

    {/* Payment Plan Options */}
    <div className="mt-12 max-w-4xl mx-auto">
      <h3 className="text-2xl text-white text-center mb-6">Choose Your Payment Plan</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Plan options */}
      </div>
    </div>
  </div>
</section>
```

---

## Notes

- These standards create a consistent visual rhythm across pages
- Maintain these patterns for professional, cohesive design
- Adjust only when specific design requirements necessitate it
- Document any exceptions with reasoning

