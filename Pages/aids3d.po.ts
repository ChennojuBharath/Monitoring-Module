import { browser, element, by, ExpectedConditions } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider';
export class aids3dDetails {

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
    updateitems() {
        return element(by.xpath("//input[@name='count']"));
    }
    updatename() {
        return element(by.xpath("//input[@name='subName']"));
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

    CreateAidsnoncards() {
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
                this.CreatKitbtn().click();
                browser.sleep(3000);
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
    Confirmokbtn() {
        return element(by.xpath("//span[contains(text(),'Ok')]"))
    }
    Update3dcardsdetails() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(3000);
                this.Aids().click();
                browser.sleep(1000);
                this.editicon().click();
                browser.sleep(1000);
                this.updatename().clear();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@name='subName']"), record["Aidsitemname10"]);
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
                BrowserUtils.enterText(by.xpath("//input[@name='subName']"), record["Aidsitemname10"]);
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
                    expect(dis).toBe(true, '3d is updated successfully')
                })
            })
        }
    }
    Delete3ddetals() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(1000);
                this.deleteicon().click();
                browser.sleep(1000);
                this.Cancelbtn().click();
                browser.sleep(1000);
                this.deleteicon().click();
                browser.sleep(1000);
                this.Confirmbtn().click();
                browser.sleep(2000);
                this.CreatKitbtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, '3d details is deleted successfully')
                })
            })
        }
    }
}