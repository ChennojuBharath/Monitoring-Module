"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browser_utils_1 = require("../utils/browser.utils");
const dataprovider_1 = require("../TestData/dataprovider");
var path = require("path");
class Assets {
    Assetslink() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Asset Management')]"));
    }
    Createnewassetbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Create New Asset')]"));
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
    addbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Add')]"));
    }
    editicon() {
        return protractor_1.element(protractor_1.by.xpath("(//i[text()='edit'])[1]"));
    }
    deleteicon() {
        return protractor_1.element(protractor_1.by.xpath("(//i[text()='delete'])[1]"));
    }
    nametextbox() {
        return protractor_1.element(protractor_1.by.xpath("//input[@ng-reflect-name='assetName']"));
    }
    quantitytextbox() {
        return protractor_1.element(protractor_1.by.xpath("//input[@ng-reflect-name='quantity']"));
    }
    updatebtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Update')]"));
    }
    cancelbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Cancel')]"));
    }
    Confirmbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Confirm')]"));
    }
    Cancelbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Cancel')]"));
    }
    Createassets() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/AssetData/EnglishData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                var Classsroomelection = protractor_1.by.xpath("//select//option[text()='" + record["Class"] + "']");
                protractor_1.browser.sleep(3000);
                browser_utils_1.BrowserUtils.clickOnElement(Classsroomelection);
                protractor_1.browser.sleep(1500);
                this.Createnewassetbtn().click();
                protractor_1.browser.sleep(5000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='assetName']"), record["name"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='quantity']"), record["quantity"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='assetName']"), record["name2"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='quantity']"), record["quantity2"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='assetName']"), record["name3"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='quantity']"), record["quantity3"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='assetName']"), record["name4"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='quantity']"), record["quantity4"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='assetName']"), record["name5"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='quantity']"), record["quantity5"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='assetName']"), record["name6"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='quantity']"), record["quantity6"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='assetName']"), record["name7"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='quantity']"), record["quantity7"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='assetName']"), record["name8"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='quantity']"), record["quantity8"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='assetName']"), record["name9"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='quantity']"), record["quantity9"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='assetName']"), record["name10"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='quantity']"), record["quantity10"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                this.savebtn().click();
                protractor_1.browser.sleep(7000);
                this.Createnewassetbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Asset is created successfully');
                });
            });
        }
    }
    Updateassets() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/AssetData/EnglishData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                var Classsroomelection = protractor_1.by.xpath("//select//option[text()='" + record["Class"] + "']");
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.clickOnElement(Classsroomelection);
                protractor_1.browser.sleep(5000);
                this.editicon().click();
                protractor_1.browser.sleep(8000);
                this.nametextbox().clear();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='assetName']"), record["name8"]);
                protractor_1.browser.sleep(1000);
                this.quantitytextbox().clear();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='quantity']"), record["quantity10"]);
                protractor_1.browser.sleep(1000);
                this.updatebtn().click();
                protractor_1.browser.sleep(5000);
                this.Createnewassetbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Asset is updated successfully');
                });
            });
        }
    }
    Deleteassets() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/AssetData/EnglishData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                var Classsroomelection = protractor_1.by.xpath("//select//option[text()='" + record["Class"] + "']");
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.clickOnElement(Classsroomelection);
                protractor_1.browser.sleep(5000);
                this.deleteicon().click();
                protractor_1.browser.sleep(3000);
                this.Cancelbtn().click();
                protractor_1.browser.sleep(3000);
                this.deleteicon().click();
                protractor_1.browser.sleep(3000);
                this.Confirmbtn().click();
                protractor_1.browser.sleep(5000);
                this.Createnewassetbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Asset is deleted successfully');
                });
            });
        }
    }
}
exports.Assets = Assets;
