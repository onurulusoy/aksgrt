// features/support/world.js
var chrome = require('selenium-webdriver/chrome');
var chromeDriverPath = require('chromedriver').path;
chrome.setDefaultService(new chrome.ServiceBuilder(chromeDriverPath).build());

function CustomWorld() {
  this.driver = new chrome.Driver()
}

module.exports = function() {
  this.World = CustomWorld;
};
var seleniumWebdriver = require('selenium-webdriver');

/*function CustomWorld() {
    this.driver = new seleniumWebdriver.Builder()
        .forBrowser('firefox')
        .build();

    // Returns a promise that resolves to the element
    this.waitForElement = function(locator) {
        var condition = seleniumWebdriver.until.elementLocated(locator);
        return this.driver.wait(condition, 50000);
    }
}*/

module.exports = function() {
    this.World = CustomWorld;
};
