@echo off
npm update
node node_modules\cucumber\bin\cucumber.js features\mainPage.feature -f json:test\report\results.json
pause
