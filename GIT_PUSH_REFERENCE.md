# AI INSTRUCTION: Git Push Workflow

When the user references this file, follow this workflow to commit and push changes to GitHub.

## Your Task

1. **Check the current git status** to see what files have changed
2. **Review the changes** by running `git diff` if needed
3. **Stage all changes** using `git add .`
4. **Create a descriptive commit message** that clearly explains what changed
5. **Commit the changes** with the message
6. **Push to GitHub** using `git push origin main`
7. **Confirm completion** and let the user know the changes are pushed

## Commit Message Guidelines

Write clear, descriptive commit messages following this format:
- Start with a verb: "Add", "Update", "Fix", "Remove", "Refactor"
- Be specific about what changed
- Keep it concise but informative (50-72 characters ideal)

**Examples of good commit messages:**
- "Add Epic Deals case study page with interactive demos"
- "Update pricing page with new payment plan options"
- "Fix mobile responsiveness on services page"
- "Remove obsolete documentation files"
- "Refactor header component for better accessibility"

## Standard Git Workflow Commands

```bash
# 1. Check status
git status

# 2. Stage all changes
git add .

# 3. Commit with message
git commit -m "Your descriptive commit message"

# 4. Push to GitHub (triggers Vercel deployment)
git push origin main
```

## Important Notes

- Every push to `main` automatically triggers a Vercel deployment (1-3 minutes)
- Always check `git status` first to see what you're committing
- Run the commands sequentially - don't skip steps
- If there are conflicts or errors, report them to the user before proceeding

## Error Handling

- If "nothing to commit": Tell the user there are no changes to push
- If "rejected - non-fast-forward": Run `git pull origin main` first, then push
- If push fails: Report the error to the user and suggest solutions

---

**When user references this file: Execute the git push workflow automatically.**
