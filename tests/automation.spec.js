let loginPage = require('../src/pages/login.page.js');
let infoPage = require('../src/pages/info.page.js');
let config = require('../src/config/config.js');
let page = require('../src/pages/page.js');

describe("My Awesome Website", () => {
    // this test should pass
    it("will show the correct getTitle", () => {
        loginPage.visitTestPage();
        let actualTitle = loginPage.getTitle();
        let expectedTitle = config.testPage_title;

        page.logActualExpectedStrings(actualTitle, expectedTitle);
        expect(actualTitle).to.equal(expectedTitle);
    });

    //make these tests pass
    it("will show the the correct extension in myInfo", () => {
        let extension = page.getExtension();
        loginPage.visitTestPage();
        loginPage.login(extension);

        let actualData = {
            email: infoPage.parseData(infoPage.emailData),
            url: infoPage.parseData(infoPage.urlData),
            phone: infoPage.parseData(infoPage.phoneData)
        };

        let expectedData = {
            email: extension + config.myInfo_email,
            url: config.myInfo_url + extension + "/",
            phone: config.myInfo_phone + extension
        };

        page.logActualExpectedValues(actualData, expectedData);
        expect(actualData).contains(expectedData);
    });

    it("will show the my extension in the JSON output", () => {
        let extension = page.getExtension();
        loginPage.visitTestPage();
        loginPage.login(extension);
        infoPage.clickBuildJsonButton();

        let actualData = infoPage.parseJSON();

        let expectedData = {
            email: extension + config.myInfo_email,
            url: config.myInfo_url + extension + "/",
            phone: config.myInfo_phone + extension
        };

        page.logActualExpectedValues(actualData, expectedData);
        expect(actualData).contains(expectedData);
    });

    it("BONUS: will show NEW chat messages", () => {
        loginPage.visitTestPage();
        loginPage.login(page.getExtension());
        infoPage.clickShowChatsButton();
        let data = infoPage.parseNewChats(2); // hmm, does infoPage exist?

        let thirdChat = config.expectedThirdChat;

        page.logActualExpectedValues(data, thirdChat);
        expect(data).contains(thirdChat);
    });

});