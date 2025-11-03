# Smart Lead Flow System - Complete Documentation

## Overview

This system implements an intelligent lead capture flow that tracks user interactions from the Assessment and Pricing pages, automatically pre-populates contact form fields with relevant data, and submits everything to Airtable for lead management.

**Created:** November 3, 2025  
**Version:** 1.0  
**Status:** ✅ Production Ready

---

## Table of Contents

1. [System Architecture](#system-architecture)
2. [Data Flow](#data-flow)
3. [File Structure](#file-structure)
4. [Configuration](#configuration)
5. [Airtable Setup](#airtable-setup)
6. [How It Works](#how-it-works)
7. [Troubleshooting](#troubleshooting)
8. [Making Changes](#making-changes)
9. [Security Considerations](#security-considerations)
10. [Testing Procedures](#testing-procedures)

---

## System Architecture

### Components

```
┌─────────────────┐
│ Assessment Page │──┐
└─────────────────┘  │
                     │
┌─────────────────┐  │    ┌──────────────┐    ┌─────────────┐    ┌──────────┐
│  Pricing Page   │──┼───→│ localStorage │───→│ Contact Page│───→│ Airtable │
└─────────────────┘  │    └──────────────┘    └─────────────┘    └──────────┘
                     │
┌─────────────────┐  │
│  Direct Visit   │──┘
└─────────────────┘
```

### Technology Stack

- **Frontend:** React + TypeScript
- **Storage:** Browser localStorage
- **API:** Airtable REST API
- **Build Tool:** Vite
- **Environment:** `.env` file (for API credentials)

---

## Data Flow

### 1. Assessment Page Flow

```
User completes assessment
    ↓
User clicks "Get Free Consultation"
    ↓
System saves to localStorage:
  - Selected challenges (array of strings)
  - Service recommendations (object with counts)
  - Timestamp
    ↓
Navigate to /contact
    ↓
Contact page loads data from localStorage
    ↓
Additional Details field auto-populated
    ↓
User fills name, email, phone, message
    ↓
Form submits to Airtable
    ↓
localStorage cleared
```

### 2. Pricing Page Flow

```
User selects service type (Automation/Voice Agents/Chatbots)
    ↓
User selects payment plan (dropdown)
    ↓
User clicks "Get Started" or "Contact Us"
    ↓
System saves to localStorage:
  - Plan name (Starter/Professional/Enterprise)
  - Service type
  - Payment plan (Pay in Full / 6/12/18 months)
  - Price (formatted with currency)
  - Timestamp
    ↓
Navigate to /contact
    ↓
Contact page loads data from localStorage
    ↓
Additional Details field auto-populated
    ↓
User fills name, email, phone, message
    ↓
Form submits to Airtable with plan details
    ↓
localStorage cleared
```

### 3. Direct Contact Flow

```
User navigates directly to /contact
    ↓
No localStorage data found
    ↓
No Additional Details field shown
    ↓
User fills form normally
    ↓
Submits with Source Page: "Direct"
```

---

## File Structure

### Core Files

```
src/
├── utils/
│   └── leadData.ts                 # Lead data management utility
├── components/
│   ├── AssessmentPage.tsx          # Assessment flow (MODIFIED)
│   ├── PricingPage.tsx             # Pricing selection (MODIFIED)
│   └── ContactPage.tsx             # Contact form + Airtable (MODIFIED)
└── .env                            # Airtable credentials (NEVER COMMIT)
└── .env.example                    # Template for credentials
```

### File Purposes

#### `src/utils/leadData.ts`
**Purpose:** Central utility for managing lead data in localStorage

**Exports:**
- `saveLeadData()` - Save lead data to localStorage
- `getLeadData()` - Retrieve lead data from localStorage
- `clearLeadData()` - Remove lead data from localStorage
- `formatLeadDetails()` - Format lead data for display
- `formatAssessmentDetails()` - Format assessment data
- `formatPricingDetails()` - Format pricing data

**TypeScript Interfaces:**
```typescript
interface AssessmentLeadData {
  selectedChallenges: string[];
  serviceRecommendations: {
    automation: number;
    chatbots: number;
    'voice-agents': number;
  };
  timestamp: string;
}

interface PricingLeadData {
  planName: string;
  serviceType: 'automation' | 'voice-agents' | 'chatbots';
  paymentPlan: string;
  price: string;
  timestamp: string;
}

interface LeadData {
  source: 'assessment' | 'pricing' | 'direct';
  assessment?: AssessmentLeadData;
  pricing?: PricingLeadData;
}
```

#### `src/components/AssessmentPage.tsx`
**Modifications:**
1. Added `useNavigate` hook import
2. Added `saveLeadData` import
3. Created `handleContactNavigation()` function
4. Changed "Get Free Consultation" from Link to button with onClick

**Key Function:**
```typescript
const handleContactNavigation = () => {
  if (serviceRecommendations) {
    const selectedChallenges = selectedOptions.map(index => painPoints[index].text);
    
    saveLeadData({
      source: 'assessment',
      assessment: {
        selectedChallenges,
        serviceRecommendations,
        timestamp: new Date().toISOString(),
      },
    });
    
    navigate('/contact');
  }
};
```

#### `src/components/PricingPage.tsx`
**Modifications:**
1. Added `useNavigate` hook import
2. Added `saveLeadData` import
3. Created `handlePlanSelection()` function
4. Changed all "Get Started" buttons from Link to button with onClick

**Key Function:**
```typescript
const handlePlanSelection = (planName: string, price: string) => {
  const paymentPlanLabel = paymentOptions.find(opt => opt.value === paymentPlan)?.label || 'Pay in Full';
  
  const priceDisplay = price === 'Custom' 
    ? 'Custom Pricing' 
    : `${convertPrice(price)} (${paymentPlanLabel})`;
  
  saveLeadData({
    source: 'pricing',
    pricing: {
      planName,
      serviceType: activeTab,
      paymentPlan: paymentPlanLabel,
      price: priceDisplay,
      timestamp: new Date().toISOString(),
    },
  });
  
  navigate('/contact');
};
```

#### `src/components/ContactPage.tsx`
**Modifications:**
1. Added `useState` for additional state management
2. Added `useEffect` to load lead data on mount
3. Added "Additional Details" textarea field (read-only)
4. Implemented Airtable API integration
5. Added error handling and loading states
6. Added localStorage cleanup after submission

**Key Features:**
- Auto-populates Additional Details from localStorage
- Visual indicator showing data source (Assessment/Pricing)
- Conditional field inclusion (only sends fields with values)
- Proper error handling with user feedback
- Console logging for debugging

---

## Configuration

### Environment Variables

**File:** `.env` (root directory)

```env
VITE_AIRTABLE_PAT=your_personal_access_token
VITE_AIRTABLE_BASE_ID=your_base_id
VITE_AIRTABLE_TABLE_ID=your_table_id
```

**Current Values:**
```env
VITE_AIRTABLE_PAT=patXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
VITE_AIRTABLE_BASE_ID=appOPjh4b6moMoFw6
VITE_AIRTABLE_TABLE_ID=tblpcNsvcRokNPyBn
```

**Note:** The actual PAT is stored in the `.env` file (not in version control).

**⚠️ IMPORTANT:**
- The `.env` file is in `.gitignore` and should NEVER be committed to version control
- Use `.env.example` as a template for other developers
- To regenerate PAT: https://airtable.com/create/tokens

### localStorage Key

**Key Name:** `automators_lead_data`

**Storage Duration:** Until cleared by:
- Successful form submission
- Manual browser clearing
- User calling `clearLeadData()`

---

## Airtable Setup

### Base Information

- **Base ID:** `appOPjh4b6moMoFw6`
- **Table ID:** `tblpcNsvcRokNPyBn`
- **View ID:** `viwyd1xI6WMY3YWoc` (not used in API)

### Required Fields

| Field Name | Field Type | Required | Source | Notes |
|------------|------------|----------|--------|-------|
| Full Name | Single line text | ✅ Yes | Form input | User's name |
| Email | Email | ✅ Yes | Form input | User's email |
| Phone | Single line text | ❌ No | Form input | Optional phone number |
| Company | Single line text | ❌ No | Form input | Optional company name |
| Message | Long text | ✅ Yes | Form input | User's message |
| Interests | Long text | ❌ No | Form checkboxes | Comma-separated interests |
| Additional Details | Long text | ❌ No | **Auto-populated** | Assessment or pricing data |
| Source Page | Single select | ✅ Yes | **Auto-set** | Assessment/Pricing/Direct |
| Submitted At | Date | ✅ Yes | **Auto-set** | Submission timestamp |
| Selected Plan | Single line text | ❌ No | **From pricing** | Plan name if from pricing |
| Service Type | Single select | ❌ No | **From pricing** | Service type if from pricing |
| Payment Plan | Single line text | ❌ No | **From pricing** | Payment plan if from pricing |
| Status | Single select | ❌ No | Manual tracking | For your CRM workflow |

### Single Select Options (MUST MATCH EXACTLY)

**Source Page Options:**
1. `Assessment`
2. `Pricing`
3. `Direct`

**Service Type Options:**
1. `Automation`
2. `Voice Agents`
3. `Chatbots`

**⚠️ CRITICAL:** 
- Capitalization must match exactly
- No extra spaces
- Single Select fields will reject unknown values

---

## How It Works

### localStorage Management

**Key:** `automators_lead_data`

**Data Structure:**
```json
{
  "source": "assessment" | "pricing" | "direct",
  "assessment": {
    "selectedChallenges": ["Challenge 1", "Challenge 2"],
    "serviceRecommendations": {
      "automation": 5,
      "chatbots": 3,
      "voice-agents": 2
    },
    "timestamp": "2025-11-03T10:30:00.000Z"
  },
  "pricing": {
    "planName": "Professional",
    "serviceType": "automation",
    "paymentPlan": "18 Monthly Payments",
    "price": "$2,629 (18 Monthly Payments)",
    "timestamp": "2025-11-03T10:30:00.000Z"
  }
}
```

### Airtable API Request

**Endpoint:**
```
POST https://api.airtable.com/v0/{BASE_ID}/{TABLE_ID}
```

**Headers:**
```json
{
  "Authorization": "Bearer {PAT}",
  "Content-Type": "application/json"
}
```

**Request Body:**
```json
{
  "fields": {
    "Full Name": "John Doe",
    "Email": "john@example.com",
    "Phone": "+1234567890",
    "Company": "Example Inc",
    "Message": "I need help with automation",
    "Interests": "Workflow Automation, Email Automation",
    "Additional Details": "=== PRICING SELECTION ===\n\nService: Workflow Automation\nPlan: Professional\nPayment Plan: 18 Monthly Payments\nPrice: $2,629",
    "Source Page": "Pricing",
    "Submitted At": "2025-11-03T10:30:00.000Z",
    "Selected Plan": "Professional",
    "Service Type": "Automation",
    "Payment Plan": "18 Monthly Payments"
  }
}
```

**Success Response (200/201):**
```json
{
  "id": "recXXXXXXXXXXXXXX",
  "fields": { ... },
  "createdTime": "2025-11-03T10:30:00.000Z"
}
```

**Error Response (422):**
```json
{
  "error": {
    "type": "INVALID_REQUEST_BODY",
    "message": "Unknown field name: \"Field Name\""
  }
}
```

---

## Troubleshooting

### Common Issues

#### 1. "Unknown field name" Error

**Symptom:**
```
Error: Unknown field name: "Additional Details"
```

**Cause:** Field name in code doesn't match Airtable field name exactly

**Solution:**
1. Open your Airtable base
2. Check the exact field name (including spaces, capitalization)
3. Update `ContactPage.tsx` line 67 to match exactly:
```typescript
fields['Additional Details'] = formData.additionalDetails;
```

#### 2. "Insufficient permissions to create new select option"

**Symptom:**
```
Error: Insufficient permissions to create new select option ""pricing""
```

**Cause:** Single Select field value doesn't match existing options

**Solution:**
1. Check the value being sent in console logs
2. Verify Single Select options in Airtable match exactly:
   - `Assessment`, `Pricing`, `Direct` for Source Page
   - `Automation`, `Voice Agents`, `Chatbots` for Service Type
3. Check capitalization in `ContactPage.tsx` lines 49-51:
```typescript
const sourcePageCapitalized = 
  leadSource === 'assessment' ? 'Assessment' :
  leadSource === 'pricing' ? 'Pricing' : 'Direct';
```

#### 3. Additional Details Not Showing

**Symptom:** Contact form doesn't show auto-populated data

**Possible Causes:**
- User navigated directly to `/contact` (expected behavior)
- localStorage was cleared
- Data wasn't saved properly

**Debugging:**
1. Open browser DevTools → Application → Local Storage
2. Check for key: `automators_lead_data`
3. If missing, data wasn't saved from Assessment/Pricing page
4. Add console logs in `AssessmentPage.tsx` or `PricingPage.tsx`:
```typescript
console.log('Saving lead data:', leadData);
saveLeadData(leadData);
```

#### 4. Form Submits But Data Not in Airtable

**Possible Causes:**
- Wrong Base ID or Table ID
- Invalid PAT (expired or wrong permissions)
- Network error

**Debugging:**
1. Check browser console for errors
2. Check Network tab → Find the Airtable API request
3. Verify the request URL includes correct Base ID and Table ID
4. Check PAT has write permissions to the base
5. Look at the response body for error details

#### 5. Environment Variables Not Loading

**Symptom:**
```
Uncaught TypeError: Cannot read property 'VITE_AIRTABLE_PAT' of undefined
```

**Solution:**
1. Ensure `.env` file exists in root directory
2. Restart the dev server (`npm run dev`)
3. Verify variable names start with `VITE_`
4. Check file encoding is UTF-8

---

## Making Changes

### Adding New Fields to Airtable Submission

**Step 1:** Add field to Airtable base

**Step 2:** Update `ContactPage.tsx` in the `handleSubmit` function:

```typescript
// Add after line 59
if (formData.newField) {
  fields['New Field Name'] = formData.newField;
}
```

**Step 3:** Update form state:
```typescript
const [formData, setFormData] = useState({
  // ... existing fields
  newField: '',
});
```

**Step 4:** Add input field to form JSX

### Changing Field Names

**If Airtable field name changes:**

1. Find the field in `ContactPage.tsx` (around lines 48-83)
2. Update the key name:
```typescript
fields['Old Field Name'] = value;  // Change to:
fields['New Field Name'] = value;
```

### Modifying Lead Data Structure

**To add new data to localStorage:**

1. Update interfaces in `src/utils/leadData.ts`:
```typescript
interface AssessmentLeadData {
  // ... existing fields
  newField: string;
}
```

2. Update save call in source page:
```typescript
saveLeadData({
  source: 'assessment',
  assessment: {
    // ... existing fields
    newField: 'value',
  },
});
```

3. Update formatting function in `leadData.ts`:
```typescript
export function formatAssessmentDetails(assessment: AssessmentLeadData): string {
  // ... existing formatting
  details += `New Field: ${assessment.newField}\n`;
  return details;
}
```

### Adding a New Source Page

**Example: Adding a "Services" page as a source**

**Step 1:** Update interfaces in `leadData.ts`:
```typescript
interface LeadData {
  source: 'assessment' | 'pricing' | 'direct' | 'services';  // Add 'services'
  // ... rest
}
```

**Step 2:** In the new source page (e.g., `ServicesPage.tsx`):
```typescript
import { saveLeadData } from '../utils/leadData';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

const handleContactClick = () => {
  saveLeadData({
    source: 'services',
    // Add any relevant data
  });
  navigate('/contact');
};
```

**Step 3:** Update `ContactPage.tsx`:
```typescript
const sourcePageCapitalized = 
  leadSource === 'assessment' ? 'Assessment' :
  leadSource === 'pricing' ? 'Pricing' :
  leadSource === 'services' ? 'Services' : 'Direct';
```

**Step 4:** Add "Services" option to Airtable Single Select field

---

## Security Considerations

### Current Security Level: ⚠️ MODERATE

**Vulnerabilities:**
1. ✅ API credentials in `.env` (good)
2. ❌ `.env` bundled into frontend JavaScript (exposed to users)
3. ❌ API key visible in browser Network tab
4. ❌ No rate limiting on form submissions
5. ❌ Anyone can inspect and reuse the API key

### Recommended Production Setup

**Option 1: Backend API (Recommended)**

Create a backend endpoint that handles Airtable submissions:

```
Frontend → Your Backend API → Airtable
```

**Benefits:**
- API key stays on server
- Add rate limiting
- Add validation
- Add spam protection

**Example Backend (Node.js/Express):**
```javascript
app.post('/api/contact', async (req, res) => {
  // Validate request
  // Rate limit check
  // Submit to Airtable with server-side API key
});
```

**Option 2: Serverless Function**

Use Vercel/Netlify Functions:

```javascript
// api/submit-contact.js
export default async function handler(req, res) {
  // Submit to Airtable
}
```

**Option 3: Airtable Form (Simplest)**

Use Airtable's native form feature:
- No custom code needed
- No API key exposure
- Less flexibility

### Current Implementation Risks

**Risk Level: LOW to MEDIUM** (for this use case)

- ✅ Read-only operations: None (we only write)
- ✅ Sensitive data: User contact info (moderate)
- ✅ Financial data: None
- ⚠️ API abuse potential: Could spam your Airtable base
- ⚠️ Cost impact: Depends on Airtable plan limits

**Mitigation Steps:**
1. Monitor Airtable usage regularly
2. Set up alerts for unusual activity
3. Rotate PAT if exposed
4. Consider implementing backend API for production

---

## Testing Procedures

### Manual Testing Checklist

#### Assessment Flow Test
- [ ] Navigate to `/assessment`
- [ ] Select 3-5 challenges
- [ ] Click "None of these apply" to see new options
- [ ] Complete assessment (select until no more options)
- [ ] Click "Get Free Consultation"
- [ ] Verify navigation to `/contact`
- [ ] Verify "Additional Details" field shows:
  - List of selected challenges
  - Service recommendations with match counts
- [ ] Fill in name, email, message
- [ ] Submit form
- [ ] Verify success message appears
- [ ] Check Airtable for new record with:
  - Source Page: "Assessment"
  - Additional Details populated
  - All form fields filled

#### Pricing Flow Test
- [ ] Navigate to `/pricing`
- [ ] Select "Automation" tab
- [ ] Select "12 Monthly Payments" from dropdown
- [ ] Click "Get Started" on Professional plan
- [ ] Verify navigation to `/contact`
- [ ] Verify "Additional Details" field shows:
  - Service: Workflow Automation
  - Plan: Professional
  - Payment Plan: 12 Monthly Payments
  - Price: (calculated value)
- [ ] Fill in name, email, message
- [ ] Submit form
- [ ] Verify success message
- [ ] Check Airtable for new record with:
  - Source Page: "Pricing"
  - Selected Plan: "Professional"
  - Service Type: "Automation"
  - Payment Plan: "12 Monthly Payments"

**Repeat for:**
- [ ] Voice Agents tab
- [ ] Chatbots tab
- [ ] Enterprise plan (Custom pricing)

#### Direct Contact Test
- [ ] Navigate directly to `/contact`
- [ ] Verify NO "Additional Details" field shows
- [ ] Fill in form (select interests)
- [ ] Submit
- [ ] Check Airtable for:
  - Source Page: "Direct"
  - No Selected Plan/Service Type/Payment Plan

#### Edge Cases
- [ ] Submit form with only required fields
- [ ] Submit form with all optional fields
- [ ] Test with very long message (500+ characters)
- [ ] Test with special characters in name/message
- [ ] Submit from Assessment → Navigate to Pricing → Submit (should keep Pricing data)
- [ ] Clear localStorage manually → Verify form still works

### Automated Testing (Future)

**Recommended Test Framework:** Playwright or Cypress

**Test Cases to Automate:**
1. Assessment flow end-to-end
2. Pricing flow end-to-end (all tabs)
3. Direct contact submission
4. localStorage data persistence
5. Form validation
6. Error handling
7. Success message display

---

## API Rate Limits & Costs

### Airtable Limits

**Free Plan:**
- 1,000 records per base
- 1,000 API calls per workspace per month
- 5 API calls per second per base

**Plus Plan ($20/month):**
- 5,000 records per base
- 100,000 API calls per workspace per month
- 5 API calls per second per base

**Pro Plan ($45/month):**
- 50,000 records per base
- 100,000 API calls per workspace per month
- 5 API calls per second per base

### Current Usage Estimate

**Per Form Submission:**
- 1 API call (POST request)
- 1 record created

**Expected Traffic:**
- 10 submissions/day = 300/month
- 50 submissions/day = 1,500/month
- 100 submissions/day = 3,000/month

**Recommendation:** Start with Plus plan ($20/month) for up to 3,000 submissions/month

---

## Changelog

### Version 1.0 (November 3, 2025)
- ✅ Initial implementation
- ✅ Assessment page integration
- ✅ Pricing page integration
- ✅ Contact form with Airtable API
- ✅ localStorage management utility
- ✅ Auto-populated Additional Details field
- ✅ Error handling and user feedback
- ✅ Environment variable configuration
- ✅ TypeScript interfaces and type safety

### Known Issues
- ⚠️ THREE.js console warnings (unrelated to lead flow, cosmetic only)
- 📋 No backend API (security consideration for future)
- 📋 No rate limiting on submissions
- 📋 No spam protection

### Future Enhancements
- [ ] Backend API for secure Airtable integration
- [ ] Rate limiting / spam protection
- [ ] reCAPTCHA integration
- [ ] Email notifications on form submission
- [ ] Admin dashboard for lead management
- [ ] Lead scoring based on assessment/pricing data
- [ ] Automated follow-up workflows
- [ ] A/B testing different form versions

---

## Support & Maintenance

### Regular Maintenance Tasks

**Weekly:**
- [ ] Check Airtable for new submissions
- [ ] Review error logs in browser console

**Monthly:**
- [ ] Review Airtable API usage
- [ ] Check for expired PAT (tokens last 1 year)
- [ ] Test all three flows (Assessment, Pricing, Direct)

**Quarterly:**
- [ ] Review and update field mappings
- [ ] Check for Airtable API updates
- [ ] Update documentation if changes made

### When to Rotate API Key

Rotate your PAT immediately if:
- ❌ Key is accidentally committed to GitHub
- ❌ Key is exposed in a public forum
- ❌ Suspicious activity in Airtable base
- ❌ Team member with key access leaves
- ⏰ Key is older than 12 months

**How to Rotate:**
1. Generate new PAT: https://airtable.com/create/tokens
2. Update `.env` file with new PAT
3. Restart dev server
4. Test form submission
5. Revoke old PAT in Airtable

---

## Quick Reference

### Important URLs

- **Airtable Base:** https://airtable.com/app5NdLmbJZZdjHAU
- **Create PAT:** https://airtable.com/create/tokens
- **API Docs:** https://airtable.com/developers/web/api/introduction

### Key Files to Edit

| File | Purpose | When to Edit |
|------|---------|--------------|
| `ContactPage.tsx` | Form submission logic | Changing fields, API integration |
| `AssessmentPage.tsx` | Assessment data capture | Changing assessment flow |
| `PricingPage.tsx` | Pricing data capture | Changing pricing flow |
| `leadData.ts` | Data management utility | Changing data structure |
| `.env` | API credentials | Rotating keys, changing base |

### Quick Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for TypeScript errors
npx tsc --noEmit

# Clear localStorage (browser console)
localStorage.removeItem('automators_lead_data')
```

---

## Contact & Support

**Implemented By:** AI Assistant  
**Date:** November 3, 2025  
**Version:** 1.0

For questions or issues, review this documentation first, then check:
1. Browser console for error messages
2. Airtable base for field name mismatches
3. Network tab for API response details

---

**Last Updated:** November 3, 2025  
**Document Version:** 1.0  
**Status:** ✅ Complete

