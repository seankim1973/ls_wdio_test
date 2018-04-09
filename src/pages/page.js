function Page() {
}

Page.prototype.open = function (url) {
    browser.url(url);
};

Page.prototype.getExtension = function () {
    return Date.now();
};

Page.prototype.WaitForVisible = function (element) {
    browser.waitForVisible(element.selector);
};

Page.prototype.EnterText = function (element, text) {
    this.WaitForVisible(element);
    element.setValue(text);
};

Page.prototype.Click = function (element) {
    this.WaitForVisible(element);
    element.click();
};

Page.prototype.GetText = function (element) {
    this.WaitForVisible(element);
    return element.getText();
};

Page.prototype.logActualExpectedStrings = function (actual, expected) {
    let objects = [actual, expected];
    let title = "";

    objects.forEach(function (obj) {
        if (obj === actual) {
            title = "Actual";
        } else if (obj === expected) {
            title = "Expected";
        }
        console.log("\r");
        console.log("==== " + title + " Data ====");
        console.log(obj);
    });
    console.log("\r");
};

Page.prototype.logActualExpectedValues = function (actual, expected) {
    let objects = [actual, expected];
    let title = "";

    objects.forEach(function (obj) {
        if(obj === actual) {
            title = "Actual";
        } else if(obj === expected){
            title = "Expected";
        }
        console.log("\r");
        console.log("==== " + title + " Data ====");

        let keys = Object.keys(obj);
        let values = Object.values(obj);
        for(let i = 0; i < keys.length; i++) {
            console.log(keys[i] + ": " + values[i]);
        }
        console.log("\r");
    });
};

module.exports = new Page();