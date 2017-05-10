// features/step_definitions/mainPage.js
var seleniumWebdriver = require('selenium-webdriver');
var async = require('async');

var By = seleniumWebdriver.By;

const assert = require('assert');

module.exports = function() {
    this.Given(/^I am on the aksigorta login page$/, function() {
        return this.driver.get('http://www.aksigorta.com.tr/');
    });

    this.When(/^I see "([^"]*)"$/, function(text) {
        return this.driver.findElement(By.className(text)).then(function(element) {
            return element;
        });
    });

    this.When(/^I see the "([^"]*)"$/, function(text) {
        return this.driver.findElement(By.id(text)).then(function(element) {
            return element;
        });
    });

    this.Then(/^I click "([^"]*)"$/, function(text) {
        return this.driver.findElement(By.id(text)).then(function(element) {
            return element.click();
        });
    });

    this.Then(/^I click "([^"]*)" button$/, function(text) {
        return this.driver.findElement(By.className(text)).then(function(element) {
            return element.click();
        });
    });

    this.Then(/^I should see "([^"]*)" panel$/, function(text) {
        var condition = seleniumWebdriver.until.elementLocated(By.id(text));
        return this.driver.wait(condition, 10000);
    });

    this.When('I scroll to "$selection"', function(selection) {
        var promise = this.driver;
        promise.findElement(By.id(selection)).then(function(element) {
            element.getLocation().then(function(position) {
                promise.executeScript('window.scrollTo(' + position.x + ', ' + position.y + ')');
            });
        });
    });


    //bunun yerine söyle yap:
    // //*[@id="SigortaArama"]/div[1]/div/div[2]/span[1] , //*[@id="SigortaArama"]/div[1]/div/div[2]/span[2]
    //diye gidiyor son kısmı 1 er artırıp 4lü for loop cevir
    // hepsini expected array ine push et
    // activities.raw() ile karsılastır

    /*this.Then(/^I should see all Row parents services$/, function (activities) {
        var expected = [];
        expected[0] = [];
        promise = this.driver.findElements(By.className('jquery-selectbox-list jquery-custom-selectboxes-replaced-list'));
        promise.then(function (elements) {
            async.eachSeries(elements, function (element, callback) {
                element.getText().then(function (text) {
                    expected[0].push(text);
                    callback();
                });
            }, function (err) {
                if (err) {
                    console.error(err);
                } else {
                    assert.deepEqual(activities.raw(), expected)
                }
            });
        });
    });*/

    this.Then(/^I should see all Row parents services$/, function(choices) {
        var expected = [];
        var asdf = expected[0] = [];
        var data = choices.raw();
        var j = 0;
        for (i = 1; i < 5; i++) {
            var xpath = '//*[@id="SigortaArama"]/div[1]/div/div[2]/span[' + i + ']';
            promise = this.driver.findElement(By.xpath(xpath));
            promise.then(function(element) {
                element.getText().then(function(text) {
                    expected[0].push(text);
                })
            }).then(function() {
                assert.deepEqual(data[j], [asdf[j]]);
                j = j + 1;
            })
        }


        //      var xpath = '//*[@class="event-wizard-change-services"]/h4';
        //      var expected = [];
        //      expected[0] = [];
        //      promise = this.driver.findElements(By.xpath(xpath));
        //      promise.then(function (elements) {
        //          async.eachSeries(elements, function (element, callback) {
        //              element.getText().then(function (text) {
        //                  expected[0].push(text);
        //                  callback();
        //              });
        //          }, function (err) {
        //              if (err) {
        //                  console.error(err);
        //              } else {
        //                  assert.deepEqual(breadcrumb.raw(), expected)
        //              }
        //          });
        //      });

    });


};