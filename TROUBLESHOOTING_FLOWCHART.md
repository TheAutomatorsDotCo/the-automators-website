# Smart Lead Flow - Troubleshooting Flowchart

## 🔍 Problem: Form Submission Fails

### Step 1: Check Browser Console

**Open DevTools (F12) → Console Tab**

---

#### ❌ Error: "Unknown field name: [field name]"

**Problem:** Airtable field name doesn't match code

**Fix:**
1. ✅ Open your Airtable base
2. ✅ Find the field mentioned in error
3. ✅ Copy the EXACT name (including spaces, capitals)
4. ✅ Open `src/components/ContactPage.tsx`
5. ✅ Search for the field name in code (Ctrl+F)
6. ✅ Update to match Airtable exactly
7. ✅ Save and test again

**Example:**
```typescript
// If Airtable has "Additional Details" but code has:
fields['Additional Detail'] = value;  // ❌ Missing 's'

// Fix to:
fields['Additional Details'] = value;  // ✅ Correct
```

---

#### ❌ Error: "Insufficient permissions to create new select option"

**Problem:** Single Select value doesn't match Airtable options

**Fix:**
1. ✅ Note which option is mentioned in error (e.g., "pricing")
2. ✅ Open your Airtable base
3. ✅ Find the Single Select field (Source Page or Service Type)
4. ✅ Check available options
5. ✅ Ensure these EXACT options exist:
   - **Source Page:** `Assessment`, `Pricing`, `Direct`
   - **Service Type:** `Automation`, `Voice Agents`, `Chatbots`
6. ✅ Add missing option OR fix capitalization in code
7. ✅ Test again

**Check code in `ContactPage.tsx` lines 49-51:**
```typescript
const sourcePageCapitalized = 
  leadSource === 'assessment' ? 'Assessment' :    // Must be 'Assessment'
  leadSource === 'pricing' ? 'Pricing' :          // Must be 'Pricing'
  'Direct';                                        // Must be 'Direct'
```

---

#### ❌ Error: "Failed to fetch" or Network Error

**Problem:** Can't reach Airtable API

**Check:**
1. ✅ Internet connection working?
2. ✅ Airtable.com accessible?
3. ✅ Check `.env` file has correct values
4. ✅ Restart dev server after changing `.env`

**Test API credentials:**
```bash
# In browser console
console.log(import.meta.env.VITE_AIRTABLE_PAT);  // Should show PAT
console.log(import.meta.env.VITE_AIRTABLE_BASE_ID);  // Should show base ID
```

**If undefined:**
1. ✅ Check `.env` file exists in root folder
2. ✅ Check variables start with `VITE_`
3. ✅ Stop dev server (Ctrl+C)
4. ✅ Run `npm run dev` again

---

#### ❌ Error: 401 Unauthorized

**Problem:** Invalid or expired PAT

**Fix:**
1. ✅ Generate new PAT: https://airtable.com/create/tokens
2. ✅ Update `.env` file with new PAT
3. ✅ Restart dev server
4. ✅ Test submission

---

#### ❌ Error: 404 Not Found

**Problem:** Wrong Base ID or Table ID

**Fix:**
1. ✅ Open Airtable base
2. ✅ Go to Help → API documentation
3. ✅ Copy Base ID from URL or docs
4. ✅ Copy Table ID from docs
5. ✅ Update `.env` file
6. ✅ Restart dev server

---

## 🔍 Problem: Additional Details Field Not Showing

### Decision Tree

**Did you come from Assessment or Pricing page?**

#### ❌ No, I went directly to /contact
→ **EXPECTED BEHAVIOR**  
→ Additional Details only shows when coming from Assessment/Pricing

#### ✅ Yes, from Assessment/Pricing

**Check localStorage:**

1. Open DevTools (F12)
2. Application → Local Storage
3. Look for: `automators_lead_data`

**Is the key there?**

#### ❌ No key found
**Problem:** Data wasn't saved

**Fix Assessment Page:**
1. ✅ Open `src/components/AssessmentPage.tsx`
2. ✅ Check line ~109: `handleContactNavigation()` function exists
3. ✅ Check line ~325: Button has `onClick={handleContactNavigation}`
4. ✅ Test: Add `console.log('Saving data')` in function
5. ✅ Click button and check console

**Fix Pricing Page:**
1. ✅ Open `src/components/PricingPage.tsx`
2. ✅ Check line ~245: `handlePlanSelection()` function exists
3. ✅ Check line ~612: Button has `onClick={() => handlePlanSelection(...)}`
4. ✅ Test: Add `console.log('Saving data')` in function
5. ✅ Click button and check console

#### ✅ Key exists with data
**Problem:** Data not loading in Contact page

**Fix:**
1. ✅ Open `src/components/ContactPage.tsx`
2. ✅ Check line ~23: `useEffect` hook exists
3. ✅ Add console log:
```typescript
useEffect(() => {
  const leadData = getLeadData();
  console.log('Lead data loaded:', leadData);  // Add this
  if (leadData) {
    // ...
  }
}, []);
```
4. ✅ Refresh page and check console
5. ✅ If null, check import: `import { getLeadData, ... } from '../utils/leadData';`

---

## 🔍 Problem: Form Submits But Nothing in Airtable

### Checklist

1. **Check Success Message Appeared**
   - ✅ If yes → Data was sent
   - ❌ If no → Check errors above

2. **Check Correct Airtable Base**
   - ✅ Verify you're looking at the right base
   - ✅ Base ID matches `.env`: `appOPjh4b6moMoFw6`

3. **Check Correct Table**
   - ✅ Looking at right table in base
   - ✅ Table ID matches `.env`: `tblpcNsvcRokNPyBn`

4. **Check Filters**
   - ✅ No filters hiding new records
   - ✅ Switch to "All Records" view

5. **Check Browser Network Tab**
   - ✅ Open DevTools (F12) → Network tab
   - ✅ Submit form
   - ✅ Find request to `api.airtable.com`
   - ✅ Status code 200 or 201? → Success, check Airtable filters
   - ✅ Status code 4xx or 5xx? → Check error message

---

## 🔍 Problem: Form Validation Issues

### Name/Email/Message Required but Empty

**Check HTML:**
```typescript
// These fields should have `required` attribute
<input type="text" required ... />
<input type="email" required ... />
<textarea required ... />
```

**If still submits empty:**
1. ✅ Check form has `<form onSubmit={handleSubmit}>`
2. ✅ Check button is `type="submit"`
3. ✅ Check `handleSubmit` has `e.preventDefault()`

---

## 🔍 Problem: Changes Not Appearing

### Code Changes Not Working

**Checklist:**
1. ✅ Saved the file? (Check editor for unsaved indicator)
2. ✅ Dev server running? (Check terminal)
3. ✅ Browser refreshed? (F5 or Ctrl+R)
4. ✅ Hard refresh? (Ctrl+Shift+R or Cmd+Shift+R)
5. ✅ Clear cache? (Ctrl+Shift+Delete)
6. ✅ Check file path correct? (Case-sensitive on some systems)

### Environment Variable Changes Not Working

**Fix:**
1. ✅ Stop dev server (Ctrl+C in terminal)
2. ✅ Wait 2 seconds
3. ✅ Run `npm run dev` again
4. ✅ Hard refresh browser (Ctrl+Shift+R)

---

## 🔍 Problem: TypeScript Errors

### Import Errors

```
Cannot find module '../utils/leadData'
```

**Fix:**
1. ✅ Check file exists: `src/utils/leadData.ts`
2. ✅ Check import path relative to current file
3. ✅ Check file extension (no `.ts` in import)

**Correct imports:**
```typescript
// From components/ folder:
import { saveLeadData } from '../utils/leadData';

// From pages/ folder (if different structure):
import { saveLeadData } from '../../utils/leadData';
```

### Type Errors

```
Property 'selectedChallenges' does not exist on type...
```

**Fix:**
1. ✅ Check interfaces in `leadData.ts` match usage
2. ✅ Check optional properties use `?` or null checks
3. ✅ Run `npx tsc --noEmit` to see all type errors

---

## 🔍 Problem: Buttons Not Working

### Button Clicks Don't Navigate

**Check:**
1. ✅ Button has `onClick={functionName}`
2. ✅ Function is defined above JSX
3. ✅ Function calls `navigate('/contact')`
4. ✅ `useNavigate` imported: `import { useNavigate } from 'react-router-dom'`
5. ✅ `const navigate = useNavigate();` declared in component

**Add debug log:**
```typescript
const handleContactNavigation = () => {
  console.log('Button clicked!');  // Add this
  if (serviceRecommendations) {
    console.log('Saving data...');  // Add this
    saveLeadData({ ... });
    navigate('/contact');
  }
};
```

---

## 📋 Quick Diagnostic Checklist

Copy this and check off each item:

### Environment
- [ ] `.env` file exists in root folder
- [ ] `.env` has all 3 variables (PAT, BASE_ID, TABLE_ID)
- [ ] Dev server restarted after `.env` changes
- [ ] Browser hard-refreshed (Ctrl+Shift+R)

### Airtable
- [ ] Correct base open (ID: appOPjh4b6moMoFw6)
- [ ] Correct table open (ID: tblpcNsvcRokNPyBn)
- [ ] All field names match code exactly
- [ ] Single Select options exist: Assessment, Pricing, Direct
- [ ] Single Select options exist: Automation, Voice Agents, Chatbots
- [ ] No filters hiding records

### Code
- [ ] All files saved
- [ ] No TypeScript errors (red squiggles)
- [ ] Imports correct and working
- [ ] Console shows no errors (F12 → Console)

### Testing
- [ ] Tested from /assessment page
- [ ] Tested from /pricing page
- [ ] Tested direct /contact page
- [ ] Success message appears after submit
- [ ] Records appear in Airtable

---

## 🆘 Still Not Working?

### Final Debug Steps

1. **Test with minimal data:**
   - Go directly to `/contact`
   - Fill only required fields (name, email, message)
   - Submit
   - If this works → Problem is with Assessment/Pricing integration
   - If this fails → Problem is with Airtable connection

2. **Check exact API request:**
   ```javascript
   // Add to ContactPage.tsx in handleSubmit before fetch:
   console.log('API URL:', `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_AIRTABLE_TABLE_ID}`);
   console.log('PAT (first 10 chars):', import.meta.env.VITE_AIRTABLE_PAT?.substring(0, 10));
   console.log('Sending fields:', airtableData.fields);
   ```

3. **Test in incognito/private window:**
   - Rules out browser extensions
   - Rules out cached data
   - Fresh start

4. **Check Airtable API status:**
   - Visit: https://status.airtable.com/
   - Ensure no outages

5. **Review full documentation:**
   - Read: `SMART_LEAD_FLOW_DOCUMENTATION.md`
   - Section: "Troubleshooting"

---

## 📞 Getting Help

When asking for help, provide:

1. **Exact error message** (copy from console)
2. **Which flow** (Assessment, Pricing, or Direct)
3. **What you tried** (list steps from this guide)
4. **Screenshots** of:
   - Browser console errors
   - Network tab (API request/response)
   - localStorage data
   - Airtable field names

**Do not share:**
- ❌ Your actual PAT (API key)
- ❌ Customer data
- ❌ Full `.env` file contents

---

**Version:** 1.0  
**Updated:** November 3, 2025  
**Covers:** Smart Lead Flow System

