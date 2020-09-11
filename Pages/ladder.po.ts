import { browser, element, by, ExpectedConditions } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider';
export class ladderDetails {

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
     updatename() {
        return element(by.xpath("//input[@name='subName']"));
    }
      updateitems() {
        return element(by.xpath("//input[@name='count']"));
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
    editicon() {
        return element(by.xpath("(//img[@src='assets/images/Union.svg'])[1]"));
    }
    deleteicon() {
        return element(by.xpath("(//img[@src='assets/images/delete.svg'])[1]"));
    }
    Updatebtn() {
        return element(by.xpath("//span[contains(text(),'Update')]"));
    }
    Cancelbtn() {
        return element(by.xpath("//span[contains(text(),'Cancel')]"));
    }
    Confirmbtn() {
        return element(by.xpath("//span[contains(text(),'Confirm')]"));
    }
    Confirmokbtn() {
        return element(by.xpath("//span[contains(text(),'Ok')]"))
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

    CreateLaddernoncards() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(10000);
                this.Kitcreationlink().click();
                browser.sleep(5000);
                this.noncardstab().click();
                browser.sleep(5000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[contains(@class,'select-drop')]"), record["Class"]);
                browser.sleep(5000);
                var subjectselection = by.xpath("//span[contains(text(),'" + record["Subject"] + "')]");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(3000);
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
                browser.sleep(3000);
                this.CreatKitbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Laddernoncards is created successfully')
                })
            })
        }
    }
    Updateladdercardsdetails() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(3000);
               this.editicon().click();
                 browser.sleep(1000);
                this.updatename().clear();
               browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@name='subName']"), record["Ladderitemname10"]);
                browser.sleep(1000);
                this.updateitems().clear();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@name='count']"), record["Aidsnoofitems8"]);
                browser.sleep(1000);
                this.Cancelbtn().click();
                browser.sleep(1000);
                 this.editicon().click();
                 browser.sleep(1000);
                this.updatename().clear();
               browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@name='subName']"), record["Ladderitemname10"]);
                browser.sleep(1000);
                this.updateitems().clear();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@name='count']"), record["Aidsnoofitems8"]);
                browser.sleep(1000);
                this.Updatebtn().click();
                browser.sleep(1000);
                this.Confirmbtn().click();
                 browser.sleep(1000);
                this.Confirmokbtn().click();
                browser.sleep(3000);
                this.CreatKitbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Laddernoncards is updated successfully')
                })
            })
        }
    }
    Deleteladderdetals() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(1000);
                this.Ladder().click();
                browser.sleep(1000);
                this.deleteicon().click();
                browser.sleep(1000);
                this.Cancelbtn().click();
                browser.sleep(3000);
                this.deleteicon().click();
                browser.sleep(3000);
                this.Confirmbtn().click();
                browser.sleep(5000);
                this.CreatKitbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Laddernoncards is deleted successfully')
                })
            })
        }
    }
}