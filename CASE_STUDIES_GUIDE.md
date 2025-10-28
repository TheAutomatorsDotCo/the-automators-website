# Case Studies Guide

## Overview

The case studies section is designed to showcase real results from your automation projects. This guide will help you add new case studies and maintain the existing ones.

## File Structure

```
src/components/CaseStudies/
├── CaseStudiesPage.tsx          # Main listing page
├── PlatinumRepairsCaseStudy.tsx # Individual case study example
└── [YourNewCaseStudy].tsx       # Future case studies
```

## How to Add a New Case Study

### Step 1: Create the Case Study Component

1. Create a new file in `src/components/CaseStudies/` named after your client (e.g., `CompanyNameCaseStudy.tsx`)
2. Use `PlatinumRepairsCaseStudy.tsx` as a template
3. Customize the following sections:
   - **Hero Section**: Update the headline and description
   - **Impact Section**: Update stats and charts with actual data
   - **Solutions Section**: Update the tab content with specific solutions
   - **Why Us Section**: Customize the value proposition
   - **CTA Section**: Update the call-to-action

### Step 2: Update the Listing Page

Edit `src/components/CaseStudies/CaseStudiesPage.tsx`:

```typescript
const caseStudies: CaseStudy[] = [
  // Existing case studies...
  {
    id: 'your-company-slug',
    title: 'Your Compelling Headline',
    company: 'Company Name',
    industry: 'Industry Type',
    description: 'Brief description of the project and results',
    stats: [
      {
        label: 'Metric Name',
        value: '75%',
        icon: <TrendingUp className="w-6 h-6" />,
      },
      // Add 2-3 key stats
    ],
    slug: '/case-studies/your-company-slug',
    gradient: 'from-cyan-500 to-teal-500', // Choose your gradient
  },
];
```

### Step 3: Add Routing

Edit `src/App.tsx` to add the new route:

```typescript
import { YourNewCaseStudy } from './components/CaseStudies/YourNewCaseStudy';

// In the Routes section:
<Route path="/case-studies/your-company-slug" element={<YourNewCaseStudy />} />
```

## Customization Options

### Charts

The case study uses Chart.js for visualizations. You can use:

- **Doughnut Chart**: For percentage-based metrics
- **Bar Chart**: For before/after comparisons
- **Line Chart**: For trends over time

Example chart data:

```typescript
const chartData = {
  labels: ['Before', 'After'],
  datasets: [{
    data: [100, 25],
    backgroundColor: ['#ef4444', '#10b981'],
    borderRadius: 8,
  }],
};
```

### Gradient Colors

Choose from these gradients or create your own:

- `from-indigo-500 to-purple-500` - Purple/Blue
- `from-cyan-500 to-teal-500` - Teal/Cyan
- `from-orange-500 to-red-500` - Orange/Red
- `from-green-500 to-emerald-500` - Green
- `from-pink-500 to-rose-500` - Pink/Rose

### Icons

Available icons from `lucide-react`:
- `TrendingUp`, `TrendingDown`
- `Users`, `UserCheck`
- `Zap`, `Clock`, `Target`
- `BarChart3`, `PieChart`, `LineChart`
- `MessageSquare`, `Phone`, `Mail`
- `DollarSign`, `Award`, `Shield`

## SEO Best Practices

Each case study should include:

1. **Unique Title**: Include company name and key result
2. **Meta Description**: 150-160 characters highlighting main achievement
3. **Keywords**: Include industry, solution type, and results
4. **Structured Data**: Consider adding organization/review schema

Example:

```typescript
<SEO
  title="Company Name Case Study - 80% Time Saved"
  description="See how we helped Company Name save 80% of their time through automation..."
  path="/case-studies/company-name"
  keywords="automation case study, industry automation, workflow optimization"
/>
```

## Content Guidelines

### Writing Tips

1. **Start with the Result**: Lead with the biggest win
2. **Use Specific Numbers**: "87% reduction" not "significant reduction"
3. **Tell a Story**: Context → Challenge → Solution → Results
4. **Include Social Proof**: Quotes, testimonials, or client endorsements
5. **Make it Scannable**: Use headings, bullet points, and highlights

### Sections to Include

1. **Hero**: Attention-grabbing headline with key metric
2. **The Challenge**: What problem did they face?
3. **The Solution**: How did you solve it?
4. **The Results**: What changed? Include metrics
5. **Client Testimonial** (optional but recommended)
6. **CTA**: Clear next step for readers

## Image Guidelines

If you want to add images (company logos, screenshots, etc.):

1. Add images to the `public/` folder
2. Use WebP format for best performance
3. Include alt text for accessibility
4. Keep file sizes under 200KB

Example:

```typescript
<img 
  src="/company-logo.webp" 
  alt="Company Name Logo" 
  className="w-32 h-32 object-contain"
/>
```

## Testing Checklist

Before publishing a new case study:

- [ ] All stats and numbers are accurate
- [ ] Charts render correctly on all screen sizes
- [ ] Links work (internal and external)
- [ ] SEO metadata is complete
- [ ] Mobile responsiveness is tested
- [ ] Load time is acceptable
- [ ] Client has approved the content
- [ ] Grammar and spelling are checked

## Analytics

Track these metrics for each case study:

- Page views
- Time on page
- Scroll depth
- CTA click rate
- Conversion to contact form

Use Google Analytics events to track user engagement.

## Future Enhancements

Consider adding:

1. **Video Testimonials**: Embed client videos
2. **Interactive Demos**: Show the automation in action
3. **Downloadable PDF**: Offer case study as download
4. **Related Case Studies**: Suggest similar stories
5. **Social Sharing**: Add share buttons

## Support

For questions or assistance with case studies, refer to:
- `PlatinumRepairsCaseStudy.tsx` - Complete example
- `CaseStudiesPage.tsx` - Listing page structure
- React Router docs for routing
- Chart.js docs for visualizations

