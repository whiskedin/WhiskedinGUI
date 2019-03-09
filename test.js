require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
const POM = require('./POM.js');


describe('Tests', function() {
    let driver;
    let pom;
    beforeEach(async function() {
        // runs before all test in this block
        driver = new Builder().forBrowser('chrome').build();
        driver.get('http://localhost:3000');
    });

    afterEach(async function() {
        await driver.close();
        await driver.quit();
    });

    test('Login button and signup button redirect when success', async function() {
        let sign_in = await driver.findElement(By.id('id_signin_button'));
        await sign_in.click();

        assert(driver.getCurrentUrl(), 'http://localhost:3000/homepage');

        await driver.get('http://localhost:3000');
        let sign_up_tab = await driver.findElement(By.id('id_sign_up'));
        await sign_up_tab.click();
        let sign_up_button = await driver.findElement(By.id('id_sign_up_button'));
        await sign_up_button.click();
        assert(driver.getCurrentUrl(), 'http://localhost:3000/homepage');
    });

    test('Check all elements are visible', async function() {
        // Load the page

        assert(await driver.findElement(By.id('UserAuth-username_login')).isDisplayed());
        assert(await driver.findElement(By.id('UserAuth-password_login')).isDisplayed());
        let sign_in = await driver.findElement(By.id('id_signin_button'));
        assert(await sign_in.getText(), "Login");

        await driver.findElement(By.id('id_sign_up')).click();
        assert(await driver.findElement(By.id('UserAuth-username_sign_up')).isDisplayed());
        assert(await driver.findElement(By.id('UserAuth-password_sign_up')).isDisplayed());
        let sign_up = await driver.findElement(By.id('id_sign_up_button'));
        assert(await sign_up.getText(), "Sign-Up");
    });



    // test('All homepage elements are visible', async function() {
    //
    //     await driver.get('http://localhost:3000');
    //
    //     await pom.sign_in_button.click();
    //     assert(await pom.next_button.find().isDisplayed());
    //     // assert(await pom.back_button.find().isDisplayed());
    //     // assert(await pom.share_button.find().isDisplayed());
    //     // assert(await pom.logout_button.find().isDisplayed());
    // });


});

