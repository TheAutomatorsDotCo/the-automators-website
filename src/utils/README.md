# Utils - Lead Data Management

## leadData.ts

Central utility for managing lead flow data through localStorage.

### Purpose

This utility manages the smart lead flow system that captures user data from the Assessment and Pricing pages, stores it temporarily in localStorage, and provides it to the Contact form for automatic population.

### Exports

#### Type Definitions

```typescript
interface AssessmentLeadData {
  selectedChallenges: string[];        // Array of challenge texts
  serviceRecommendations: {            // Match counts for each service
    automation: number;
    chatbots: number;
    'voice-agents': number;
  };
  timestamp: string;                   // ISO timestamp
}

interface PricingLeadData {
  planName: string;                    // "Starter" | "Professional" | "Enterprise"
  serviceType: 'automation' | 'voice-agents' | 'chatbots';
  paymentPlan: string;                 // "Pay in Full" | "6 Monthly Payments" | etc
  price: string;                       // Formatted price with currency
  timestamp: string;                   // ISO timestamp
}

interface LeadData {
  source: 'assessment' | 'pricing' | 'direct';
  assessment?: AssessmentLeadData;     // Present if from assessment
  pricing?: PricingLeadData;           // Present if from pricing
}
```

#### Functions

##### `saveLeadData(data: LeadData): void`

Saves lead data to localStorage under the key `automators_lead_data`.

**Usage:**
```typescript
import { saveLeadData } from '../utils/leadData';

saveLeadData({
  source: 'assessment',
  assessment: {
    selectedChallenges: ['Challenge 1', 'Challenge 2'],
    serviceRecommendations: {
      automation: 5,
      chatbots: 3,
      'voice-agents': 2
    },
    timestamp: new Date().toISOString(),
  },
});
```

**Error Handling:** Catches and logs localStorage errors (quota exceeded, disabled storage, etc.)

---

##### `getLeadData(): LeadData | null`

Retrieves lead data from localStorage.

**Usage:**
```typescript
import { getLeadData } from '../utils/leadData';

const leadData = getLeadData();
if (leadData) {
  console.log('Lead source:', leadData.source);
  if (leadData.assessment) {
    console.log('Challenges:', leadData.assessment.selectedChallenges);
  }
}
```

**Returns:** `LeadData` object or `null` if no data exists

**Error Handling:** Returns `null` on any error (parsing, localStorage unavailable, etc.)

---

##### `clearLeadData(): void`

Removes lead data from localStorage. Called after successful form submission.

**Usage:**
```typescript
import { clearLeadData } from '../utils/leadData';

// After successful Airtable submission
clearLeadData();
```

**Error Handling:** Catches and logs localStorage errors

---

##### `formatLeadDetails(leadData: LeadData): string`

Formats lead data into human-readable text for the "Additional Details" field.

**Usage:**
```typescript
import { getLeadData, formatLeadDetails } from '../utils/leadData';

const leadData = getLeadData();
if (leadData) {
  const formattedText = formatLeadDetails(leadData);
  // Use in textarea or send to Airtable
}
```

**Example Output (Assessment):**
```
=== ASSESSMENT RESULTS ===

Selected Challenges (5):
1. We need to handle customer inquiries 24/7 without hiring more staff
2. Spending too much time on repetitive data entry and form filling
3. Qualifying and routing leads automatically
4. Too much back-and-forth when scheduling appointments
5. Our software tools don't talk to each other

Recommended Services:
• Workflow Automation (5 matches)
• AI Chatbots (3 matches)
• Voice Agents (2 matches)
```

**Example Output (Pricing):**
```
=== PRICING SELECTION ===

Service: Workflow Automation
Plan: Professional
Payment Plan: 18 Monthly Payments
Price: $2,629 (18 Monthly Payments)
```

---

##### `formatAssessmentDetails(assessment: AssessmentLeadData): string`

Formats only assessment data. Called by `formatLeadDetails()`.

**Direct Usage:** Rarely needed; use `formatLeadDetails()` instead

---

##### `formatPricingDetails(pricing: PricingLeadData): string`

Formats only pricing data. Called by `formatLeadDetails()`.

**Direct Usage:** Rarely needed; use `formatLeadDetails()` instead

---

### localStorage Key

**Key Name:** `automators_lead_data`

**Storage Scope:** Domain-wide (accessible from any page on the same domain)

**Duration:** 
- Persists until cleared by `clearLeadData()`
- Survives page refreshes and navigation
- Cleared when user clears browser data

### Data Flow

```
Assessment/Pricing Page
    ↓
saveLeadData()
    ↓
localStorage['automators_lead_data'] = JSON
    ↓
User navigates to /contact
    ↓
getLeadData()
    ↓
formatLeadDetails()
    ↓
Display in "Additional Details" field
    ↓
User submits form
    ↓
clearLeadData()
```

### Error Handling

All functions handle errors gracefully:

- **localStorage disabled:** Functions log error and return/do nothing
- **Quota exceeded:** Functions log error and fail silently
- **Invalid JSON:** `getLeadData()` returns `null`
- **Missing data:** Functions check for existence before accessing

### Browser Compatibility

✅ All modern browsers (Chrome, Firefox, Safari, Edge)  
✅ localStorage supported since: IE 8+, Chrome 4+, Firefox 3.5+, Safari 4+

### Security Considerations

**Data Stored:**
- User selections (non-sensitive)
- Service recommendations
- Plan selections
- Timestamps

**Not Stored:**
- Personal information (name, email, etc.)
- Payment information
- Authentication tokens

**Privacy:**
- Data stays in user's browser
- No server-side storage until form submission
- Automatically cleared after submission
- Users can clear via browser settings

### Testing

**Manual Testing:**
```javascript
// In browser console

// Save test data
saveLeadData({
  source: 'assessment',
  assessment: {
    selectedChallenges: ['Test challenge'],
    serviceRecommendations: { automation: 1, chatbots: 0, 'voice-agents': 0 },
    timestamp: new Date().toISOString()
  }
});

// Retrieve data
const data = getLeadData();
console.log(data);

// Format for display
const formatted = formatLeadDetails(data);
console.log(formatted);

// Clear data
clearLeadData();
```

**Check localStorage:**
1. Open DevTools (F12)
2. Application → Local Storage
3. Look for key: `automators_lead_data`
4. View stored JSON

### Troubleshooting

**Data not persisting:**
- Check if localStorage is enabled in browser
- Check for quota limits (unlikely with small data size)
- Verify no extensions blocking localStorage

**Data not loading:**
- Check console for errors
- Verify `getLeadData()` is called in `useEffect`
- Check localStorage in DevTools

**Format looks wrong:**
- Verify data structure matches interfaces
- Check `formatLeadDetails()` output in console
- Ensure all required fields are present

---

**Created:** November 3, 2025  
**Version:** 1.0  
**Used By:** AssessmentPage, PricingPage, ContactPage

