# Git Push Reference Guide

## Overview
This document outlines how to commit and push changes to Git for The Automators website. The site is hosted on Vercel, which automatically deploys when changes are pushed to the `main` branch.

---

## Quick Reference Commands

### Basic Git Push (3 Commands)
```bash
git add .
git commit -m "Your commit message here"
git push origin main
```

### Check Status Before Pushing
```bash
git status
```

This shows:
- **Modified (M)** - Files that have been changed
- **Untracked (U)** - New files not yet tracked by Git
- **Staged** - Files ready to be committed

---

## Step-by-Step Process

### 1. Check What Files Have Changed
```bash
git status
```

### 2. Stage All Changes
```bash
git add .
```
This adds all modified and new files to staging.

To add specific files only:
```bash
git add src/components/PricingPage.tsx
git add src/components/VoiceAgentsPage.tsx
```

### 3. Commit Changes
```bash
git commit -m "Brief description of changes"
```

**Good commit message examples:**
- `"Update pricing pages with new subscription model"`
- `"Add PricingLandingPage component"`
- `"Fix mobile responsiveness on VoiceAgentsPage"`
- `"Update Voice Agents technical specifications"`

### 4. Push to Remote (Triggers Vercel Deployment)
```bash
git push origin main
```

---

## Batch File Method (Windows)

If you prefer a one-click solution, create a file called `git-push.bat`:

```batch
@echo off
cd /d "e:\the automators website"

echo Adding all files to staging...
git add .

echo.
set /p msg="Enter commit message: "
echo Committing changes...
git commit -m "%msg%"

echo.
echo Pushing to origin main...
git push origin main

echo.
echo Done! Your changes should now be deploying on Vercel.
pause
```

Double-click the `.bat` file to run it.

---

## Vercel Deployment

### Automatic Deployment
- Vercel is connected to the Git repository
- Every push to `main` triggers an automatic deployment
- Deployment typically takes 1-3 minutes

### Checking Deployment Status
1. Go to [vercel.com](https://vercel.com)
2. Log in to your account
3. Select "The Automators" project
4. View deployment status and logs

---

## Common Git Commands

| Command | Description |
|---------|-------------|
| `git status` | Check current status of files |
| `git add .` | Stage all changes |
| `git add <file>` | Stage specific file |
| `git commit -m "msg"` | Commit staged changes |
| `git push origin main` | Push to remote main branch |
| `git pull origin main` | Pull latest from remote |
| `git log --oneline -5` | View last 5 commits |
| `git diff` | View unstaged changes |
| `git diff --staged` | View staged changes |

---

## Troubleshooting

### "Nothing to commit"
Your working directory is clean - no changes to push.

### "Rejected - non-fast-forward"
Someone else pushed changes. Pull first:
```bash
git pull origin main
git push origin main
```

### "Permission denied"
Check your Git credentials are set up correctly.

### Vercel Build Failed
1. Check the Vercel dashboard for error logs
2. Common issues: TypeScript errors, missing dependencies
3. Fix the error locally, then push again

---

## File Status Indicators (in IDE)

| Indicator | Meaning |
|-----------|---------|
| **M** | Modified - file has changes |
| **U** | Untracked - new file not in Git |
| **A** | Added - staged for commit |
| **D** | Deleted - file will be removed |
| **R** | Renamed |

---

**Document Created:** 2024-12-02
**Last Updated:** 2024-12-02
