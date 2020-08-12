"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browser_utils_1 = require("../utils/browser.utils");
const dataprovider_1 = require("../TestData/dataprovider");
class kitDetails {
    Kitcreationlink() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Kit Creation')]"));
    }
    CreatKitbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Create New Item')]"));
    }
    Classdropdown() {
        return protractor_1.element(protractor_1.by.xpath("//option[@ng-reflect-value='3']"));
    }
    logoname() {
        return protractor_1.element(protractor_1.by.xpath("//input[@formcontrolname='logoName']"));
    }
    itemname() {
        return protractor_1.element(protractor_1.by.xpath("//input[@formcontrolname='itemName']"));
    }
    noofitems() {
        return protractor_1.element(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"));
    }
    addbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Add')]"));
    }
    savebtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Save')]"));
    }
    noncardstab() {
        return protractor_1.element(protractor_1.by.xpath("//div[contains(text(),'Non Cards')]"));
    }
    Aids() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'3D Aids')]"));
    }
    Ladder() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Ladders')]"));
    }
    Others() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Others')]"));
    }
    Createcards() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[@ng-reflect-router-link][contains(text(),'Kit Creation')]"));
                this.Kitcreationlink().click();
                protractor_1.browser.sleep(2000);
                var Classselection = protractor_1.by.xpath("//option[@ng-reflect-value='" + record["Class"] + "']");
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.clickOnElement(Classselection);
                protractor_1.browser.sleep(1000);
                var subjectselection = protractor_1.by.xpath("//span[contains(text(),'" + record["Subject"] + "')]");
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.clickOnElement(subjectselection);
                protractor_1.browser.sleep(1000);
                this.CreatKitbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='logoName']"), record["logoname"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["itemname1"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems1"]);
                protractor_1.browser.sleep(1000);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["itemname2"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems2"]);
                protractor_1.browser.sleep(1000);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["itemname3"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems3"]);
                protractor_1.browser.sleep(1000);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["itemname4"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems4"]);
                protractor_1.browser.sleep(1000);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["itemname5"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems5"]);
                protractor_1.browser.sleep(1000);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["itemname6"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems6"]);
                protractor_1.browser.sleep(1000);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["itemname7"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems7"]);
                protractor_1.browser.sleep(1000);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["itemname8"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems8"]);
                protractor_1.browser.sleep(1000);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["itemname9"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems9"]);
                protractor_1.browser.sleep(1000);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["itemname10"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems10"]);
                protractor_1.browser.sleep(1000);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[contains(text(),'Save')]"));
                this.savebtn().click();
                protractor_1.browser.sleep(5000);
                this.CreatKitbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Kit is created successfully');
                });
            });
        }
    }
    // Updatecardsdetails(){
    //     browser.ignoreSynchronization = true
    //     var dataRecs = dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null)
    //     if (dataRecs && dataRecs.length > 0) {
    //         dataRecs.forEach(record => {
    //             var Classsroomelection = by.xpath("//select//option[text()='" + record["Class"] + "']");
    //             browser.sleep(1000);
    //             BrowserUtils.clickOnElement(Classsroomelection);
    //             browser.sleep(5000);
    //             this.editicon().click();
    //             browser.sleep(8000);
    //             this.nametextbox().clear();
    //             browser.sleep(1000);
    //              BrowserUtils.enterText(by.xpath("//input[@formcontrolname='assetName']"), record["name8"]);
    //              browser.sleep(1000);
    //              this.quantitytextbox().clear();
    //             browser.sleep(1000);
    //              BrowserUtils.enterText(by.xpath("//input[@formcontrolname='quantity']"), record["quantity10"]);  
    //              browser.sleep(1000);
    //              this.updatebtn().click();
    //              browser.sleep(5000);
    //               this.Createnewassetbtn().isDisplayed().then(function (dis) {
    //             expect(dis).toBe(true, 'Asset is updated successfully')
    //         })
    //         })
    //     } 
    // }
    // Deleteassets(){
    //     browser.ignoreSynchronization = true
    //         var dataRecs = dataProvider.getJsonDataFromFile('./TestData/AssetData/EnglishData.json', null)
    //         if (dataRecs && dataRecs.length > 0) {
    //             dataRecs.forEach(record => {
    //                 var Classsroomelection = by.xpath("//select//option[text()='" + record["Class"] + "']");
    //                 browser.sleep(1000);
    //                 BrowserUtils.clickOnElement(Classsroomelection);
    //                 browser.sleep(5000);
    //                 this.deleteicon().click();
    //                 browser.sleep(3000);
    //                this.Cancelbtn().click();
    //                 browser.sleep(3000);
    //                  this.deleteicon().click();
    //                 browser.sleep(3000);
    //                 this.Confirmbtn().click();
    //                  browser.sleep(5000);
    //                   this.Createnewassetbtn().isDisplayed().then(function (dis) {
    //                 expect(dis).toBe(true, 'Asset is deleted successfully')
    //             })
    //             })
    //         } 
    // }
    CreateAidsnoncards() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[@ng-reflect-router-link][contains(text(),'Kit Creation')]"));
                this.Kitcreationlink().click();
                protractor_1.browser.sleep(2000);
                this.noncardstab().click();
                protractor_1.browser.sleep(2000);
                var Classselection = protractor_1.by.xpath("//option[contains(text(),'" + record["Class"] + "')]");
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.clickOnElement(Classselection);
                protractor_1.browser.sleep(1000);
                var subjectselection = protractor_1.by.xpath("//span[contains(text(),'" + record["Subject"] + "')]");
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.clickOnElement(subjectselection);
                protractor_1.browser.sleep(1000);
                this.Aids().click();
                protractor_1.browser.sleep(1000);
                this.CreatKitbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Aidsitemname1"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Aidsnoofitems1"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Aidsitemname2"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Aidsnoofitems2"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Aidsitemname3"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Aidsnoofitems3"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Aidsitemname4"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Aidsnoofitems4"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Aidsitemname5"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Aidsnoofitems5"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Aidsitemname6"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Aidsnoofitems6"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Aidsitemname7"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Aidsnoofitems7"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Aidsitemname8"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Aidsnoofitems8"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Aidsitemname9"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Aidsnoofitems9"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Aidsitemname10"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Aidsnoofitems10"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[contains(text(),'Save')]"));
                this.savebtn().click();
                protractor_1.browser.sleep(5000);
                this.CreatKitbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Aidsnoncards is created successfully');
                });
            });
        }
    }
    CreateLaddernoncards() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[@ng-reflect-router-link][contains(text(),'Kit Creation')]"));
                this.Kitcreationlink().click();
                protractor_1.browser.sleep(2000);
                this.noncardstab().click();
                protractor_1.browser.sleep(2000);
                var Classselection = protractor_1.by.xpath("//option[contains(text(),'" + record["Class"] + "')]");
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.clickOnElement(Classselection);
                protractor_1.browser.sleep(1000);
                var subjectselection = protractor_1.by.xpath("//span[contains(text(),'" + record["Subject"] + "')]");
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.clickOnElement(subjectselection);
                protractor_1.browser.sleep(1000);
                this.Ladder().click();
                protractor_1.browser.sleep(1000);
                this.CreatKitbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Ladderitemname1"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Laddernoofitems1"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Ladderitemname2"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Laddernoofitems2"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Ladderitemname3"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Laddernoofitems3"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Ladderitemname4"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Laddernoofitems4"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Ladderitemname5"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Laddernoofitems5"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Ladderitemname6"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Laddernoofitems6"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Ladderitemname7"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Laddernoofitems7"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Ladderitemname8"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Laddernoofitems8"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Ladderitemname9"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Laddernoofitems9"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Ladderitemname10"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Laddernoofitems10"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[contains(text(),'Save')]"));
                this.savebtn().click();
                protractor_1.browser.sleep(5000);
                this.CreatKitbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Laddernoncards is created successfully');
                });
            });
        }
    }
    CreateOthersnoncards() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[@ng-reflect-router-link][contains(text(),'Kit Creation')]"));
                this.Kitcreationlink().click();
                protractor_1.browser.sleep(2000);
                this.noncardstab().click();
                protractor_1.browser.sleep(2000);
                var Classselection = protractor_1.by.xpath("//option[contains(text(),'" + record["Class"] + "')]");
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.clickOnElement(Classselection);
                protractor_1.browser.sleep(1000);
                var subjectselection = protractor_1.by.xpath("//span[contains(text(),'" + record["Subject"] + "')]");
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.clickOnElement(subjectselection);
                protractor_1.browser.sleep(1000);
                this.Others().click();
                protractor_1.browser.sleep(1000);
                this.CreatKitbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Othersitemname1"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Othersnoofitems1"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Othersitemname2"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Othersnoofitems2"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Othersitemname3"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Othersnoofitems3"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Othersitemname4"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Othersnoofitems4"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Othersitemname5"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Othersnoofitems5"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Othersitemname6"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Othersnoofitems6"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Othersitemname7"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Othersnoofitems7"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Othersitemname8"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Othersnoofitems8"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Othersitemname9"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Othersnoofitems9"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Othersitemname10"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Othersnoofitems10"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[contains(text(),'Save')]"));
                this.savebtn().click();
                protractor_1.browser.sleep(5000);
                this.CreatKitbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Othersnoncards is created successfully');
                });
            });
        }
    }
}
exports.kitDetails = kitDetails;
