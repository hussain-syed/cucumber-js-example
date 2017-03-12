var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');


defineSupportCode(function({Given, When, Then}) {
  Given('I am on the join GitHub page', function() {
    return this.driver.get('https://github.com/join?source=header-home');
  });

  When('I enter an existing username', function () {
    var userName = this.driver.findElement({id: 'user_login'});
    userName.sendKeys('photobox');
    return userName;
  });

  Then('I should see username already taken error message', function () {
    var error = "//*[@id=\"signup-form\"]/dl[1]/dd[2]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: error});
    return this.driver.wait(condition, 5000);
  });
});