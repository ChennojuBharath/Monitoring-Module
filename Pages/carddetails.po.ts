import { browser, element, by, ExpectedConditions } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider'
export class cardDetails {

    Kitcreationlink() {
        return element(by.xpath("//span[contains(text(),'Kit Creation')]"));
    }
    CreatKitbtn() {
        return element(by.xpath("//span[contains(text(),'Create New Item')]"));
    }
    Classdropdown() {
        return element(by.xpath("//option[@ng-reflect-value='3']"));
    }
    logoname() {
        return element(by.xpath("//input[@formcontrolname='logoName']"));
    }
    itemname() {
        return element(by.xpath("//input[@formcontrolname='itemName']"));
    }
    noofitems() {
        return element(by.xpath("//input[@formcontrolname='noOfItems']"));
    }
    addbtn() {
        return element(by.xpath("//span[contains(text(),'Add')]"));
    }
    savebtn() {
        return element(by.xpath("//span[contains(text(),'Save')]"));
    }
editicon(){
    return element(by.xpath("(//img[@src='assets/images/Union.svg'])[1]"));
}
deleteicon(){
    return element(by.xpath("(//img[@src='assets/images/delete.svg'])[1]"));
}
  Updatebtn(){
    return element(by.xpath("//span[contains(text(),'Update')]"));
}
 Cancelbtn(){
    return element(by.xpath("//span[contains(text(),'Cancel')]"));
} 
 Confirmbtn(){
    return element(by.xpath("//span[contains(text(),'Confirm')]"));
}
    noncardstab() {
        return element(by.xpath("//div[contains(text(),'Non Cards')]"));
    }
    Aids() {
        return element(by.xpath("//span[contains(text(),'3D Aids')]"));
    }
    Ladder() {
        return element(by.xpath("//span[contains(text(),'Ladders')]"));
    }
    Others() {
        return element(by.xpath("//span[contains(text(),'Others')]"));
    }
    Createcards() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                BrowserUtils.scrollIntoView(by.xpath("//div[@ng-reflect-router-link][contains(text(),'Kit Creation')]"));
                this.Kitcreationlink().click();
                browser.sleep(2000);
                var Classselection = by.xpath("//option[@ng-reflect-value='" + record["Class"] + "']");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(Classselection);
                browser.sleep(1000);
                var subjectselection = by.xpath("//span[contains(text(),'" + record["Subject"] + "')]");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(1000);
                this.CreatKitbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='logoName']"), record["logoname"]);
                 browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["itemname1"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems1"]);
                 browser.sleep(1000);
                this.addbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["itemname2"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems2"]);
                 browser.sleep(1000);
                this.addbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["itemname3"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems3"]);
                 browser.sleep(1000);
                this.addbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["itemname4"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems4"]);
                 browser.sleep(1000);
                this.addbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["itemname5"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems5"]);
                 browser.sleep(1000);
                this.addbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["itemname6"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems6"]);
                 browser.sleep(1000);
                this.addbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["itemname7"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems7"]);
                 browser.sleep(1000);
                this.addbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["itemname8"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems8"]);
                 browser.sleep(1000);
                this.addbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["itemname9"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems9"]);
                 browser.sleep(1000);
                this.addbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["itemname10"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems10"]);
                 browser.sleep(1000);
                this.addbtn().click();
                browser.sleep(1000);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
                this.savebtn().click();
                browser.sleep(5000);
                this.CreatKitbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Kit is created successfully')
                })
            })
        }

    }
    Updatecardsdetails(){
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                var Classsroomelection = by.xpath("//select//option[text()='" + record["Class"] + "']");
                browser.sleep(1000);
                BrowserUtils.clickOnElement(Classsroomelection);
                browser.sleep(5000);
                this.editicon().click();
                browser.sleep(8000);
                this.itemname().clear();
                browser.sleep(1000);
                 BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["itemname10"]);
                 browser.sleep(1000);
                 this.noofitems().clear();
                browser.sleep(1000);
                 BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems10"]);  
                 browser.sleep(1000);
                 this.Cancelbtn().click();
                 browser.sleep(4000);
                  this.editicon().click();
                  browser.sleep(8000);
                  this.itemname().clear();
                  browser.sleep(1000);
                 BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["itemname10"]);
                 browser.sleep(1000);
                 this.noofitems().clear();
                browser.sleep(1000);
                 BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems10"]);  
                 browser.sleep(1000);
                 this.Updatebtn().click();
                 browser.sleep(5000);
                  this.CreatKitbtn().isDisplayed().then(function (dis) {
                expect(dis).toBe(true, 'Kit is updated successfully')
            })
            })
        } 
    }
Deletekitdetals(){
    browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null)
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
                  this.CreatKitbtn().isDisplayed().then(function (dis) {
                expect(dis).toBe(true, 'Kit details is deleted successfully')
            })
            })
        } 
}
    CreateAidsnoncards() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                BrowserUtils.scrollIntoView(by.xpath("//div[@ng-reflect-router-link][contains(text(),'Kit Creation')]"));
                this.Kitcreationlink().click();
                browser.sleep(2000);
                this.noncardstab().click();
                browser.sleep(2000);
                var Classselection = by.xpath("//option[contains(text(),'" + record["Class"] + "')]");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(Classselection);
                browser.sleep(1000);
                var subjectselection = by.xpath("//span[contains(text(),'" + record["Subject"] + "')]");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(1000);
                this.Aids().click();
                browser.sleep(1000);
                this.CreatKitbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Aidsitemname1"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Aidsnoofitems1"]);
                this.addbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Aidsitemname2"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Aidsnoofitems2"]);
                this.addbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Aidsitemname3"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Aidsnoofitems3"]);
                this.addbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Aidsitemname4"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Aidsnoofitems4"]);
                this.addbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Aidsitemname5"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Aidsnoofitems5"]);
                this.addbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Aidsitemname6"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Aidsnoofitems6"]);
                this.addbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Aidsitemname7"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Aidsnoofitems7"]);
                this.addbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Aidsitemname8"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Aidsnoofitems8"]);
                this.addbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Aidsitemname9"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Aidsnoofitems9"]);
                this.addbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Aidsitemname10"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Aidsnoofitems10"]);
                this.addbtn().click();
                browser.sleep(1000);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
                this.savebtn().click();
                browser.sleep(5000);
                this.CreatKitbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Aidsnoncards is created successfully')
                })
            })
        }
    }
    CreateLaddernoncards() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                BrowserUtils.scrollIntoView(by.xpath("//div[@ng-reflect-router-link][contains(text(),'Kit Creation')]"));
                this.Kitcreationlink().click();
                browser.sleep(2000);
                this.noncardstab().click();
                browser.sleep(2000);
                var Classselection = by.xpath("//option[contains(text(),'" + record["Class"] + "')]");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(Classselection);
                browser.sleep(1000);
                var subjectselection = by.xpath("//span[contains(text(),'" + record["Subject"] + "')]");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(1000);
                this.Ladder().click();
                browser.sleep(1000);
                this.CreatKitbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Ladderitemname1"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Laddernoofitems1"]);
                this.addbtn().click();
                browser.sleep(1000);
                 BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Ladderitemname2"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Laddernoofitems2"]);
                this.addbtn().click();
                browser.sleep(1000);
                 BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Ladderitemname3"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Laddernoofitems3"]);
                this.addbtn().click();
                browser.sleep(1000);
                 BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Ladderitemname4"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Laddernoofitems4"]);
                this.addbtn().click();
                browser.sleep(1000);
                 BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Ladderitemname5"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Laddernoofitems5"]);
                this.addbtn().click();
                browser.sleep(1000);
                 BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Ladderitemname6"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Laddernoofitems6"]);
                this.addbtn().click();
                browser.sleep(1000);
                 BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Ladderitemname7"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Laddernoofitems7"]);
                this.addbtn().click();
                browser.sleep(1000);
                 BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Ladderitemname8"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Laddernoofitems8"]);
                this.addbtn().click();
                browser.sleep(1000);
                 BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Ladderitemname9"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Laddernoofitems9"]);
                this.addbtn().click();
                browser.sleep(1000);
                 BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Ladderitemname10"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Laddernoofitems10"]);
                this.addbtn().click();
                browser.sleep(1000);
                  BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
                this.savebtn().click();
                browser.sleep(5000);
                this.CreatKitbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Laddernoncards is created successfully')
                })
            })
        }
    }
    CreateOthersnoncards() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                BrowserUtils.scrollIntoView(by.xpath("//div[@ng-reflect-router-link][contains(text(),'Kit Creation')]"));
                this.Kitcreationlink().click();
                browser.sleep(2000);
                this.noncardstab().click();
                browser.sleep(2000);
                var Classselection = by.xpath("//option[contains(text(),'" + record["Class"] + "')]");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(Classselection);
                browser.sleep(1000);
                var subjectselection = by.xpath("//span[contains(text(),'" + record["Subject"] + "')]");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(1000);
                this.Others().click();
                browser.sleep(1000);
                this.CreatKitbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Othersitemname1"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Othersnoofitems1"]);
                this.addbtn().click();
                browser.sleep(1000);
                  BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Othersitemname2"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Othersnoofitems2"]);
                this.addbtn().click();
                browser.sleep(1000);
                  BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Othersitemname3"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Othersnoofitems3"]);
                this.addbtn().click();
                browser.sleep(1000);
                  BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Othersitemname4"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Othersnoofitems4"]);
                this.addbtn().click();
                browser.sleep(1000);
                  BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Othersitemname5"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Othersnoofitems5"]);
                this.addbtn().click();
                browser.sleep(1000);
                  BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Othersitemname6"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Othersnoofitems6"]);
                this.addbtn().click();
                browser.sleep(1000);
                  BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Othersitemname7"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Othersnoofitems7"]);
                this.addbtn().click();
                browser.sleep(1000);
                  BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Othersitemname8"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Othersnoofitems8"]);
                this.addbtn().click();
                browser.sleep(1000);
                  BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Othersitemname9"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Othersnoofitems9"]);
                this.addbtn().click();
                browser.sleep(1000);
                  BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Othersitemname10"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Othersnoofitems10"]);
                this.addbtn().click();
                browser.sleep(1000);
               BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
                this.savebtn().click();
                browser.sleep(5000);
                this.CreatKitbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Othersnoncards is created successfully')
                })
            })
        }
    }
}