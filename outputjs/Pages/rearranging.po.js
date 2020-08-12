"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browser_utils_1 = require("../utils/browser.utils");
const dataprovider_1 = require("../TestData/dataprovider");
var path = require('path');
class rearrangingPage {
    createNewTaskBtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()=' CREATE NEW TASK ']"));
    }
    RearrangingLink() {
        return protractor_1.element(protractor_1.by.xpath("//mat-card-title[@class='title-link mat-card-title'][text()='Re-Arranging']"));
    }
    TeluguSubject() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='TELUGU']"));
    }
    SocialSubject() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='SOCIAL']"));
    }
    Tasklink() {
        return protractor_1.element(protractor_1.by.xpath("(//a[@class='task-link'][contains(text(),'Rearranging')])[1]"));
    }
    Activityid() {
        return protractor_1.element(protractor_1.by.xpath("//input[@id='activityid']"));
    }
    selectSubject() {
        return protractor_1.element(protractor_1.by.xpath('//select[@name="subjectNames"]'));
    }
    addSlide() {
        return protractor_1.element(protractor_1.by.xpath('//div[@class="add-slide"]'));
    }
    plusbutton() {
        return protractor_1.element(protractor_1.by.xpath("//button[text()='+']"));
    }
    overallFeedbackCheckbox() {
        return protractor_1.element(protractor_1.by.xpath("//div[@class='task-head']//input[@type='checkbox']"));
    }
    sliderTextBox() {
        return protractor_1.element(protractor_1.by.xpath("//input[@ng-reflect-name='feedbackInfo']"));
    }
    slider() {
        return protractor_1.element(protractor_1.by.xpath("//div[@class='mat-slider-thumb']"));
    }
    Behaviourtext() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()='Behaviour ']"));
    }
    feedbackbox() {
        return protractor_1.element(protractor_1.by.xpath("//input[@formcontrolname='feedbackInfo']"));
    }
    feedbackbox1() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@formcontrolname='feedbackInfo'])[1]"));
    }
    feedbackbox2() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@formcontrolname='feedbackInfo'])[2]"));
    }
    feedbackbox3() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@formcontrolname='feedbackInfo'])[3]"));
    }
    feedbackbox4() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@formcontrolname='feedbackInfo'])[4]"));
    }
    clickOntappingMCQNextBtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Next ']"));
    }
    publishBtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Send To Review')]"));
    }
    succesfulCreationOfTasks() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Home']"));
    }
    Audiobutton() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()='Upload Audio File']"));
    }
    optionvalue1() {
        return protractor_1.element(protractor_1.by.xpath("(//option[text()=' 1'])[1]"));
    }
    optionvalue2() {
        return protractor_1.element(protractor_1.by.xpath("(//option[text()=' 2'])[2]"));
    }
    optionvalue3() {
        return protractor_1.element(protractor_1.by.xpath("(//option[text()=' 3'])[3]"));
    }
    optionvalue4() {
        return protractor_1.element(protractor_1.by.xpath("(//option[text()=' 4'])[4]"));
    }
    optionvalue5() {
        return protractor_1.element(protractor_1.by.xpath("(//option[text()=' 5'])[5]"));
    }
    optionvalue6() {
        return protractor_1.element(protractor_1.by.xpath("(//option[text()=' 6'])[6]"));
    }
    saveMCQ() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Save']"));
    }
    acceptSaveTaskPopUp() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='OK']"));
    }
    okbutton() {
        return protractor_1.element(protractor_1.by.xpath("//button[text()='OK']"));
    }
    typefile1() {
        return protractor_1.element(protractor_1.by.css('input[type="file"]'));
    }
    typefile2() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='file'])[2]"));
    }
    typefile3() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='file'])[3]"));
    }
    typefile4() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='file'])[4]"));
    }
    typefile6() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='file'])[6]"));
    }
    typefile5() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='file'])[5]"));
    }
    typefile7() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='file'])[7]"));
    }
    OKbtn() {
        return protractor_1.element(protractor_1.by.xpath('//button[.="OK"]'));
    }
    Addbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()=' ADD + ']"));
    }
    Textradiobutton() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='mat-radio-label-content'])[1]"));
    }
    Previewheader() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()=' PREVIEW ']"));
    }
    Backbtn() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()='Back']"));
    }
    Cancelbtn() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()='Cancel']"));
    }
    Cancelicon() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='×']"));
    }
    Class1() {
        return protractor_1.element(protractor_1.by.xpath("//mat-list-item[@ng-reflect-router-link='/task/task-list']/div[text()='Class 1 ']"));
    }
    Delete() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()=' DELETE ']"));
    }
    Imagecheckbox5() {
        return protractor_1.element(protractor_1.by.xpath("(//label[@class='mat-checkbox-layout'])[5]"));
    }
    Imagecheckbox6() {
        return protractor_1.element(protractor_1.by.xpath("(//label[@class='mat-checkbox-layout'])[6]"));
    }
    Addtext1() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'input-text')])[1]"));
    }
    Addtext2() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'input-text')])[2]"));
    }
    Addtext3() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'input-text')])[3]"));
    }
    Addtext4() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'input-text')])[4]"));
    }
    Addtext5() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'input-text')])[5]"));
    }
    textsource1() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='ng-star-inserted'][contains(@id,'drag')])[1]"));
    }
    textsource2() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='drop-items']/div)[2]"));
    }
    textsource3() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='drop-items']/div)[3]"));
    }
    textsource4() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='drop-items']/div)[4]"));
    }
    Rearranginglinkupdate() {
        return protractor_1.element(protractor_1.by.xpath("//td[text()=' RE-ARRANGING ']/../td/a"));
    }
    Rearrangingtaskediticon() {
        return protractor_1.element(protractor_1.by.xpath("//td[text()=' RE-ARRANGING ']/../td/span/i[@class='fa fa-edit action-icon-btn']"));
    }
    Rearrangingtaskdeleteicon() {
        return protractor_1.element(protractor_1.by.xpath("//td[text()=' RE-ARRANGING ']/../td/span/i[@class='fa fa-trash action-icon-btn']"));
    }
    Imagesource1() {
        return protractor_1.element(protractor_1.by.xpath("//div[@class='image-box']/div[@class='image-cls ng-star-inserted']"));
    }
    Imagesource2() {
        return protractor_1.element(protractor_1.by.xpath("(//img[contains(@class,'image-style')])[1]"));
    }
    Imagesource3() {
        return protractor_1.element(protractor_1.by.xpath("(//img[@class='image-style'])[3]"));
    }
    Imagesource4() {
        return protractor_1.element(protractor_1.by.xpath("(//img[@class='image-style'])[4]"));
    }
    Imagetarget1() {
        return protractor_1.element(protractor_1.by.xpath("(//div[contains(@draggable,'item.isdraged')][@ng-reflect-ng-style='[object Object]'])[1]"));
    }
    Imagetarget2() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='image-cls'])[2]"));
    }
    Imagetarget3() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='image-cls'])[3]"));
    }
    Imagetarget4() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='image-cls'])[4]"));
    }
    texttarget1() {
        return protractor_1.element(protractor_1.by.xpath("(//div[contains(@class,'text-drop-zone')][@ng-reflect-ng-style='[object Object]'][contains(@id,'target')])[1]"));
    }
    texttarget2() {
        return protractor_1.element(protractor_1.by.xpath("(//div[contains(@draggable,'item.isdraged')][@ng-reflect-ng-style='[object Object]'])[1]"));
    }
    texttarget3() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='text-drop-zone'])[3]"));
    }
    texttarget4() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='text-drop-zone'])[4]"));
    }
    Checkbtn() {
        return protractor_1.element(protractor_1.by.xpath("//button[text()='Check']"));
    }
    ShowSolutionbtn() {
        return protractor_1.element(protractor_1.by.xpath("//button[text()='Show Solution']"));
    }
    UpdateRearrangingtask() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/RearrangingData/TeluguData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.ignoreSynchronization = true;
                browser_utils_1.BrowserUtils.waitUntilReady(this.createNewTaskBtn());
                protractor_1.browser.sleep(1000);
                this.SocialSubject().click();
                protractor_1.browser.sleep(2000);
                this.Tasklink().click();
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[text()='Save']"));
                protractor_1.browser.sleep(1000);
                this.clickOntappingMCQNextBtn().click();
                protractor_1.browser.sleep(1000);
                this.okbutton().click();
                protractor_1.browser.sleep(1500);
                //this.PreviewpagerearrangingText();
                // this.clickOntappingMCQNextBtn().click();
                // browser.sleep(1500);
                this.Publishnavigation();
            });
        }
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'REarranging Task is updated successfully');
        });
    }
    DeleteRearrangingtask() {
        protractor_1.browser.ignoreSynchronization = true;
        browser_utils_1.BrowserUtils.getTotalElementCount(protractor_1.by.xpath("//a[contains(text(),'Rearranging')]/../../td/span/button/span/i[text()='delete']")).then((getediticonCount) => {
            console.log("loc is:" + getediticonCount);
            for (let editiconCount = 1; editiconCount <= getediticonCount; editiconCount++) {
                var loc = "(//a[contains(text(),'Rearranging')]/../../td/span/button/span/i[text()='delete'])[" + editiconCount + "]";
                console.log(loc);
                var editiconselection = protractor_1.by.xpath(loc);
                browser_utils_1.BrowserUtils.clickOnElement(editiconselection);
                this.acceptSaveTaskPopUp().click();
            }
        });
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Tasks delete is working successfully');
        });
    }
    Deleteoptions() {
        this.Taskupdate();
        this.UploadImages();
        protractor_1.browser.sleep(500);
        this.Addbtn().click();
        protractor_1.browser.sleep(500);
        this.Addbtn().click();
        protractor_1.browser.sleep(1500);
        var finger1 = '../../TestData/ImageFiles/finger1.png';
        var finger1Path = path.resolve(__dirname, finger1);
        this.typefile6().sendKeys(finger1Path);
        protractor_1.browser.sleep(1500);
        this.optionvalue5().click();
        var finger2 = '../../TestData/ImageFiles/finger1.png';
        var finger1Path = path.resolve(__dirname, finger2);
        this.typefile7().sendKeys(finger1Path);
        protractor_1.browser.sleep(500);
        this.optionvalue6().click();
        protractor_1.browser.sleep(500);
        this.Imagecheckbox5().click();
        protractor_1.browser.sleep(1500);
        this.Delete().click();
        protractor_1.browser.sleep(2500);
        this.acceptSaveTaskPopUp().click();
        protractor_1.browser.sleep(1500);
        this.Imagecheckbox5().click();
        protractor_1.browser.sleep(500);
        this.Delete().click();
        protractor_1.browser.sleep(1500);
        this.acceptSaveTaskPopUp().click();
        protractor_1.browser.sleep(1500);
        this.optionvalue1().click();
        this.optionvalue2().click();
        this.optionvalue3().click();
        this.optionvalue4().click();
        protractor_1.browser.sleep(1500);
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[text()='Save']"));
        protractor_1.browser.sleep(500);
        this.saveMCQ().click();
        protractor_1.browser.sleep(2500);
        this.okbutton().click();
        protractor_1.browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(1500);
        this.Publishnavigation();
    }
    Addbtndisability() {
        this.Taskupdate();
        this.UploadImages();
        protractor_1.browser.sleep(500);
        this.Addbtn().click();
        protractor_1.browser.sleep(500);
        this.Addbtn().click();
        protractor_1.browser.sleep(500);
        var one = "D:/RishiValleyAutomation/POM-LMS without excel/LMSProtractorScripts/TestData/ImageFiles/1.webp";
        this.typefile6().sendKeys(one);
        protractor_1.browser.sleep(500);
        this.optionvalue5().click();
        var two = "D:/RishiValleyAutomation/POM-LMS without excel/LMSProtractorScripts/TestData/ImageFiles/2.webp";
        this.typefile7().sendKeys(two);
        protractor_1.browser.sleep(500);
        this.optionvalue6().click();
        protractor_1.browser.sleep(500);
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[text()='Save']"));
        protractor_1.browser.sleep(500);
        this.saveMCQ().click();
        protractor_1.browser.sleep(500);
        this.acceptSaveTaskPopUp().click();
        protractor_1.browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(500);
        this.Publishnavigation();
    }
    Createcancelbutton() {
        this.Taskupdate();
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[text()='Cancel']"));
        this.Cancelbtn().click();
        protractor_1.browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Create cancel button is working successfully');
        });
    }
    Createcancelicon() {
        this.Taskupdate();
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[text()='×']"));
        this.Cancelicon().click();
        protractor_1.browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Create cancelicon is working successfully');
        });
    }
    Publishcancelicon() {
        this.Taskupdate();
        this.UploadText();
        this.saveMCQ().click();
        protractor_1.browser.sleep(2500);
        this.okbutton().click();
        protractor_1.browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(1500);
        this.Cancelicon().click();
        protractor_1.browser.sleep(1500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Publish cancelicon is working successfully');
        });
    }
    Previewcancelicon() {
        this.Taskupdate();
        this.UploadText();
        this.saveMCQ().click();
        protractor_1.browser.sleep(2500);
        this.okbutton().click();
        protractor_1.browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(1500);
        this.Cancelicon().click();
        protractor_1.browser.sleep(1500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Preview cancelicon is working successfully');
        });
    }
    Previewbackbutton() {
        this.Taskupdate();
        this.UploadText();
        this.saveMCQ().click();
        protractor_1.browser.sleep(2500);
        this.okbutton().click();
        protractor_1.browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(1500);
        this.Backbtn().click();
        protractor_1.browser.sleep(1500);
        this.Cancelicon().click();
        protractor_1.browser.sleep(1500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Preview cancelicon is working successfully');
        });
    }
    Publishbackbutton() {
        this.Taskupdate();
        this.UploadText();
        this.saveMCQ().click();
        protractor_1.browser.sleep(1500);
        this.okbutton().click();
        protractor_1.browser.sleep(2500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        browser_utils_1.BrowserUtils.waitUntilReady(this.publishBtn());
        protractor_1.browser.sleep(1500);
        this.Backbtn().click();
        protractor_1.browser.sleep(500);
        this.Backbtn().click();
        protractor_1.browser.sleep(500);
        this.Cancelbtn().click();
        protractor_1.browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Publish backbutton is working successfully');
        });
    }
    EditRearrangingtask() {
        browser_utils_1.BrowserUtils.getTotalElementCount(protractor_1.by.xpath("//td[text()=' SORTING ']/../td/span/i[@class='fa fa-edit action-icon-btn']")).then((getediticonCount) => {
            console.log("loc is:" + getediticonCount);
            for (let editiconCount = 1; editiconCount <= getediticonCount; editiconCount++) {
                var loc = "(//td[text()=' SORTING ']/../td/span/i[@class='fa fa-edit action-icon-btn'])[" + editiconCount + "]";
                console.log(loc);
                var editiconselection = protractor_1.by.xpath(loc);
                browser_utils_1.BrowserUtils.clickOnElement(editiconselection);
                protractor_1.browser.sleep(2000);
                var path1 = '../../TestData/AudioFiles/sample.mp3';
                var audioPath = path.resolve(__dirname, path1);
                protractor_1.browser.sleep(500);
                this.typefile1().sendKeys(audioPath);
                protractor_1.browser.sleep(500);
                this.OKbtn().click();
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[text()='Save']"));
                protractor_1.browser.sleep(500);
                this.saveMCQ().click();
                protractor_1.browser.sleep(500);
                this.acceptSaveTaskPopUp().click();
                protractor_1.browser.sleep(500);
                this.clickOntappingMCQNextBtn().click();
                protractor_1.browser.sleep(500);
                this.Publishnavigation();
            }
        });
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Task edit is working successfully');
        });
    }
    ClickonRandomArray() {
        var myArray = ['Rearranging1a', 'Rearranging1.1a', 'Rearranging1.2a', 'Rearranging1.3a', 'Rearranging1.4a', 'Rearranging1.5a', 'Rearranging1.6a', 'Rearranging2.0a', 'Rearranging2.1s', 'Rearranging2.s2', 'Rearranging2.s3', 'Rearranging2.4s', 'Rearranging2f.5', 'Rearranging2.6g', 'Rearranging3.0g', 'Rearranging3.1g', 'Rearranging3.2g', 'Rearranging3.g3', 'Rearranging3.4g', 'Rearranging3.g5', 'Rearranging3.6g', 'Rearranging4.1g', 'Rearranging4.1g', 'Rearranging4.2g', 'Rearranging4.3g', 'Rearranging4.4g', 'Rearranging4.g5', 'Rearranging4.g6', 'Rearranging5.g0', 'Rearranging5.g1', 'Rearranging5.g2', 'Rearranging5.d3', 'Rearranging5.4d', 'Rearranging5.d5', 'Rearranging5.d6', 'Rearranging6.d0', 'Rearranging6.d1', 'Rearranging6.d2', 'Rearranging6.w3', 'Rearranging6.4w', 'Rearranging6.5w', 'Rearranging6.6w', 'Rearranging1.0w', 'Rearranging1.1e1', 'Rearranging1.2e1', 'Rearranging1.3e1', 'Rearranging1.e41', 'Rearranging1.51e', 'Rearranging1.61e', 'Rearranging2.0e1', 'Rearranging2.1e1', 'Rearranging2.2e1', 'Rearranging2.3e1', 'Rearranging2.4e1', 'Rearranging2.5e1', 'Rearranging2.6e1', 'Rearranging3.0e1', 'Rearranging3.1e1', 'Rearranging3.2e1', 'Rearranging3.31r', 'Rearranging3.41r', 'Rearranging3.5r1', 'Rearranging3.r61', 'Rearranging4r.11', 'Rearranging4.1t2', 'Rearranging4.2t1', 'Rearranging4.t31', 'Rearranging4.t41', 'Rearranging4.5t1', 'Rearranging4.t61', 'Rearranging5.0t1', 'Rearranging5.1t1', 'Rearranging5.2t1', 'Rearranging5.3t1', 'Rearranging5.4t1', 'Rearranging5.51t', 'Rearranging5.6u1', 'Rearranging6.u01', 'Rearranging6.11u', 'Rearranging6.2u1', 'Rearranging6.31u', 'Rearranging6.u41', 'Rearranging6.5u1', 'Rearranging6.u61', 'Rearranging1.21u2', 'Rearranging1.12', 'Rearranging1.22', 'Rearranging1.32i', 'Rearranging1.i42', 'Rearranging1.5i2', 'Rearranging1.6i2', 'Rearranging2.0o2', 'Rearranging2.12o', 'Rearranging2.22o', 'Rearranging2.32o', 'Rearranging2.4o2', 'Rearranging2.52o', 'Rearranging2.6o2', 'Rearranging3.l02', 'Rearranging3.1l2', 'Rearranging3.2l2', 'Rearranging3.3l2', 'Rearranging3.4l2', 'Rearranging3.5l2', 'Rearranging3.6x2', 'Rearranging4.12x', 'Rearranging4.12x3', 'Rearranging4.22c', 'Rearranging4.32c', 'Rearranging4.42c', 'Rearranging4.52c', 'Rearranging4.6c2', 'Rearranging5.0c2', 'Rearranging5.c12', 'Rearranging5.22b', 'Rearranging5.3b2', 'Rearranging5.4n2', 'Rearranging5.52', 'Rearranging5.62', 'Rearranging6.02', 'Rearranging6.12', 'Rearranging6.22', 'Rearranging6.32', 'Rearranging6.42', 'Rearranging6.52', 'Rearranging6.62'];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        return rand;
    }
    PreviewpagerearrangingText() {
        browser_utils_1.BrowserUtils.waitUntilReady(this.Previewheader());
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[text()=' PREVIEW ']"));
        protractor_1.browser.sleep(2000);
        var t1 = protractor_1.element(protractor_1.by.xpath("(//div[@class='ng-star-inserted'][contains(@id,'drag')])[2]"));
        var t2 = protractor_1.element(protractor_1.by.xpath("(//div[contains(@class,'text-drop-zone')][@ng-reflect-ng-style='[object Object]'][contains(@id,'target')])[1]"));
        //BrowserUtils.MoveandDrop(textsource1,texttarget1);
        t1.click();
        protractor_1.browser.sleep(4000);
        protractor_1.browser.actions().mouseDown(t1).perform();
        protractor_1.browser.sleep(2000);
        protractor_1.browser.actions().mouseMove(t2).perform();
        protractor_1.browser.actions().mouseDown(t2).perform();
        //browser.actions().mouseMove(t2).perform();
        protractor_1.browser.actions().mouseUp().perform();
        protractor_1.browser.sleep(2000000);
        protractor_1.browser.sleep(20000000);
        browser_utils_1.BrowserUtils.dragAndDrop(this.textsource2(), this.texttarget1());
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.dragAndDrop(this.textsource3(), this.texttarget3());
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.dragAndDrop(this.textsource4(), this.texttarget4());
        protractor_1.browser.sleep(20000000000);
        this.Checkbtn().click();
        protractor_1.browser.sleep(2000);
        this.ShowSolutionbtn().click();
    }
    PreviewpagerearrangingImage() {
        protractor_1.browser.ignoreSynchronization = true;
        browser_utils_1.BrowserUtils.waitUntilReady(this.Previewheader());
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[text()=' PREVIEW ']"));
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.MoveandDrop(this.Imagesource1(), this.Imagetarget1());
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.MoveandDrop(this.Imagesource2(), this.Imagetarget2());
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.MoveandDrop(this.Imagesource3(), this.Imagetarget3());
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.MoveandDrop(this.Imagesource4(), this.Imagetarget4());
        protractor_1.browser.sleep(200000000);
        this.Checkbtn().click();
        protractor_1.browser.sleep(2000);
        this.ShowSolutionbtn().click();
    }
    createRearrangingTaskwithImages() {
        this.Taskupdate();
        protractor_1.browser.sleep(1500);
        this.UploadImages();
        protractor_1.browser.sleep(1500);
        this.saveMCQ().click();
        protractor_1.browser.sleep(2500);
        this.okbutton().click();
        protractor_1.browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(1500);
        //this.PreviewpagerearrangingImage();
        this.Publishnavigation();
    }
    createRearrangingTaskwithText() {
        this.Taskupdate();
        this.UploadText();
        protractor_1.browser.sleep(1500);
        this.saveMCQ().click();
        protractor_1.browser.sleep(2500);
        this.okbutton().click();
        protractor_1.browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(1500);
        //this.PreviewpagerearrangingText();
        this.Publishnavigation();
    }
    Publishnavigation() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(2000);
                this.clickOntappingMCQNextBtn().click();
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.waitUntilReady(this.publishBtn());
                //BrowserUtils.selectDropdownValue(by.xpath("//select[@class]"), record["ActivityRole"]);
                this.publishBtn().click();
                protractor_1.browser.sleep(1000);
                this.succesfulCreationOfTasks().click();
                protractor_1.browser.sleep(1000);
                this.createNewTaskBtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Tasks is created successfully');
                });
            });
        }
    }
    overallfeedback() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/TrueorfalseData/TeluguData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser_utils_1.BrowserUtils.waitUntilReady(this.overallFeedbackCheckbox());
                this.overallFeedbackCheckbox().click();
                this.plusbutton().click();
                protractor_1.browser.actions().dragAndDrop(this.slider(), { x: 150, y: 0 }).perform();
                this.plusbutton().click();
                protractor_1.browser.actions().dragAndDrop(this.slider(), { x: 200, y: 0 }).perform();
                this.plusbutton().click();
                protractor_1.browser.actions().dragAndDrop(this.slider(), { x: 250, y: 0 }).perform();
                this.plusbutton().click();
                protractor_1.browser.sleep(2000);
                protractor_1.browser.actions().mouseMove(this.saveMCQ()).perform();
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@formcontrolname='feedbackInfo'])[1]"), record["BadScore"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@formcontrolname='feedbackInfo'])[2]"), record["AverageScore"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@formcontrolname='feedbackInfo'])[3]"), record["GoodScore"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@formcontrolname='feedbackInfo'])[4]"), record["VeryGoodScore"]);
            });
        }
    }
    Taskupdate() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/RearrangingData/TeluguData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.ignoreSynchronization = true;
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.waitUntilReady(this.createNewTaskBtn());
                this.createNewTaskBtn().click();
                browser_utils_1.BrowserUtils.waitUntilReady(this.RearrangingLink());
                protractor_1.browser.sleep(1000);
                this.RearrangingLink().click();
                browser_utils_1.BrowserUtils.waitUntilReady(this.selectSubject());
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@name='subjectNames']"), record["TaskSubject"]);
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("(//span[@class='input-text-align'])[2]"), record["AcivityType"]);
                protractor_1.browser.sleep(1000);
                this.Activityid().sendKeys(this.ClickonRandomArray());
                protractor_1.browser.sleep(500);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@ng-reflect-name])[1]"), record["Title"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//textarea[@ng-reflect-name]"), record["Instructions"]);
                protractor_1.browser.sleep(500);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@placeholder='__:__']"), record["Time"]);
                protractor_1.browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/rearranging.wav';
                var audioPath = path.resolve(__dirname, path1);
                protractor_1.browser.sleep(500);
                this.typefile1().sendKeys(audioPath);
                protractor_1.browser.sleep(1500);
                this.OKbtn().click();
                protractor_1.browser.sleep(500);
                this.overallfeedback();
                protractor_1.browser.sleep(500);
            });
        }
    }
    UploadImages() {
        protractor_1.browser.ignoreSynchronization = true;
        var path = require('path');
        protractor_1.browser.sleep(1500);
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[text()=' ADD + ']"));
        var finger1 = '../../TestData/ImageFiles/finger1.png';
        var finger1Path = path.resolve(__dirname, finger1);
        this.typefile2().sendKeys(finger1Path);
        protractor_1.browser.sleep(500);
        this.optionvalue1().click();
        protractor_1.browser.sleep(1500);
        var finger2 = "../../TestData/ImageFiles/finger2.png";
        var finger2Path = path.resolve(__dirname, finger2);
        this.typefile3().sendKeys(finger2Path);
        protractor_1.browser.sleep(500);
        this.optionvalue2().click();
        protractor_1.browser.sleep(1500);
        var finger3 = "../../TestData/ImageFiles/finger3.png";
        var finger3Path = path.resolve(__dirname, finger3);
        this.typefile4().sendKeys(finger3Path);
        protractor_1.browser.sleep(500);
        this.optionvalue3().click();
        protractor_1.browser.sleep(1500);
        var finger4 = "../../TestData/ImageFiles/finger4.png";
        var finger4Path = path.resolve(__dirname, finger4);
        this.typefile5().sendKeys(finger4Path);
        protractor_1.browser.sleep(2000);
        this.optionvalue4().click();
    }
    UploadText() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/RearrangingData/TeluguData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[text()=' ADD + ']"));
                protractor_1.browser.sleep(1000);
                this.Textradiobutton().click();
                protractor_1.browser.sleep(1000);
                this.acceptSaveTaskPopUp().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'input-text')])[1]"), record["Textbox1"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'input-text')])[2]"), record["Textbox2"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'input-text')])[3]"), record["Textbox3"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'input-text')])[4]"), record["Textbox4"]);
                this.optionvalue1().click();
                this.optionvalue2().click();
                this.optionvalue3().click();
                this.optionvalue4().click();
                protractor_1.browser.sleep(500);
            });
        }
    }
}
exports.rearrangingPage = rearrangingPage;
