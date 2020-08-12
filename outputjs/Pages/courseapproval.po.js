"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browser_utils_1 = require("../utils/browser.utils");
const dataprovider_1 = require("../TestData/dataprovider");
class courseapprovalPage {
    CourselistPanelElement() {
        return protractor_1.element(protractor_1.by.xpath("//mat-expansion-panel-header[@aria-expanded='false']//mat-panel-title[@ng-reflect-router-link='/classes/all-courses']"));
    }
    ClickAllclasses() {
        return protractor_1.element(protractor_1.by.xpath("//mat-list-item[@ng-reflect-router-link='/classes/all-courses']"));
    }
    keycloakloginbtn() {
        return protractor_1.element(protractor_1.by.xpath("//input[@name='login']"));
    }
    commentbutton() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Add Comment')]"));
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
    approvetasks() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/courseapprover/Courseapprover.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.ignoreSynchronization = true;
                var classselection = protractor_1.by.xpath("//mat-expansion-panel-header[@ng-reflect-router-link='/classes/all-courses']/../div//mat-list/mat-list-item/div[contains(text(),'" + record["Class"] + "')]");
                browser_utils_1.BrowserUtils.clickOnElement(classselection);
                protractor_1.browser.sleep(1500);
                var subjectselection = protractor_1.by.xpath("//span[text()='" + record["Subject"] + "']");
                browser_utils_1.BrowserUtils.clickOnElement(subjectselection);
                protractor_1.browser.sleep(1500);
                var Tasklinkselection = protractor_1.by.xpath("//a[contains(text(),'" + record["ApproverTasklink"] + "')]");
                browser_utils_1.BrowserUtils.clickOnElement(Tasklinkselection);
                protractor_1.browser.sleep(1500);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[contains(text(),'Add Comment')]"));
                this.commentbutton().click();
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                protractor_1.browser.sleep(1500);
                browser_utils_1.BrowserUtils.getTotalElementCount(protractor_1.by.xpath("//div[contains(@class,'milestone-wrapper')]")).then((getmilestoneCount) => {
                    console.log("loc is:" + getmilestoneCount);
                    for (let milestoneCount = 1; milestoneCount <= getmilestoneCount; milestoneCount++) {
                        var milestoneCountloc = "(//div[contains(@class,'milestone-wrapper')])[" + milestoneCount + "]";
                        console.log(milestoneCountloc);
                        var milestoneContainer = protractor_1.by.xpath(milestoneCountloc);
                        browser_utils_1.BrowserUtils.clickOnElement(milestoneContainer);
                        protractor_1.browser.sleep(2000);
                        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[contains(text(),'Add Comment')]"));
                        this.commentbutton().click();
                        browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                        protractor_1.browser.sleep(1500);
                    }
                });
            });
        }
    }
}
exports.courseapprovalPage = courseapprovalPage;
