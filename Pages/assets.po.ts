import { browser, element, by, ExpectedConditions } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider'
var path = require("path");
export class Assets {
    Assetslink() {
        return element(by.xpath("//span[contains(text(),'Asset Management')]"));
    }
    Createnewassetbtn() {
        return element(by.xpath("//span[contains(text(),'Create New Asset')]"));
    }
    typefile() {
        return element(by.xpath("//input[@type='file']"))
    }
    OKbtn() {
        return element(by.xpath("//button[text()='OK']"));
    }
    savebtn() {
        return element(by.xpath("//span[contains(text(),'Save')]"))
    }
    addbtn() {
        return element(by.xpath("//span[contains(text(),'Add')]"))
    }
    editicon() {
        return element(by.xpath("(//i[text()='edit'])[1]"))
    }
    deleteicon() {
        return element(by.xpath("(//i[text()='delete'])[1]"))
    }
    nametextbox() {
        return element(by.xpath("//input[@ng-reflect-name='assetName']"))
    }
    quantitytextbox() {
        return element(by.xpath("//input[@ng-reflect-name='quantity']"))
    }
    updatebtn(){
        return element(by.xpath("//span[contains(text(),'Update')]"))
    }
    cancelbtn(){
        return element(by.xpath("//span[contains(text(),'Cancel')]"))
    }
  Confirmbtn(){
        return element(by.xpath("//span[contains(text(),'Confirm')]"))
    }
    Cancelbtn(){
        return element(by.xpath("//span[contains(text(),'Cancel')]"))
    }

    Createassets() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/AssetData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                var Classsroomelection = by.xpath("//select//option[text()='" + record["Class"] + "']");
                browser.sleep(3000);
                BrowserUtils.clickOnElement(Classsroomelection);
                browser.sleep(1500);
                this.Createnewassetbtn().click();
                browser.sleep(5000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='assetName']"), record["name"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='quantity']"), record["quantity"]);  
               this.addbtn().click();
               browser.sleep(1000);
               BrowserUtils.enterText(by.xpath("//input[@formcontrolname='assetName']"), record["name2"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='quantity']"), record["quantity2"]);  
               this.addbtn().click();
               browser.sleep(1000);
               BrowserUtils.enterText(by.xpath("//input[@formcontrolname='assetName']"), record["name3"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='quantity']"), record["quantity3"]);  
               this.addbtn().click();
               browser.sleep(1000);
               BrowserUtils.enterText(by.xpath("//input[@formcontrolname='assetName']"), record["name4"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='quantity']"), record["quantity4"]);  
               this.addbtn().click();
               browser.sleep(1000);
               BrowserUtils.enterText(by.xpath("//input[@formcontrolname='assetName']"), record["name5"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='quantity']"), record["quantity5"]);  
               this.addbtn().click();
               browser.sleep(1000);
               BrowserUtils.enterText(by.xpath("//input[@formcontrolname='assetName']"), record["name6"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='quantity']"), record["quantity6"]);  
               this.addbtn().click();
               browser.sleep(1000);
               BrowserUtils.enterText(by.xpath("//input[@formcontrolname='assetName']"), record["name7"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='quantity']"), record["quantity7"]);  
               this.addbtn().click();
               browser.sleep(1000);
               BrowserUtils.enterText(by.xpath("//input[@formcontrolname='assetName']"), record["name8"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='quantity']"), record["quantity8"]);  
               this.addbtn().click();
               browser.sleep(1000);
               BrowserUtils.enterText(by.xpath("//input[@formcontrolname='assetName']"), record["name9"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='quantity']"), record["quantity9"]);  
               this.addbtn().click();
               browser.sleep(1000);
               BrowserUtils.enterText(by.xpath("//input[@formcontrolname='assetName']"), record["name10"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='quantity']"), record["quantity10"]);  
               this.addbtn().click();
               browser.sleep(1000);
               this.savebtn().click();
                browser.sleep(7000);
                this.Createnewassetbtn().isDisplayed().then(function (dis) {
                expect(dis).toBe(true, 'Asset is created successfully')
            })
            })
        }

    }
    Updateassets(){
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/AssetData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                var Classsroomelection = by.xpath("//select//option[text()='" + record["Class"] + "']");
                browser.sleep(1000);
                BrowserUtils.clickOnElement(Classsroomelection);
                browser.sleep(5000);
                this.editicon().click();
                browser.sleep(8000);
                this.nametextbox().clear();
                browser.sleep(1000);
                 BrowserUtils.enterText(by.xpath("//input[@formcontrolname='assetName']"), record["name8"]);
                 browser.sleep(1000);
                 this.quantitytextbox().clear();
                browser.sleep(1000);
                 BrowserUtils.enterText(by.xpath("//input[@formcontrolname='quantity']"), record["quantity10"]);  
                 browser.sleep(1000);
                 this.updatebtn().click();
                 browser.sleep(5000);
                  this.Createnewassetbtn().isDisplayed().then(function (dis) {
                expect(dis).toBe(true, 'Asset is updated successfully')
            })
            })
        } 
    }
Deleteassets(){
    browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/AssetData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                var Classsroomelection = by.xpath("//select//option[text()='" + record["Class"] + "']");
                browser.sleep(1000);
                BrowserUtils.clickOnElement(Classsroomelection);
                browser.sleep(5000);
                this.deleteicon().click();
                browser.sleep(3000);
               this.Cancelbtn().click();
                browser.sleep(3000);
                 this.deleteicon().click();
                browser.sleep(3000);
                this.Confirmbtn().click();
                 browser.sleep(5000);
                  this.Createnewassetbtn().isDisplayed().then(function (dis) {
                expect(dis).toBe(true, 'Asset is deleted successfully')
            })
            })
        } 
}

}