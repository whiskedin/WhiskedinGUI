require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

describe('Tests', function() {
    let driver;
    beforeEach(function() {
        // runs before all test in this block
        driver = new Builder().forBrowser('chrome').build();
    });

    afterEach(function() {
        driver.close();
    });

    test('Check all elements are visible', async function() {
        // Load the page
        await driver.get('http://localhost:3000');
        assert(await driver.findElement(By.id('UserAuth-username_login')).isDisplayed());
        assert(await driver.findElement(By.id('UserAuth-password_login')).isDisplayed());

        let button = await driver.findElement(By.id('id_sign_up'));
        await button.click();
        assert(await driver.findElement(By.id('UserAuth-username_sign_up')).isDisplayed());
        assert(await driver.findElement(By.id('UserAuth-password_sign_up')).isDisplayed());
        let sign_up = await driver.findElement(By.id('id_sign_up_button'));
        assert(await sign_up.getText(), "Sign-Up");
    });

});

