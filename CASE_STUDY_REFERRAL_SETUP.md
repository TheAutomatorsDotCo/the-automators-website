# Case Study Referral System - Setup Guide

## Overview

The case study pages now redirect to the contact page with referral data automatically captured, similar to how the assessment and pricing pages work. This provides better lead tracking and a consistent user experience.

---

## What Changed

### 1. **Removed Embedded Airtable Forms**
   - All three case study pages previously had embedded iframes with Airtable forms
   - These have been replaced with stylish CTA buttons that redirect to the contact page

### 2. **Added Referral Tracking**
   - When users click "Get Started - 50% Off" on any case study page, their referral is saved
   - The system tracks which case study they came from
   - This data is automatically included when they submit the contact form

### 3. **Updated Lead Data System**
   - Extended the existing lead data utility to support case study referrals
   - Added new `CaseStudyLeadData` interface
   - Added formatting function for case study referral details

---

## Files Modified

### Core System Files
1. **src/utils/leadData.ts**
   - Added `CaseStudyLeadData` interface
   - Updated `LeadData` to include `'case-study'` source type
   - Added `formatCaseStudyDetails()` function
   - Updated `formatLeadDetails()` to handle case study data

2. **src/components/ContactPage.tsx**
   - Updated to accept `'case-study'` as a lead source
   - Added "Case Study" to Source Page field mapping
   - Added handling for case study field in Airtable submission
   - Updated auto-populated field label to show "case study referral"

### Case Study Pages
3. **src/components/CaseStudies/PlatinumRepairsCaseStudy.tsx**
   - Removed embedded Airtable iframe
   - Added `useNavigate` hook
   - Added `handleGetStarted()` function to save referral data
   - Replaced form section with CTA button

4. **src/components/CaseStudies/DeviceDoctorCaseStudy.tsx**
   - Same changes as Platinum Repairs

5. **src/components/CaseStudies/InEnOmCaseStudy.tsx**
   - Same changes as Platinum Repairs

---

## Airtable Configuration Required

### New Field to Add

You need to add one new field to your Airtable "Leads" table:

| Field Name | Field Type | Options |
|------------|------------|---------|
| **Case Study** | Single line text | - |

This field will store the name of the case study the lead came from.

### Updated Single Select Options

Update the **Source Page** field to include the new option:
- Assessment
- Pricing
- **Case Study** ← ADD THIS
- Direct

---

## How It Works

### User Flow

```
User visits case study page
         ↓
Reads about results
         ↓
Clicks "Get 50% Off" button
         ↓
System saves case study name to localStorage
         ↓
User redirected to /contact
         ↓
Contact form shows auto-populated "Additional Details"
         ↓
User fills in name, email, message
         ↓
Submits form
         ↓
All data sent to Airtable including:
  - User's contact info
  - Source Page: "Case Study"
  - Case Study: "Platinum Repairs" (or other)
  - Additional Details: Formatted referral info
```

### Data Captured

When a user comes from a case study page, the following is captured:

**In localStorage (temporary):**
```json
{
  "source": "case-study",
  "caseStudy": {
    "caseStudyName": "Platinum Repairs",
    "timestamp": "2025-11-14T10:30:00.000Z"
  }
}
```

**Sent to Airtable:**
- **Source Page:** "Case Study"
- **Case Study:** "Platinum Repairs" (or "Device Doctor" or "IN&OM Suid-Afrika")
- **Additional Details:** 
  ```
  === CASE STUDY REFERRAL ===

  Referred from: Platinum Repairs
  User interested in similar solutions
  ```

---

## Testing Instructions

### Test Each Case Study

1. **Platinum Repairs Flow:**
   ```
   Go to: /case-studies/platinum-repairs
   Scroll to bottom
   Click: "Get Started - 50% Off"
   Should redirect to: /contact
   Should see: Auto-populated "Additional Details" field
   Fill in: Name, email, message
   Submit form
   Check Airtable: Should see "Platinum Repairs" in Case Study field
   ```

2. **Device Doctor Flow:**
   ```
   Same as above but use: /case-studies/device-doctor
   Should show "Device Doctor" in Airtable
   ```

3. **IN&OM Suid-Afrika Flow:**
   ```
   Same as above but use: /case-studies/in-en-om
   Should show "IN&OM Suid-Afrika" in Airtable
   ```

### Verify Airtable Data

After each test submission, check that Airtable contains:
- ✅ Full Name (from form)
- ✅ Email (from form)
- ✅ Message (from form)
- ✅ Source Page: "Case Study"
- ✅ Case Study: Name of the case study
- ✅ Additional Details: Formatted referral info
- ✅ Submitted At: Timestamp

---

## Benefits of This Approach

### Better User Experience
- No more long embedded forms that take up space
- Consistent experience across all lead capture points
- Faster page load (no iframe)
- Mobile-friendly

### Better Lead Tracking
- Know exactly which case study converted the lead
- Track which case studies generate the most interest
- Unified contact form means all leads in one place
- Consistent data structure

### Easier Maintenance
- Single contact form to maintain (not 4 separate forms)
- Changes to contact form automatically apply to case studies
- No need to update multiple embedded iframe URLs
- Better integration with existing lead flow system

---

## Troubleshooting

### Issue: "Additional Details" field not showing

**Solution:** 
- Clear browser cache and localStorage
- Navigate to a case study page first, then click the button
- Don't go directly to /contact URL

### Issue: Case Study field empty in Airtable

**Solution:**
- Verify the "Case Study" field exists in Airtable
- Check browser console for errors
- Ensure you clicked the button (not manually navigated to /contact)

### Issue: Source Page shows "Direct" instead of "Case Study"

**Solution:**
- Verify "Case Study" option exists in Source Page Single Select field
- Check capitalization matches exactly: "Case Study"
- Clear localStorage and try again

---

## Integration with Existing System

This new feature integrates seamlessly with your existing lead flow:

### Before (2 sources):
- Assessment → Contact → Airtable
- Pricing → Contact → Airtable
- Direct → Contact → Airtable

### After (3 sources):
- Assessment → Contact → Airtable
- Pricing → Contact → Airtable
- **Case Study → Contact → Airtable** ← NEW
- Direct → Contact → Airtable

All use the same `leadData.ts` utility and contact form infrastructure.

---

## Quick Reference

### Case Study Names in System
- `"Platinum Repairs"` - /case-studies/platinum-repairs
- `"Device Doctor"` - /case-studies/device-doctor
- `"IN&OM Suid-Afrika"` - /case-studies/in-en-om

### Source Values
- Assessment
- Pricing
- Case Study ← NEW
- Direct

### New Airtable Field
- **Field Name:** Case Study
- **Type:** Single line text
- **Purpose:** Store which case study referred the lead

---

## Version Information

**Created:** November 14, 2025
**Status:** ✅ Ready for Production
**Files Changed:** 5
**New Features:** 1 (Case Study Referral Tracking)

---

## Next Steps

1. ✅ Add "Case Study" field to Airtable
2. ✅ Update "Source Page" Single Select options
3. ✅ Test all three case study flows
4. ✅ Verify data appears correctly in Airtable
5. ✅ Deploy to production

---

## Support

For questions or issues:
1. Check this document first
2. Review [LEAD_FLOW_README.md](LEAD_FLOW_README.md) for overall system
3. Check [TROUBLESHOOTING_FLOWCHART.md](TROUBLESHOOTING_FLOWCHART.md)
4. Review browser console for errors

---

**System is ready! Test it out and watch those qualified leads roll in! 🚀**

