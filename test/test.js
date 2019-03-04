import API_URL from './index.js'
require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');

describe('Tests', function() {
    before(function() {
        // runs before all test in this block
        console.log('try');
        API_URL = 'http://5c7c414c60c5c60014a3fb02.mockapi.io';
    });

// here system testing will be done against the front end with a mock api.
// To run these tests the front end must be instantiated first and then the tests will work
});