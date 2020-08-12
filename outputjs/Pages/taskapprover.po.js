"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browser_utils_1 = require("../utils/browser.utils");
const dataprovider_1 = require("../TestData/dataprovider");
class Approverview {
    keycloakusername() {
        return protractor_1.element(protractor_1.by.xpath("//input[@id='username']"));
    }
    keycloakpassword() {
        return protractor_1.element(protractor_1.by.xpath("//input[@id='password']"));
    }
    keycloakloginbtn() {
        return protractor_1.element(protractor_1.by.xpath("//input[@name='login']"));
    }
    Telugu() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='TELUGU']"));
    }
    tasklistPanelElement() {
        return protractor_1.element(protractor_1.by.xpath("//mat-panel-title[text()=' Tasks ']"));
    }
    Class1() {
        return protractor_1.element(protractor_1.by.xpath("//mat-list-item[@ng-reflect-router-link='/task/task-list']//div[text()='Class 1 ']"));
    }
    clickOnClassLinks() {
        return protractor_1.by.xpath('//mat-panel-title[text()=" Tasks "]/../../following-sibling::div//mat-list-item');
    }
    commentbutton() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Add Comment')]"));
    }
    Commentcancelbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'CANCEL')]"));
    }
    Commentsavebtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'SAVE')]"));
    }
    Approverbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Approve')]"));
    }
    Commentsediticon() {
        return protractor_1.element(protractor_1.by.xpath("//img[@src='assets/images/Union.svg']"));
    }
    Commentsdeleteicon() {
        return protractor_1.element(protractor_1.by.xpath("//img[@src='assets/images/delete.svg']"));
    }
    successmsgokbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'OK')]"));
    }
    Draftbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Draft')]"));
    }
    Conformdraftbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'CONFIRM')]"));
    }
    Canceldraftbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'CANCEL')]"));
    }
    Previewbackbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Back')]"));
    }
    Rivertext() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'RiVER')]"));
    }
    Keycloaklogin() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@id='username']"), record["ApproverUsername"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@id='password']"), record["Approverpassword"]);
                this.keycloakloginbtn().click();
                protractor_1.browser.sleep(2000);
            });
        }
    }
    Approvetask() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/ApproverData/ApproverData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.ignoreSynchronization = true;
                var subjectselection = protractor_1.by.xpath("//span[text()='" + record["Subject"] + "']");
                browser_utils_1.BrowserUtils.clickOnElement(subjectselection);
                protractor_1.browser.sleep(1500);
                browser_utils_1.BrowserUtils.getTotalElementCount(protractor_1.by.xpath("//a[contains(text(),'" + record["Tasklinksort"] + "')]")).then((gettasklinkCount) => {
                    console.log("loc is:" + gettasklinkCount);
                    if (gettasklinkCount) {
                        for (let tasklinkCount = 1; tasklinkCount <= gettasklinkCount; tasklinkCount++) {
                            var loc = "(//a[contains(text(),'" + record["Tasklinksort"] + "')])[" + tasklinkCount + "]";
                            console.log(loc);
                            browser_utils_1.BrowserUtils.clickOnElement(subjectselection);
                            protractor_1.browser.sleep(1000);
                            var tasklinkselection = protractor_1.by.xpath(loc);
                            browser_utils_1.BrowserUtils.clickOnElement(tasklinkselection);
                            protractor_1.browser.sleep(2000);
                            browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[contains(text(),'Add Comment')]"));
                            this.commentbutton().click();
                            browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                            protractor_1.browser.sleep(500);
                            this.Commentsavebtn().click();
                            protractor_1.browser.sleep(1500);
                            browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[contains(text(),'Approve')]"));
                            this.Approverbtn().click();
                            protractor_1.browser.sleep(1500);
                            this.successmsgokbtn().click();
                            this.Rivertext().isDisplayed().then(function (dis) {
                                expect(dis).toBe(true, 'Task approve flow is successful');
                            });
                        }
                    }
                    else {
                        console.log("There are no tasks to approve");
                    }
                });
            });
        }
    }
    ClickAllclasses() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/ApproverData/ApproverData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser_utils_1.BrowserUtils.waitUntilReady(this.Class1());
                protractor_1.browser.sleep(1500);
                browser_utils_1.BrowserUtils.countAndClick(this.clickOnClassLinks());
                var editiconselection = protractor_1.by.xpath("//mat-list-item[@ng-reflect-router-link='/task/task-list']/div[text()='" + record["Class"] + "']");
                browser_utils_1.BrowserUtils.clickOnElement(editiconselection);
            });
        }
    }
    Approvetaskswithoutcomments() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/ApproverData/ApproverData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.ignoreSynchronization = true;
                var subjectselection = protractor_1.by.xpath("//span[text()='" + record["Subject"] + "']");
                browser_utils_1.BrowserUtils.clickOnElement(subjectselection);
                protractor_1.browser.sleep(1500);
                browser_utils_1.BrowserUtils.getTotalElementCount(protractor_1.by.xpath("//a[contains(text(),'" + record["Tasklinksort"] + "')]")).then((gettasklinkCount) => {
                    console.log("loc is:" + gettasklinkCount);
                    if (gettasklinkCount) {
                        for (let tasklinkCount = 1; tasklinkCount <= 1; tasklinkCount++) {
                            var loc = "(//a[contains(text(),'" + record["Tasklinksort"] + "')])[" + tasklinkCount + "]";
                            console.log(loc);
                            var tasklinkselection = protractor_1.by.xpath(loc);
                            browser_utils_1.BrowserUtils.clickOnElement(tasklinkselection);
                            protractor_1.browser.sleep(2000);
                            browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[contains(text(),'Add Comment')]"));
                            this.commentbutton().click();
                            browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                            protractor_1.browser.sleep(500);
                            this.Commentcancelbtn().click();
                            protractor_1.browser.sleep(1500);
                            browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[contains(text(),'Approve')]"));
                            this.Approverbtn().click();
                            protractor_1.browser.sleep(1500);
                            this.successmsgokbtn().click();
                            this.Rivertext().isDisplayed().then(function (dis) {
                                expect(dis).toBe(true, 'Task can be reviewed without comments');
                            });
                        }
                    }
                    else {
                        console.log("There are no tasks to check comments scenario");
                    }
                });
            });
        }
    }
    conformdraftapprovetasks() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/ApproverData/ApproverData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.ignoreSynchronization = true;
                var subjectselection = protractor_1.by.xpath("//span[text()='" + record["Subject"] + "']");
                browser_utils_1.BrowserUtils.clickOnElement(subjectselection);
                protractor_1.browser.sleep(1500);
                browser_utils_1.BrowserUtils.getTotalElementCount(protractor_1.by.xpath("//a[contains(text(),'" + record["Tasklinksort"] + "')]")).then((gettasklinkCount) => {
                    console.log("loc is:" + gettasklinkCount);
                    if (gettasklinkCount) {
                        for (let tasklinkCount = 1; tasklinkCount <= 1; tasklinkCount++) {
                            var loc = "(//a[contains(text(),'" + record["Tasklinksort"] + "')])[" + tasklinkCount + "]";
                            console.log(loc);
                            var tasklinkselection = protractor_1.by.xpath(loc);
                            browser_utils_1.BrowserUtils.clickOnElement(tasklinkselection);
                            protractor_1.browser.sleep(2000);
                            browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[contains(text(),'Add Comment')]"));
                            this.commentbutton().click();
                            browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                            protractor_1.browser.sleep(500);
                            this.Commentsavebtn().click();
                            protractor_1.browser.sleep(1500);
                            browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[contains(text(),'Approve')]"));
                            this.Draftbtn().click();
                            protractor_1.browser.sleep(1500);
                            this.Conformdraftbtn().click();
                            protractor_1.browser.sleep(1500);
                            this.Rivertext().isDisplayed().then(function (dis) {
                                expect(dis).toBe(true, 'Task can be drafted successfully');
                            });
                        }
                    }
                    else {
                        console.log("There are no tasks to draft");
                    }
                });
            });
        }
    }
    canceldraftapprovetasks() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/ApproverData/ApproverData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.ignoreSynchronization = true;
                var subjectselection = protractor_1.by.xpath("//span[text()='" + record["Subject"] + "']");
                browser_utils_1.BrowserUtils.clickOnElement(subjectselection);
                protractor_1.browser.sleep(1500);
                browser_utils_1.BrowserUtils.getTotalElementCount(protractor_1.by.xpath("//a[contains(text(),'" + record["Tasklinksort"] + "')]")).then((gettasklinkCount) => {
                    console.log("loc is:" + gettasklinkCount);
                    if (gettasklinkCount) {
                        for (let tasklinkCount = 1; tasklinkCount <= 1; tasklinkCount++) {
                            var loc = "(//a[contains(text(),'" + record["Tasklinksort"] + "')])[" + tasklinkCount + "]";
                            console.log(loc);
                            var tasklinkselection = protractor_1.by.xpath(loc);
                            browser_utils_1.BrowserUtils.clickOnElement(tasklinkselection);
                            protractor_1.browser.sleep(2000);
                            browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[contains(text(),'Add Comment')]"));
                            this.commentbutton().click();
                            browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                            protractor_1.browser.sleep(500);
                            this.Commentsavebtn().click();
                            protractor_1.browser.sleep(1500);
                            browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[contains(text(),'Approve')]"));
                            this.Draftbtn().click();
                            protractor_1.browser.sleep(1500);
                            this.Canceldraftbtn().click();
                            protractor_1.browser.sleep(1500);
                            this.Previewbackbtn().click();
                            protractor_1.browser.sleep(1500);
                            this.Rivertext().isDisplayed().then(function (dis) {
                                expect(dis).toBe(true, 'Draft can be cancelled successful');
                            });
                        }
                    }
                    else {
                        console.log("There are no tasks to check draft operation");
                    }
                });
            });
        }
    }
    editcomments() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/ApproverData/ApproverData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.ignoreSynchronization = true;
                var subjectselection = protractor_1.by.xpath("//span[text()='" + record["Subject"] + "']");
                browser_utils_1.BrowserUtils.clickOnElement(subjectselection);
                protractor_1.browser.sleep(1500);
                browser_utils_1.BrowserUtils.getTotalElementCount(protractor_1.by.xpath("//a[contains(text(),'" + record["Tasklinksort"] + "')]")).then((gettasklinkCount) => {
                    console.log("loc is:" + gettasklinkCount);
                    if (gettasklinkCount) {
                        for (let tasklinkCount = 1; tasklinkCount <= 1; tasklinkCount++) {
                            var loc = "(//a[contains(text(),'" + record["Tasklinksort"] + "')])[" + tasklinkCount + "]";
                            console.log(loc);
                            var tasklinkselection = protractor_1.by.xpath(loc);
                            browser_utils_1.BrowserUtils.clickOnElement(tasklinkselection);
                            protractor_1.browser.sleep(2000);
                            browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[contains(text(),'Add Comment')]"));
                            this.commentbutton().click();
                            browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                            protractor_1.browser.sleep(500);
                            this.Commentsavebtn().click();
                            protractor_1.browser.sleep(1500);
                            this.Commentsediticon().click();
                            browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                            protractor_1.browser.sleep(500);
                            this.Commentsavebtn().click();
                            protractor_1.browser.sleep(1500);
                            browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[contains(text(),'Approve')]"));
                            this.Approverbtn().click();
                            protractor_1.browser.sleep(1500);
                            this.successmsgokbtn().click();
                            protractor_1.browser.sleep(1500);
                            this.Rivertext().isDisplayed().then(function (dis) {
                                expect(dis).toBe(true, 'Comments edit is worrking successful');
                            });
                        }
                    }
                    else {
                        console.log("There are no tasks to edit comments");
                    }
                });
            });
        }
    }
    deletecomments() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/ApproverData/ApproverData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.ignoreSynchronization = true;
                var subjectselection = protractor_1.by.xpath("//span[text()='" + record["Subject"] + "']");
                browser_utils_1.BrowserUtils.clickOnElement(subjectselection);
                protractor_1.browser.sleep(1500);
                browser_utils_1.BrowserUtils.getTotalElementCount(protractor_1.by.xpath("//a[contains(text(),'" + record["Tasklinksort"] + "')]")).then((gettasklinkCount) => {
                    console.log("loc is:" + gettasklinkCount);
                    if (gettasklinkCount) {
                        for (let tasklinkCount = 1; tasklinkCount <= 1; tasklinkCount++) {
                            var loc = "(//a[contains(text(),'" + record["Tasklinksort"] + "')])[" + tasklinkCount + "]";
                            console.log(loc);
                            var tasklinkselection = protractor_1.by.xpath(loc);
                            browser_utils_1.BrowserUtils.clickOnElement(tasklinkselection);
                            protractor_1.browser.sleep(2000);
                            browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[contains(text(),'Add Comment')]"));
                            this.commentbutton().click();
                            browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                            protractor_1.browser.sleep(500);
                            this.Commentsavebtn().click();
                            protractor_1.browser.sleep(1500);
                            this.Commentsdeleteicon().click();
                            protractor_1.browser.sleep(1500);
                            browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[contains(text(),'Approve')]"));
                            this.Approverbtn().click();
                            protractor_1.browser.sleep(1500);
                            this.successmsgokbtn().click();
                            this.Rivertext().isDisplayed().then(function (dis) {
                                expect(dis).toBe(true, 'Delete review comment flow is successful');
                            });
                        }
                    }
                    else {
                        console.log("There are no tasks to Delete the comments");
                    }
                });
            });
        }
    }
    deletetasks() {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.getTotalElementCount(protractor_1.by.xpath("//i[text()='delete']")).then((getediticonCount) => {
            console.log("loc is:" + getediticonCount);
            if (getediticonCount) {
                for (let editiconCount = 1; editiconCount <= getediticonCount; editiconCount++) {
                    var loc = "(//i[text()='delete'])[" + editiconCount + "]";
                    console.log(loc);
                    var editiconselection = protractor_1.by.xpath(loc);
                    browser_utils_1.BrowserUtils.clickOnElement(editiconselection);
                    protractor_1.browser.sleep(2000);
                    this.successmsgokbtn().click();
                    protractor_1.browser.sleep(2000);
                    this.Rivertext().isDisplayed().then(function (dis) {
                        expect(dis).toBe(true, 'Delete tasks  is successful');
                    });
                }
            }
            else {
                console.log("There are no tasks to delete");
            }
        });
    }
}
exports.Approverview = Approverview;
