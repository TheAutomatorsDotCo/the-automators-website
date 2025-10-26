# Git Push Reference Guide

Quick reference for pushing changes to GitHub (which auto-deploys to Vercel).

## Basic Workflow

### 1. Check Status
See what files have been modified:
```powershell
cd "e:\the automators website"
git status
```

### 2. Stage Changes
Add specific files:
```powershell
git add src/components/AssessmentPage.tsx
```

Or add all modified files:
```powershell
git add .
```

### 3. Commit Changes
Commit with a descriptive message:
```powershell
git commit -m "Your descriptive commit message here"
```

### 4. Push to GitHub
Push to main branch:
```powershell
git push origin main
```

---

## Common Scenarios

### Push Single File
```powershell
cd "e:\the automators website"
git add src/components/HomePage.tsx
git commit -m "Update homepage hero section"
git push origin main
```

### Push Multiple Files
```powershell
cd "e:\the automators website"
git add src/components/HomePage.tsx src/components/Header.tsx
git commit -m "Update homepage and header"
git push origin main
```

### Push All Changes
```powershell
cd "e:\the automators website"
git add .
git commit -m "Update multiple components"
git push origin main
```

---

## PowerShell Syntax Notes

**Important:** Use semicolons (`;`) NOT `&&` in PowerShell:
- ✅ Correct: `cd "e:\the automators website"; git status`
- ❌ Wrong: `cd "e:\the automators website" && git status`

---

## Full One-Liner Commands

### Check Status
```powershell
cd "e:\the automators website"; git status
```

### Stage and Commit Specific File
```powershell
cd "e:\the automators website"; git add src/components/AssessmentPage.tsx; git commit -m "Update assessment page"
```

### Stage, Commit, and Push
```powershell
cd "e:\the automators website"; git add .; git commit -m "Update website"; git push origin main
```

---

## Useful Git Commands

### View Recent Commits
```powershell
cd "e:\the automators website"; git log --oneline -5
```

### View Changes Before Committing
```powershell
cd "e:\the automators website"; git diff src/components/AssessmentPage.tsx
```

### Unstage a File
```powershell
cd "e:\the automators website"; git restore --staged src/components/AssessmentPage.tsx
```

### Discard Changes (Be Careful!)
```powershell
cd "e:\the automators website"; git restore src/components/AssessmentPage.tsx
```

### View Remote Repository
```powershell
cd "e:\the automators website"; git remote -v
```

---

## Commit Message Best Practices

### Good Examples:
- `"Add interactive quiz to assessment page"`
- `"Fix mobile responsiveness on pricing page"`
- `"Update hero section with new CTA"`
- `"Optimize images and add lazy loading"`
- `"Implement dark mode toggle"`

### Bad Examples:
- `"update"` (too vague)
- `"fix stuff"` (not descriptive)
- `"changes"` (no context)

---

## Vercel Auto-Deployment

Once you push to the `main` branch:
1. GitHub receives the commit
2. Vercel automatically detects the change
3. Vercel builds and deploys (1-2 minutes)
4. Changes are live at: **the-automators-website**

Check deployment status at: https://vercel.com/dashboard

---

## Troubleshooting

### Line Ending Warning
```
warning: LF will be replaced by CRLF
```
**Solution:** This is normal on Windows. Can be safely ignored.

### Authentication Issues
If prompted for credentials, use:
- **Username:** Your GitHub username
- **Password:** Personal Access Token (not your GitHub password)

### Generate Personal Access Token:
1. Go to GitHub.com → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select scopes: `repo` (full control)
4. Copy and save the token securely

---

## Quick Reference Sheet

| Task | Command |
|------|---------|
| Check status | `git status` |
| Stage file | `git add filename` |
| Stage all | `git add .` |
| Commit | `git commit -m "message"` |
| Push | `git push origin main` |
| View log | `git log --oneline` |
| Undo staging | `git restore --staged filename` |
| Discard changes | `git restore filename` |

---

## Project Path
**Full Path:** `E:\the automators website`

**Repository:** TheAutomatorsDotCo/the-automators-website

**Branch:** main

**Remote:** origin (GitHub)

