import { browser, element, by, ExpectedConditions } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider';
export class othersDetails {

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
    itemname() {
        return element(by.xpath("//input[@formcontrolname='itemName']"));
    }
   
    noofitems() {
        return element(by.xpath("//input[@formcontrolname='noOfItems']"));
    }
     updateitems() {
        return element(by.xpath("//input[@name='count']"));
    }
      updatename() {
        return element(by.xpath("//input[@name='subName']"));
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

    CreateOthersnoncards() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(10000);
                this.Kitcreationlink().click();
                browser.sleep(3000);
                this.noncardstab().click();
                browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[contains(@class,'select-drop')]"), record["Class"]);
                browser.sleep(2000);
                var subjectselection = by.xpath("//span[contains(text(),'" + record["Subject"] + "')]");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(3000);
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
                browser.sleep(3000);
                this.CreatKitbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Othersnoncards is created successfully')
                })
            })
        }
    }
    Updateotherscardsdetails() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(1000);
                 this.editicon().click();
                 browser.sleep(1000);
                this.updatename().clear();
               browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@name='subName']"), record["Othersitemname9"]);
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
                BrowserUtils.enterText(by.xpath("//input[@name='subName']"), record["Othersitemname9"]);
                browser.sleep(1000);
                this.updateitems().clear();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@name='count']"), record["Aidsnoofitems8"]);
                browser.sleep(1000);
                this.Updatebtn().click();
                browser.sleep(1000);
                this.Confirmbtn().click();
                browser.sleep(3000);
                this.Confirmokbtn().click();
                browser.sleep(3000);
                this.CreatKitbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'others noncards is updated successfully')
                })
            })
        }
    }
    Deleteothersdetals() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                 browser.sleep(3000);
                this.deleteicon().click();
                browser.sleep(1000);
                this.Cancelbtn().click();
               browser.sleep(1000);
                this.deleteicon().click();
                browser.sleep(1000);
                this.Confirmbtn().click();
                browser.sleep(3000);
                this.CreatKitbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'othersnoncards is deleted successfully')
                })
            })
        }
    }



}