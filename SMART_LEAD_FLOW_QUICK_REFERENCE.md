# Smart Lead Flow - Quick Reference Guide

## 🚀 Quick Start

### Testing the System
1. Test Assessment Flow: `/assessment` → Complete → Click "Get Free Consultation"
2. Test Pricing Flow: `/pricing` → Select plan → Click "Get Started"  
3. Test Direct Contact: `/contact` → Fill form → Submit

### Check if It's Working
✅ Contact form shows "Additional Details (Auto-populated)" field  
✅ Form submits successfully  
✅ Data appears in Airtable base

---

## 🔧 Common Fixes

### Error: "Unknown field name"
**Fix:** Field name in code doesn't match Airtable exactly
1. Open Airtable → Check exact field name
2. Edit `src/components/ContactPage.tsx` line ~67
3. Update: `fields['Exact Field Name'] = value;`

### Error: "Insufficient permissions to create new select option"
**Fix:** Single Select value doesn't match Airtable options
1. Check Airtable Single Select options are EXACTLY:
   - Source Page: `Assessment`, `Pricing`, `Direct`
   - Service Type: `Automation`, `Voice Agents`, `Chatbots`
2. Check capitalization in `ContactPage.tsx` lines 49-51

### Additional Details Not Showing
**Fix:** No data in localStorage
1. Clear browser cache and try again
2. Check browser console for errors
3. Verify you came from `/assessment` or `/pricing` (not directly to `/contact`)

---

## 📝 Airtable Field Names (Copy-Paste Ready)

**Single Line Text:**
```
Full Name
Phone
Company
Selected Plan
Payment Plan
```

**Email:**
```
Email
```

**Long Text:**
```
Message
Interests
Additional Details
```

**Single Select - Source Page (3 options):**
```
Assessment
Pricing
Direct
```

**Single Select - Service Type (3 options):**
```
Automation
Voice Agents
Chatbots
```

**Date:**
```
Submitted At
```

---

## 🔑 Environment Variables

**File:** `.env` (in root folder)

```env
VITE_AIRTABLE_PAT=your_pat_here
VITE_AIRTABLE_BASE_ID=your_base_id
VITE_AIRTABLE_TABLE_ID=your_table_id
```

**After changing `.env`:**
1. Stop dev server (Ctrl+C)
2. Restart: `npm run dev`

---

## 🗂️ File Locations

| What | Where |
|------|-------|
| Utility functions | `src/utils/leadData.ts` |
| Contact form | `src/components/ContactPage.tsx` |
| Assessment page | `src/components/AssessmentPage.tsx` |
| Pricing page | `src/components/PricingPage.tsx` |
| API credentials | `.env` (root) |
| Full docs | `SMART_LEAD_FLOW_DOCUMENTATION.md` |

---

## 🐛 Debugging Tips

**Check localStorage:**
1. Open DevTools (F12)
2. Application → Local Storage → `automators_lead_data`
3. Should see JSON with assessment or pricing data

**Check API Request:**
1. Open DevTools (F12)
2. Network tab → Submit form
3. Look for request to `api.airtable.com`
4. Check Request Headers and Payload

**Check Console Logs:**
1. Open DevTools (F12)
2. Console tab
3. Look for "Sending to Airtable:" log
4. Check for error messages

---

## 🔄 Making Changes

### Add New Field to Form
1. Add field to Airtable base
2. Update `ContactPage.tsx`:
   ```typescript
   if (formData.newField) {
     fields['New Field Name'] = formData.newField;
   }
   ```
3. Add to form state and JSX

### Change What Data is Captured
1. Edit `src/utils/leadData.ts` interfaces
2. Update save call in Assessment or Pricing page
3. Update format function in `leadData.ts`

### Rotate API Key
1. Generate new PAT: https://airtable.com/create/tokens
2. Update `.env` file
3. Restart dev server
4. Test submission
5. Revoke old PAT

---

## ⚠️ Important Notes

- **Never commit `.env`** - It's in `.gitignore` for security
- **PAT is visible in browser** - Consider backend API for production
- **Single Select values must match exactly** - Check capitalization
- **localStorage clears on success** - Data is gone after submission

---

## 📞 Need Help?

1. ✅ Read full documentation: `SMART_LEAD_FLOW_DOCUMENTATION.md`
2. ✅ Check browser console for errors
3. ✅ Verify Airtable field names match exactly
4. ✅ Test in incognito mode (fresh start)
5. ✅ Check `.env` file has all three variables

---

**Version:** 1.0  
**Updated:** November 3, 2025

