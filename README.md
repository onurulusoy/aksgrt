# aksgrt
Installation:
ghost:aksgrt kumbasar$ npm install

Execution:
# node node_modules/cucumber/bin/cucumber.js features/mainPage.feature -r features/step_definitions/ -r features/support/hooks.js -r features/support/env.js -r features/support/world.js -f json:test/report/results.json
node node_modules/cucumber/bin/cucumber.js features/mainPage.feature -f json:test/report/results.json
