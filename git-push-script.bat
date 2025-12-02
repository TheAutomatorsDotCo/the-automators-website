@echo off
echo === Git Status === > git-output.txt
git status >> git-output.txt 2>&1

echo. >> git-output.txt
echo === Git Diff Summary === >> git-output.txt
git diff --stat >> git-output.txt 2>&1

echo. >> git-output.txt
echo === Adding Files === >> git-output.txt
git add . >> git-output.txt 2>&1

echo. >> git-output.txt
echo === Git Status After Add === >> git-output.txt
git status >> git-output.txt 2>&1

echo. >> git-output.txt
echo Script completed! Check git-output.txt for results.
type git-output.txt
