@echo off
echo ========================================
echo AI-AMS Platform - GitHub Push Script
echo ========================================
echo.

echo STEP 1: Please create the GitHub repository first
echo.
echo 1. Open this URL in your browser:
echo    https://github.com/new
echo.
echo 2. Fill in these details:
echo    Repository name: ai-ams-platform
echo    Description: AI-Powered AMS Modernization Strategy - Complete Leadership Presentation Platform
echo    Visibility: Public
echo    DO NOT initialize with README, .gitignore, or license
echo.
echo 3. Click "Create repository"
echo.
pause

echo.
echo STEP 2: Pushing code to GitHub...
echo.

cd "%~dp0"
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo SUCCESS! Repository pushed to GitHub
    echo ========================================
    echo.
    echo Your repository is now available at:
    echo https://github.com/narayana2223/ai-ams-platform
    echo.
    echo Share this link with your team!
    echo.
    echo OPTIONAL NEXT STEPS:
    echo 1. Deploy to Vercel for live demo: https://vercel.com/new
    echo 2. Add collaborators on GitHub
    echo 3. Set up GitHub Pages for documentation
    echo.
) else (
    echo.
    echo ========================================
    echo ERROR: Failed to push to GitHub
    echo ========================================
    echo.
    echo Possible reasons:
    echo 1. Repository not created on GitHub yet
    echo 2. Authentication failed (use Personal Access Token)
    echo 3. Network connection issue
    echo.
    echo Please check and try again.
    echo.
)

pause
