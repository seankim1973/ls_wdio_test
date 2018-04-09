let page = require('./page.js');

let InfoPage = Object.create(page, {
    /**
     * define elements
     */


    emailData: {
        get: function () {
            return browser.element("span#email");
        }
    },

    urlData: {
        get: function () {
            return browser.element("span#url");
        }
    },

    phoneData: {
        get: function () {
            return browser.element("span#phone");
        }
    },

    showChatsButton: {
        get: function () {
            return browser.element("button#showChats");
        }
    },

    buildJsonButton: {
        get: function () {
            return browser.element("button#buildJSON");
        }
    },

    jsonData: {
        get: function () {
            return browser.element("pre#json_output");
        }
    },

    myChatsBlock: {
        get: function () {
            return browser.element("#myChats");
        }
    },

    newChatsList: {
        get: function () {
            return browser.element("#myChats > ul:nth-child(4) > li");
        }
    },



    /**
     * define page methods
     */

    parseData: {
        value: function (element) {
            return page.GetText(element);
        }
    },

    parseJSON: {
        value: function () {
            return JSON.parse(this.jsonData.getText());
        }
    },

    clickBuildJsonButton: {
        value: function () {
            page.Click(this.buildJsonButton);
        }
    },

    clickShowChatsButton: {
        value: function () {
            page.Click(this.showChatsButton);
        }
    },

    getChatDetails: {
        value: function (index) {
            let newChat = browser.$$("#myChats > ul:nth-child(4) > li");
            let divs = newChat[index].$$("div");
            let div1 = divs[0].getText();
            let div2 = divs[1].getText();
            let div1Array = div1.split(" @");
            return {
                sender: div1Array[0],
                time: div1Array[1],
                message: div2
            }
        }
    },

    parseNewChats: {
        value: function (index) {
            browser.pause(5000);
            return this.getChatDetails(index);
        }
    }
});

module.exports = InfoPage;