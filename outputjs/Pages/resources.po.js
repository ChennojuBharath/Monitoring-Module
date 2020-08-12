"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browser_utils_1 = require("../utils/browser.utils");
const dataprovider_1 = require("../TestData/dataprovider");
var path = require("path");
class Resources {
    Resourcelink() {
        return protractor_1.element(protractor_1.by.xpath("//a[@ng-reflect-router-link='/resources']/div[contains(text(),'Resources')]"));
    }
    Createnewresourcebtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'CREATE NEW RESOURCE')]"));
    }
    Classradiobtn() {
        return protractor_1.element(protractor_1.by.xpath("//div[@class='mat-radio-label-content'][contains(text(),'Class')]"));
    }
    typefile() {
        return protractor_1.element(protractor_1.by.xpath("//input[@type='file']"));
    }
    OKbtn() {
        return protractor_1.element(protractor_1.by.xpath("//button[text()='OK']"));
    }
    savebtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Save')]"));
    }
    Createresources() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/ResourceData/EnglishData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//a[@ng-reflect-router-link='/resources']/div[contains(text(),'Resources')]"));
                this.Resourcelink().click();
                protractor_1.browser.sleep(2000);
                //Audio
                this.Createnewresourcebtn().click();
                protractor_1.browser.sleep(2000);
                var Classselection = protractor_1.by.xpath("//p[@class='radio-number'][contains(text(),'" + record["Class"] + "')]");
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.clickOnElement(Classselection);
                protractor_1.browser.sleep(1500);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@name='subjectNames']"), record["Subject"]);
                protractor_1.browser.sleep(500);
                this.Classradiobtn().click();
                protractor_1.browser.sleep(500);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@ng-reflect-name='title']"), record["Title"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//textarea[@formcontrolname]"), record["Description"]);
                var path1 = '../../TestData/AudioFiles/sample.mp3';
                var audioPath = path.resolve(__dirname, path1);
                protractor_1.browser.sleep(500);
                this.typefile().sendKeys(audioPath);
                protractor_1.browser.sleep(5000);
                this.OKbtn().click();
                protractor_1.browser.sleep(500);
                this.savebtn().click();
                protractor_1.browser.sleep(2000);
                //Video
                this.Createnewresourcebtn().click();
                protractor_1.browser.sleep(2000);
                var Classselection = protractor_1.by.xpath("//p[@class='radio-number'][contains(text(),'" + record["Class"] + "')]");
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.clickOnElement(Classselection);
                protractor_1.browser.sleep(1500);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@name='subjectNames']"), record["Subject"]);
                protractor_1.browser.sleep(500);
                this.Classradiobtn().click();
                protractor_1.browser.sleep(500);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@ng-reflect-name='title']"), record["VideoTitle"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//textarea[@formcontrolname]"), record["VideoDescription"]);
                var path2 = "../../TestData/VideoFiles/Train.mp4";
                var videoPath = path.resolve(__dirname, path2);
                this.typefile().sendKeys(videoPath);
                protractor_1.browser.sleep(5000);
                this.OKbtn().click();
                protractor_1.browser.sleep(500);
                this.savebtn().click();
                protractor_1.browser.sleep(2000);
                //PDF
                this.Createnewresourcebtn().click();
                protractor_1.browser.sleep(2000);
                var Classselection = protractor_1.by.xpath("//p[@class='radio-number'][contains(text(),'" + record["Class"] + "')]");
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.clickOnElement(Classselection);
                protractor_1.browser.sleep(1500);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@name='subjectNames']"), record["Subject"]);
                protractor_1.browser.sleep(500);
                this.Classradiobtn().click();
                protractor_1.browser.sleep(500);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@ng-reflect-name='title']"), record["pdfTitle"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//textarea[@formcontrolname]"), record["pdfDescription"]);
                var path2 = "../../TestData/PDF/pdf1mb.pdf";
                var pdfPath = path.resolve(__dirname, path2);
                this.typefile().sendKeys(pdfPath);
                protractor_1.browser.sleep(5000);
                this.OKbtn().click();
                protractor_1.browser.sleep(500);
                this.savebtn().click();
            });
        }
    }
}
exports.Resources = Resources;
