@echo off
cd /d "e:\the automators website"

echo Adding all files to staging...
git add .

echo.
echo Committing changes...
git commit -m "Update pricing pages and add PricingLandingPage component"

echo.
echo Pushing to origin main...
git push origin main

echo.
echo Done! Your changes should now be deploying on Vercel.
pause
