# Footer Component Reference Documentation

## Overview
The Footer is a reusable React component that appears on all pages of The Automators website. It provides navigation, contact information, social media links, and legal information.

## Location
- **Component File**: `src/components/Footer.tsx`
- **Integration**: `src/App.tsx` (line 53) - Applied globally to all pages

## Component Structure

### Layout
The footer uses a responsive 4-column grid layout:
- **Mobile**: Single column (stacked)
- **Tablet (sm)**: 2 columns
- **Desktop (lg)**: 4 columns

### Design System
- **Background**: Dark gradient `from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]`
- **Border**: Top border with `border-white/10` for subtle separation
- **Typography**: 
  - Headings: `text-white text-lg font-medium`
  - Body text: `text-white/70 text-sm`
  - Muted text: `text-white/50 text-sm`
- **Spacing**:
  - Container padding: `py-16 sm:py-20 lg:py-24`
  - Column gaps: `gap-10 sm:gap-12 lg:gap-16`
  - Top margin on headings: `marginTop: '1.5rem'` (inline style)

## Content Sections

### Column 1: Brand Identity
```
- Logo (with hover effect and glow)
- Company name: "The Automators"
- Tagline: "Automating business processes to save you time and increase efficiency."
```

**Code Features**:
- Logo image: `/logo.png`
- Gradient glow effect on hover
- Links to home page (`/`)

### Column 2: Quick Links
Navigation to main pages:
- Home (`/`)
- Services (`/services`)
- Pricing (`/pricing`)
- Assessment (`/assessment`)
- Case Studies (`/case-studies`)
- Contact (`/contact`)

### Column 3: Services
Links to service pages:
- Workflow Automation (`/services/automation`)
- AI Chatbots (`/services/chatbots`)
- Voice Agents (`/services/voice-agents`)

### Column 4: Contact Information
Contact details and social media:
- **Email**: sales@theautomators.co (mailto link with Mail icon)
- **Phone**: +27 82 770 6456 (tel link with Phone icon)
- **Social**: Facebook link with icon button

**Icons Used**: Mail, Phone, Facebook (from lucide-react)

## Footer Bottom Section

### Left Side
- Copyright notice: `© {currentYear} The Automators. All rights reserved.`
- Dynamically updates year using `new Date().getFullYear()`

### Right Side
Legal links separated by pipe (`|`):
- Terms (`/terms`)
- Privacy Policy (`/privacy-policy`)

## Technical Details

### Dependencies
```tsx
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook } from 'lucide-react';
```

### Responsive Behavior
- **Mobile (< 640px)**: Single column, stacked layout
- **Tablet (640px - 1024px)**: 2-column grid
- **Desktop (≥ 1024px)**: 4-column grid

### Accessibility Features
- Semantic HTML5 `<footer>` element
- ARIA labels on contact links
- Keyboard navigable (all links accessible via Tab)
- External links use `target="_blank"` with `rel="noopener noreferrer"`
- Descriptive alt text on logo image

### Hover Effects
- Links: `text-white/70` → `text-white`
- Logo: Scale transform (110%)
- Social icon: Scale transform (110%)
- Phone/email icons: Color transition
- All transitions: `transition-colors` or `transition-transform`

## Usage

### Global Integration (Current)
The Footer is integrated in `src/App.tsx` and appears on all pages:

```tsx
import { Footer } from './components/Footer';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen">
          <Header />
          <main>
            <Routes>
              {/* All routes */}
            </Routes>
          </main>
          <Footer />  {/* Applied globally */}
        </div>
      </Router>
    </HelmetProvider>
  );
}
```

### Individual Page Integration (Alternative)
If you need to add it to individual pages:

```tsx
import { Footer } from './components/Footer';

export function YourPage() {
  return (
    <>
      {/* Your page content */}
      <Footer />
    </>
  );
}
```

## Styling Classes Reference

### Container Classes
```tsx
className="relative bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] border-t border-white/10"
```

### Grid Classes
```tsx
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 mb-12 sm:mb-16"
```

### Link Hover States
```tsx
className="text-white/70 hover:text-white transition-colors text-sm inline-block"
```

## Contact Information (Update When Changed)

**Current Contact Details**:
- Email: sales@theautomators.co
- Phone: +27 82 770 6456
- Facebook: https://www.facebook.com/theautomators.co

**To Update Contact Info**:
1. Open `src/components/Footer.tsx`
2. Locate Column 4 - Contact section (around line 80)
3. Update the relevant `href` attributes:
   - Email: `href="mailto:youremail@domain.com"`
   - Phone: `href="tel:+1234567890"`
   - Social: `href="https://www.facebook.com/yourpage"`
4. Update display text inside `<span>` tags

## Navigation Links (Update When Changed)

**To Add/Remove Quick Links**:
Edit the `quickLinks` array at the top of the component:

```tsx
const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  // Add more here
];
```

**To Add/Remove Service Links**:
Edit the `serviceLinks` array:

```tsx
const serviceLinks = [
  { name: 'Workflow Automation', path: '/services/automation' },
  { name: 'AI Chatbots', path: '/services/chatbots' },
  // Add more here
];
```

## Social Media Integration

**Current**: Facebook only

**To Add More Social Icons**:
1. Import additional icons from lucide-react:
   ```tsx
   import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
   ```

2. Add new list items in Column 4:
   ```tsx
   <li className="pt-2">
     <a
       href="https://twitter.com/yourhandle"
       target="_blank"
       rel="noopener noreferrer"
       className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors text-sm group"
       aria-label="Visit our Twitter page"
     >
       <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
         <Twitter className="w-4 h-4 text-white" />
       </div>
       <span>Follow us on Twitter</span>
     </a>
   </li>
   ```

## SEO Considerations

The footer includes internal links that help with:
- **Site Navigation**: All main pages linked
- **Crawlability**: Search engines can discover all pages
- **User Experience**: Easy access to important pages from any location

**Related SEO Updates**:
When updating social media links in the footer, also update:
- `src/components/HomePage.tsx` - Schema.org structured data (sameAs field)
- Any other pages with social media references

## Maintenance Notes

### Common Updates
1. **Contact Information**: Update email, phone, or social media links
2. **Navigation**: Add/remove pages as site grows
3. **Copyright Year**: Automatically updates (no manual change needed)
4. **Branding**: Update logo file at `/public/logo.png`

### Testing Checklist
When making changes, test:
- [ ] All links work correctly
- [ ] Responsive layout on mobile, tablet, desktop
- [ ] Hover effects work smoothly
- [ ] External links open in new tab
- [ ] Accessibility (keyboard navigation, screen readers)
- [ ] Visual alignment across different screen sizes

## Version History

**v1.0.0** (Current)
- Initial footer implementation
- 4-column responsive grid layout
- Facebook social integration
- Contact information with icons
- Legal links (Terms, Privacy Policy)
- Auto-updating copyright year
- Inline styles for top margin to prevent CSS conflicts

## Related Files
- `src/App.tsx` - Global footer integration
- `src/components/Header.tsx` - Companion header component
- `public/logo.png` - Logo image file
- `src/index.css` - Global styles (glass effects, gradients)

---

**Last Updated**: November 2024
**Maintained By**: Development Team

