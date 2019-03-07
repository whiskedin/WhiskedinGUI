require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');

describe('Tests', function() {
    let driver;
    beforeEach(function() {
        // runs before all test in this block
        console.log('try');
        driver = new Builder().forBrowser('chrome').build();
    });

    afterEach(function() {
        driver.close();
    });

    it('Check all elements are visible', async function() {
        // Load the page
        await driver.get('http://localhost:3000');
        driver.findElement(By.id('UserAuth-username'));
        driver.findElement(By.id('UserAuth-password'));

        driver.findElement(By.className("nav-link")).click();
        driver.findElement(By.id('UserAuth-username'));
        driver.findElement(By.id('UserAuth-password'));
        let sign_up = driver.findElement(By.className('btn'));
        assert.equal(sign_up.text, "Sign-Up");
    });

// here system testing will be done against the front end with a mock api.
// To run these tests the front end must be instantiated first and then the tests will work
});