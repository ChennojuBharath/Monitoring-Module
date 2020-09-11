import { browser, element, by, ExpectedConditions } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider'
export class cardDetails {

    Kitcreationlink() {
        return element(by.xpath("//a[@ng-reflect-router-link='/kit']"));
    }
    Kitlink() {
        return element(by.xpath("//div[contains(text(),'Kit Creation')]"));
    }
    courselink() {
        return element(by.xpath("//mat-panel-title[contains(text(),'All Courses')]"));
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
      updatename() {
        return element(by.xpath("(//input[@name='subName'])[1]"));
    }
      updateitems() {
        return element(by.xpath("(//input[@name='count'])[1]"));
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
popupediticon(){
    return element(by.xpath("(//input[@name='subName']/../..//img[@src='assets/images/Union.svg'])[1]"));
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
    Createcards() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                 browser.sleep(10000);
                this.Kitcreationlink().click();
                browser.sleep(5000);
                 BrowserUtils.selectDropdownValue(by.xpath("//select[contains(@class,'select-drop')]"), record["Class"]);
                browser.sleep(5000);
                var subjectselection = by.xpath("//span[contains(text(),'" + record["Subject"] + "')]");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(4000);
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
                    expect(dis).toBe(true, 'Kit with card details is created successfully')
                })
            })
        }

    }
    Updatecardsdetails(){
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(1000);
                this.editicon().click();
                browser.sleep(1000);
                this.popupediticon().click();
                 browser.sleep(1000);
                this.updatename().clear();
                browser.sleep(1000);
                 BrowserUtils.enterText(by.xpath("(//input[@name='subName'])[1]"), record["itemname10"]);
                 browser.sleep(1000);
                 this.updateitems().clear();
                browser.sleep(1000);
                 BrowserUtils.enterText(by.xpath("(//input[@name='count'])[1]"), record["noofitems10"]);  
                 browser.sleep(1000);
                 this.Cancelbtn().click();
                 browser.sleep(2000);
                  this.editicon().click();
                  browser.sleep(2000);
                   this.popupediticon().click();
                 browser.sleep(1000);
                 this.updatename().clear();
                browser.sleep(1000);
                 BrowserUtils.enterText(by.xpath("(//input[@name='subName'])[1]"), record["itemname10"]);
                 browser.sleep(1000);
                 this.updateitems().clear();
                browser.sleep(1000);
                 BrowserUtils.enterText(by.xpath("(//input[@name='count'])[1]"), record["noofitems10"]);  
                 browser.sleep(1000);
                 this.Updatebtn().click();
                 browser.sleep(1000);
                this.Confirmbtn().click();
                 browser.sleep(1500);
                this.Confirmokbtn().click();
                browser.sleep(1500);
                  this.CreatKitbtn().isDisplayed().then(function (dis) {
                expect(dis).toBe(true, 'Kit details for cards is updated successfully')
            })
            })
        } 
    }
Deletekitdetals(){
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
                expect(dis).toBe(true, 'Kit details is deleted successfully')
            })
            })
        } 
}
   
}