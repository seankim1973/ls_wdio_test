let page = require('./page.js');
let config = require('../config/config.js');

let LoginPage = Object.create(page, {
    /**
     * define elements
     */

    extensionField: {
        get: function () {
            return browser.element("input#ext_field");
        }
    },

    loginButton: {
        get: function () {
            return browser.element("button#login_button");
        }
    },


    /**
     * define page methods
     */

    visitTestPage: {
        value: function () {
            page.open.call(this, config.testPageUrl);
        }
    },


    getTitle: {
        value: function () {
            return browser.getTitle();
        }
    },

    login: {
        value: function (extension) {
            page.EnterText(this.extensionField, extension);
            page.Click(this.loginButton);
        }
    }

});

module.exports = LoginPage;
