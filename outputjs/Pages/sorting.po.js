"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browser_utils_1 = require("../utils/browser.utils");
const dataprovider_1 = require("../TestData/dataprovider");
var path = require('path');
class sortingPage {
    createNewTaskBtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()=' CREATE NEW TASK ']"));
    }
    SortingLink() {
        return protractor_1.element(protractor_1.by.xpath("//mat-card-title[@class='title-link mat-card-title'][text()='Sorting']"));
    }
    Activityid() {
        return protractor_1.element(protractor_1.by.xpath("//input[@id='activityid']"));
    }
    Sortinglinkupdate() {
        return protractor_1.element(protractor_1.by.xpath("(//td[text()=' SORTING ']/../td/a)[1]"));
    }
    Tag() {
        return protractor_1.element(protractor_1.by.xpath("(//span[@class='input-text-align'])[4]"));
    }
    selectSubject() {
        return protractor_1.element(protractor_1.by.xpath('//select[@name="subjectNames"]'));
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
    addSlide() {
        return protractor_1.element(protractor_1.by.xpath('//div[@class="add-slide"]'));
    }
    deletebtn() {
        return protractor_1.element(protractor_1.by.xpath("//button[text()='Delete']"));
    }
    Norecored() {
        return protractor_1.element(protractor_1.by.xpath("//td[text()=' No record found. ']"));
    }
    clickOntappingMCQNextBtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Next ']"));
    }
    publishBtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Send To Review')]"));
    }
    succesfulCreationOfTasks() {
        return protractor_1.element(protractor_1.by.xpath("//button[text()='Home']"));
    }
    Audiobutton() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()='Upload Audio File']"));
    }
    Taskcancelbtn() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()='Cancel']"));
    }
    Backbtn() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()='Back']"));
    }
    Cancelbtn() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()='Cancel']"));
    }
    Canceliconn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='×']"));
    }
    Class1() {
        return protractor_1.element(protractor_1.by.xpath("//mat-list-item[@ng-reflect-router-link='/task/task-list']/div[text()='Class 1 ']"));
    }
    TaskCancelicon() {
        return protractor_1.element(protractor_1.by.xpath("//button[@class='close mat-icon-button']"));
    }
    Activitytype() {
        return protractor_1.element(protractor_1.by.xpath("(//span[@class='input-text-align'])[2]"));
    }
    saveMCQ() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Save')]"));
    }
    acceptSaveTaskPopUp() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='OK']"));
    }
    textbox1() {
        return protractor_1.element(protractor_1.by.css("(//input[@type='text'][contains(@class,'text-name')])[1]"));
    }
    textbox2() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'text-name')])[2]"));
    }
    textbox3() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'text-name')])[3]"));
    }
    textbox4() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'text-name')])[4]"));
    }
    textbox5() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'text-name')])[5]"));
    }
    textbox6() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'text-name')])[6]"));
    }
    textbox7() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'text-name')])[7]"));
    }
    textbox8() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'text-name')])[8]"));
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
    typefile5() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='file'])[5]"));
    }
    typefile6() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='file'])[6]"));
    }
    typefile7() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='file'])[7]"));
    }
    typefile8() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='file'])[8]"));
    }
    typefile9() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='file'])[9]"));
    }
    OKbtn() {
        return protractor_1.element(protractor_1.by.xpath("//button[.='OK']"));
    }
    Addbtn1() {
        return protractor_1.element(protractor_1.by.xpath("(//button[text()='Add +'])[1]"));
    }
    Addbtn2() {
        return protractor_1.element(protractor_1.by.xpath("(//button[text()='Add +'])[2]"));
    }
    Textradiobutton() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()='Text ']"));
    }
    optionvalue1() {
        return protractor_1.element(protractor_1.by.xpath("(//option[text()=' 4'])[1]"));
    }
    optionvalue2() {
        return protractor_1.element(protractor_1.by.xpath("(//option[text()=' 1'])[2]"));
    }
    optionvalue3() {
        return protractor_1.element(protractor_1.by.xpath("(//option[text()=' 3'])[3]"));
    }
    optionvalue4() {
        return protractor_1.element(protractor_1.by.xpath("(//option[text()=' 2'])[4]"));
    }
    AnswerTextcheckbox1() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='fruits']/div/div/input)[1]"));
    }
    AnswerTextcheckbox2() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='fruits']/div/div/input)[2]"));
    }
    AnswerTextcheckbox3() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='fruits']/div/div/input)[3]"));
    }
    AnswerTextcheckbox4() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='fruits']/div/div/input)[4]"));
    }
    AnswerTextcheckbox5() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='fruits']/div/div/input)[5]"));
    }
    AnswerTextcheckbox6() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='fruits']/div/div/input)[6]"));
    }
    AnswerTextcheckbox7() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='fruits']/div/div/input)[7]"));
    }
    AnswerTextcheckbox8() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='fruits']/div/div/input)[8]"));
    }
    AnswerTextcheckbox9() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='fruits']/div/div/input)[9]"));
    }
    Basketname1() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='text'][@placeholder='Basket Name'])[1]"));
    }
    Basketname2() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='text'][@placeholder='Basket Name'])[2]"));
    }
    BasketCheckbox1() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@class='checkbox'])[1]"));
    }
    BasketCheckbox2() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@class='checkbox'])[2]"));
    }
    Answercheckbox1() {
        return protractor_1.element(protractor_1.by.xpath("(//input[contains(@class,'checkbox')])[1]"));
    }
    Answercheckbox2() {
        return protractor_1.element(protractor_1.by.xpath("(//input[contains(@class,'checkbox')])[2]"));
    }
    Answercheckbox3() {
        return protractor_1.element(protractor_1.by.xpath("(//input[contains(@class,'checkbox')])[3]"));
    }
    Answercheckbox4() {
        return protractor_1.element(protractor_1.by.xpath("(//input[contains(@class,'checkbox')])[4]"));
    }
    Answercheckbox5() {
        return protractor_1.element(protractor_1.by.xpath("(//input[contains(@class,'checkbox')])[5]"));
    }
    Answercheckbox6() {
        return protractor_1.element(protractor_1.by.xpath("(//input[contains(@class,'checkbox')])[6]"));
    }
    Answercheckbox7() {
        return protractor_1.element(protractor_1.by.xpath("(//input[contains(@class,'checkbox')])[7]"));
    }
    Answercheckbox8() {
        return protractor_1.element(protractor_1.by.xpath("(//input[contains(@class,'checkbox')])[8]"));
    }
    Answercheckbox9() {
        return protractor_1.element(protractor_1.by.xpath("(//input[contains(@class,'checkbox')])[9]"));
    }
    Answercheckbox10() {
        return protractor_1.element(protractor_1.by.xpath("(//input[contains(@class,'checkbox')])[10]"));
    }
    Answercheckbox11() {
        return protractor_1.element(protractor_1.by.xpath("(//input[contains(@class,'checkbox')])[11]"));
    }
    Previewheader() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()=' PREVIEW ']"));
    }
    textsource1() {
        return protractor_1.element(protractor_1.by.xpath("(//label[contains(@class,'cdk-drag ng-star-inserted')])[1]"));
    }
    textsource2() {
        return protractor_1.element(protractor_1.by.xpath("(//label[contains(@class,'cdk-drag ng-star-inserted')])[2]"));
    }
    textsource3() {
        return protractor_1.element(protractor_1.by.xpath("(//label[contains(@class,'cdk-drag ng-star-inserted')])[3]"));
    }
    textsource4() {
        return protractor_1.element(protractor_1.by.xpath("(//label[contains(@class,'cdk-drag ng-star-inserted')])[4]"));
    }
    textsource5() {
        return protractor_1.element(protractor_1.by.xpath("(//label[contains(@class,'cdk-drag ng-star-inserted')])[5]"));
    }
    textsource6() {
        return protractor_1.element(protractor_1.by.xpath("(//label[contains(@class,'cdk-drag ng-star-inserted')])[6]"));
    }
    textsource7() {
        return protractor_1.element(protractor_1.by.xpath("(//label[contains(@class,'cdk-drag ng-star-inserted')])[7]"));
    }
    texttarget1() {
        return protractor_1.element(protractor_1.by.xpath("(//div[contains(@class,'basket-container cdk-drop-list')]//img[@ng-reflect-ng-style='[object Object]'])[1]"));
    }
    texttarget2() {
        return protractor_1.element(protractor_1.by.xpath("(//div[contains(@class,'basket-container cdk-drop-list')]//img[@ng-reflect-ng-style='[object Object]'])[2]"));
    }
    texttarget3() {
        return protractor_1.element(protractor_1.by.xpath("(//div[contains(@class,'basket-container cdk-drop-list')]//img[@ng-reflect-ng-style='[object Object]'])[3]"));
    }
    imagesource1() {
        return protractor_1.element(protractor_1.by.xpath("(//img[contains(@class,'cdk-drag ng-star-inserted')])[1]"));
    }
    imagesource2() {
        return protractor_1.element(protractor_1.by.xpath("(//img[contains(@class,'cdk-drag ng-star-inserted')])[2]"));
    }
    imagesource3() {
        return protractor_1.element(protractor_1.by.xpath("(//img[contains(@class,'cdk-drag ng-star-inserted')])[3]"));
    }
    imagesource4() {
        return protractor_1.element(protractor_1.by.xpath("(//img[contains(@class,'cdk-drag ng-star-inserted')])[4]"));
    }
    imagesource5() {
        return protractor_1.element(protractor_1.by.xpath("(//img[contains(@class,'cdk-drag ng-star-inserted')])[5]"));
    }
    imagesource6() {
        return protractor_1.element(protractor_1.by.xpath("(//img[contains(@class,'cdk-drag ng-star-inserted')])[6]"));
    }
    imagesource7() {
        return protractor_1.element(protractor_1.by.xpath("(//img[contains(@class,'cdk-drag ng-star-inserted')])[7]"));
    }
    imagetarget1() {
        return protractor_1.element(protractor_1.by.xpath("(//div[contains(@class,'basket-container cdk-drop-list')]//img[@ng-reflect-ng-style='[object Object]'])[1]"));
    }
    imagetarget2() {
        return protractor_1.element(protractor_1.by.xpath("(//div[contains(@class,'basket-container cdk-drop-list')]//img[@ng-reflect-ng-style='[object Object]'])[2]"));
    }
    imagetarget3() {
        return protractor_1.element(protractor_1.by.xpath("(//div[contains(@class,'basket-container cdk-drop-list')]//img[@ng-reflect-ng-style='[object Object]'])[3]"));
    }
    Checkbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Check']"));
    }
    ShowSolutionbtn() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()=' Show Solution ']"));
    }
    Previewpagetext() {
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[text()=' PREVIEW ']"));
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.dragAndDrop(this.textsource1(), this.texttarget1());
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.dragAndDrop(this.textsource2(), this.texttarget1());
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.dragAndDrop(this.textsource3(), this.texttarget1());
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.dragAndDrop(this.textsource4(), this.texttarget2());
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.dragAndDrop(this.textsource5(), this.texttarget2());
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.dragAndDrop(this.textsource6(), this.texttarget2());
        protractor_1.browser.sleep(2000);
        this.Checkbtn().click();
        protractor_1.browser.sleep(2000);
        this.ShowSolutionbtn().click();
    }
    Previewpageclose() {
        this.Taskupdate();
        this.UploadImage();
        protractor_1.browser.sleep(500);
        this.saveMCQ().click();
        protractor_1.browser.sleep(1000);
        this.acceptSaveTaskPopUp().click();
        protractor_1.browser.sleep(1000);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(1500);
    }
    ClickonRandomArray() {
        var myArray = ['Sorting1a', 'Sorting1.1a', 'Sorting1.2a', 'Sorting1.3a', 'Sorting1.4a', 'Sorting1.5a', 'Sorting1.6a', 'Sorting2.0a', 'Sorting2.1s', 'Sorting2.s2', 'Sorting2.s3', 'Sorting2.4s', 'Sorting2f.5', 'Sorting2.6g', 'Sorting3.0g', 'Sorting3.1g', 'Sorting3.2g', 'Sorting3.g3', 'Sorting3.4g', 'Sorting3.g5', 'Sorting3.6g', 'Sorting4.1g', 'Sorting4.1g', 'Sorting4.2g', 'Sorting4.3g', 'Sorting4.4g', 'Sorting4.g5', 'Sorting4.g6', 'Sorting5.g0', 'Sorting5.g1', 'Sorting5.g2', 'Sorting5.d3', 'Sorting5.4d', 'Sorting5.d5', 'Sorting5.d6', 'Sorting6.d0', 'Sorting6.d1', 'Sorting6.d2', 'Sorting6.w3', 'Sorting6.4w', 'Sorting6.5w', 'Sorting6.6w', 'Sorting1.0w', 'Sorting1.1e1', 'Sorting1.2e1', 'Sorting1.3e1', 'Sorting1.e41', 'Sorting1.51e', 'Sorting1.61e', 'Sorting2.0e1', 'Sorting2.1e1', 'Sorting2.2e1', 'Sorting2.3e1', 'Sorting2.4e1', 'Sorting2.5e1', 'Sorting2.6e1', 'Sorting3.0e1', 'Sorting3.1e1', 'Sorting3.2e1', 'Sorting3.31r', 'Sorting3.41r', 'Sorting3.5r1', 'Sorting3.r61', 'Sorting4r.11', 'Sorting4.1t2', 'Sorting4.2t1', 'Sorting4.t31', 'Sorting4.t41', 'Sorting4.5t1', 'Sorting4.t61', 'Sorting5.0t1', 'Sorting5.1t1', 'Sorting5.2t1', 'Sorting5.3t1', 'Sorting5.4t1', 'Sorting5.51t', 'Sorting5.6u1', 'Sorting6.u01', 'Sorting6.11u', 'Sorting6.2u1', 'Sorting6.31u', 'Sorting6.u41', 'Sorting6.5u1', 'Sorting6.u61', 'Sorting1.21u2', 'Sorting1.12', 'Sorting1.22', 'Sorting1.32i', 'Sorting1.i42', 'Sorting1.5i2', 'Sorting1.6i2', 'Sorting2.0o2', 'Sorting2.12o', 'Sorting2.22o', 'Sorting2.32o', 'Sorting2.4o2', 'Sorting2.52o', 'Sorting2.6o2', 'Sorting3.l02', 'Sorting3.1l2', 'Sorting3.2l2', 'Sorting3.3l2', 'Sorting3.4l2', 'Sorting3.5l2', 'Sorting3.6x2', 'Sorting4.12x', 'Sorting4.12x3', 'Sorting4.22c', 'Sorting4.32c', 'Sorting4.42c', 'Sorting4.52c', 'Sorting4.6c2', 'Sorting5.0c2', 'Sorting5.c12', 'Sorting5.22b', 'Sorting5.3b2', 'Sorting5.4n2', 'Sorting5.52', 'Sorting5.62', 'Sorting6.02', 'Sorting6.12', 'Sorting6.22', 'Sorting6.32', 'Sorting6.42', 'Sorting6.52', 'Sorting6.62'
        ];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        return rand;
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
    Previewpageimage() {
        browser_utils_1.BrowserUtils.waitUntilReady(this.Previewheader());
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.dragAndDrop(this.imagesource1(), this.imagetarget1());
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.dragAndDrop(this.imagesource2(), this.imagetarget1());
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.dragAndDrop(this.imagesource3(), this.imagetarget1());
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.dragAndDrop(this.imagesource4(), this.imagetarget2());
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.dragAndDrop(this.imagesource5(), this.imagetarget2());
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.dragAndDrop(this.imagesource6(), this.imagetarget2());
        protractor_1.browser.sleep(2000);
        this.Checkbtn().click();
        protractor_1.browser.sleep(2000);
        this.ShowSolutionbtn().click();
    }
    createImageSortingTask() {
        this.Taskupdate();
        this.UploadImage();
        protractor_1.browser.sleep(500);
        this.saveMCQ().click();
        protractor_1.browser.sleep(3000);
        browser_utils_1.BrowserUtils.waitUntilReady(this.acceptSaveTaskPopUp());
        this.acceptSaveTaskPopUp().click();
        protractor_1.browser.sleep(2000);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(2500);
        this.Previewpageimage();
        protractor_1.browser.sleep(1500);
        this.Publishnavigation();
    }
    Updatesortingbylink() {
        protractor_1.browser.sleep(2000);
        this.Sortinglinkupdate().click();
        protractor_1.browser.sleep(3000);
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[text()='Save']"));
        this.saveMCQ().click();
        browser_utils_1.BrowserUtils.waitUntilReady(this.acceptSaveTaskPopUp());
        protractor_1.browser.sleep(2000);
        this.acceptSaveTaskPopUp().click();
        protractor_1.browser.sleep(2000);
        this.clickOntappingMCQNextBtn().click();
        this.Previewpagetext();
        protractor_1.browser.sleep(1500);
        this.Publishnavigation();
    }
    createTextSortingTask() {
        this.Taskupdate();
        this.UploadText();
        protractor_1.browser.sleep(500);
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[contains(text(),'Save')]"));
        protractor_1.browser.sleep(500);
        this.saveMCQ().click();
        protractor_1.browser.sleep(500);
        browser_utils_1.BrowserUtils.waitUntilReady(this.acceptSaveTaskPopUp());
        protractor_1.browser.sleep(2000);
        this.OKbtn().click();
        protractor_1.browser.sleep(2000);
        this.clickOntappingMCQNextBtn().click();
        this.Previewpagetext();
        protractor_1.browser.sleep(1500);
        this.Publishnavigation();
    }
    Contenttypesearch() {
        var contentsearch = protractor_1.element(protractor_1.by.xpath("//input[@type='search']"));
        this.createNewTaskBtn().click();
        protractor_1.browser.sleep(1000);
        contentsearch.sendKeys("Sorting");
        contentsearch.clear();
        protractor_1.browser.sleep(500);
        this.Class1().click();
    }
    Cancelicon() {
        this.Taskupdate();
        protractor_1.browser.sleep(2000);
        this.TaskCancelicon().click();
        protractor_1.browser.sleep(2000);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Task popup is closed successfully using cancel icon');
        });
    }
    SearchTaskfromlist() {
        //browser.ignoreSynchronization = true
        var clearsearch = protractor_1.element(protractor_1.by.xpath("//input[@class='rv-input']"));
        clearsearch.sendKeys("Sorting");
        browser_utils_1.BrowserUtils.waitUntilReady(this.Norecored());
        clearsearch.clear();
        protractor_1.browser.sleep(500);
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Task list search is working');
        });
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
        this.Canceliconn().click();
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
        protractor_1.browser.sleep(500);
        this.acceptSaveTaskPopUp().click();
        protractor_1.browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(500);
        this.Canceliconn().click();
        protractor_1.browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Publish cancelicon is working successfully');
        });
    }
    Previewcancelicon() {
        this.Taskupdate();
        this.UploadText();
        this.saveMCQ().click();
        protractor_1.browser.sleep(500);
        this.acceptSaveTaskPopUp().click();
        protractor_1.browser.sleep(3500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(1500);
        this.Canceliconn().click();
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
        protractor_1.browser.sleep(500);
        this.acceptSaveTaskPopUp().click();
        protractor_1.browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(500);
        this.Backbtn().click();
        protractor_1.browser.sleep(500);
        this.Canceliconn().click();
        protractor_1.browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Preview cancelicon is working successfully');
        });
    }
    Publishbackbutton() {
        this.Taskupdate();
        this.UploadText();
        this.saveMCQ().click();
        protractor_1.browser.sleep(500);
        this.acceptSaveTaskPopUp().click();
        protractor_1.browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        browser_utils_1.BrowserUtils.waitUntilReady(this.publishBtn());
        protractor_1.browser.sleep(500);
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
    CancelTask() {
        this.Taskupdate();
        this.Taskcancelbtn().click();
        protractor_1.browser.sleep(2000);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Task popup is closed successfully');
        });
    }
    deleteoptions() {
        this.Taskupdate();
        this.UploadImage();
        protractor_1.browser.sleep(1500);
        this.Addbtn1().click();
        protractor_1.browser.sleep(1500);
        this.Addbtn1().click();
        protractor_1.browser.sleep(1500);
        this.Addbtn2().click();
        protractor_1.browser.sleep(1000);
        this.Answercheckbox11().click();
        this.Answercheckbox7().click();
        this.Answercheckbox8().click();
        protractor_1.browser.sleep(1500);
        this.deletebtn().click();
        this.acceptSaveTaskPopUp().click();
        protractor_1.browser.sleep(500);
        this.saveMCQ().click();
        protractor_1.browser.sleep(3000);
        this.acceptSaveTaskPopUp().click();
        protractor_1.browser.sleep(1500);
        this.TaskCancelicon().click();
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'delete is working successfully');
        });
    }
    Taskupdate() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/SortingData/TeluguData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.ignoreSynchronization = true;
                browser_utils_1.BrowserUtils.waitUntilReady(this.createNewTaskBtn());
                this.createNewTaskBtn().click();
                this.SortingLink().click();
                browser_utils_1.BrowserUtils.waitUntilReady(this.selectSubject());
                protractor_1.browser.sleep(1500);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@name='subjectNames']"), record["TaskSubject"]);
                protractor_1.browser.sleep(1000);
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
                var path1 = '../../TestData/AudioFiles/Telugu/sorting.wav';
                var audioPath = path.resolve(__dirname, path1);
                protractor_1.browser.sleep(500);
                this.typefile1().sendKeys(audioPath);
                protractor_1.browser.sleep(500);
                this.OKbtn().click();
                protractor_1.browser.sleep(1500);
                protractor_1.browser.actions().mouseMove(this.overallFeedbackCheckbox()).perform();
                this.overallfeedback();
                protractor_1.browser.sleep(500);
            });
        }
    }
    UploadText() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/SortingData/TeluguData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[text()='DELETE']"));
                protractor_1.browser.sleep(1000);
                this.Textradiobutton().click();
                protractor_1.browser.sleep(1500);
                this.acceptSaveTaskPopUp().click();
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'text-name')])[1]"), record["Textbox1"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'text-name')])[2]"), record["Textbox2"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'text-name')])[3]"), record["Textbox3"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'text-name')])[4]"), record["Textbox4"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'text-name')])[5]"), record["Textbox5"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'text-name')])[6]"), record["Textbox6"]);
                protractor_1.browser.sleep(500);
                var basket = "../../TestData/ImageFiles/basket.png";
                var basketPath = path.resolve(__dirname, basket);
                this.typefile2().sendKeys(basketPath);
                protractor_1.browser.sleep(1500);
                this.typefile2().sendKeys(basketPath);
                protractor_1.browser.sleep(1500);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][@placeholder='Basket Name'])[1]"), record["Basketname1"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][@placeholder='Basket Name'])[2]"), record["Basketname2"]);
                protractor_1.browser.sleep(2000);
                this.BasketCheckbox1().click();
                protractor_1.browser.sleep(200);
                this.AnswerTextcheckbox1().click();
                protractor_1.browser.sleep(200);
                this.AnswerTextcheckbox2().click();
                this.AnswerTextcheckbox3().click();
                protractor_1.browser.sleep(200);
                this.BasketCheckbox2().click();
                protractor_1.browser.sleep(200);
                this.AnswerTextcheckbox4().click();
                this.AnswerTextcheckbox5().click();
                this.AnswerTextcheckbox6().click();
            });
        }
    }
    UploadImage() {
        protractor_1.browser.sleep(1000);
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//button[text()='Delete']"));
        var doveskin = '../../TestData/ImageFiles/doveskin.jpeg';
        var doveskinPath = path.resolve(__dirname, doveskin);
        this.typefile2().sendKeys(doveskinPath);
        protractor_1.browser.sleep(500);
        var Peacockskin = "../../TestData/ImageFiles/peacockskin.jpeg";
        var PeacockskinPath = path.resolve(__dirname, Peacockskin);
        this.typefile3().sendKeys(PeacockskinPath);
        protractor_1.browser.sleep(500);
        var lionskin = "../../TestData/ImageFiles/lionskin.jpg";
        var lionskinPath = path.resolve(__dirname, lionskin);
        this.typefile4().sendKeys(lionskinPath);
        protractor_1.browser.sleep(500);
        var lion = "../../TestData/ImageFiles/lion.png";
        var lionPath = path.resolve(__dirname, lion);
        this.typefile5().sendKeys(lionPath);
        protractor_1.browser.sleep(2000);
        var peacock = "../../TestData/ImageFiles/peacock.png";
        var peacockPath = path.resolve(__dirname, peacock);
        this.typefile6().sendKeys(peacockPath);
        protractor_1.browser.sleep(2000);
        var dove = "../../TestData/ImageFiles/dove.png";
        var dovePath = path.resolve(__dirname, dove);
        this.typefile7().sendKeys(dovePath);
        protractor_1.browser.sleep(2000);
        var basket = "../../TestData/ImageFiles/basket.png";
        var basketPath = path.resolve(__dirname, basket);
        this.typefile8().sendKeys(basketPath);
        protractor_1.browser.sleep(2000);
        this.typefile9().sendKeys(basketPath);
        protractor_1.browser.sleep(2000);
        this.Basketname1().sendKeys("Animalskin");
        protractor_1.browser.sleep(1000);
        this.Basketname2().sendKeys("Animals");
        protractor_1.browser.sleep(2000);
        this.BasketCheckbox1().click();
        protractor_1.browser.sleep(200);
        this.Answercheckbox1().click();
        protractor_1.browser.sleep(200);
        this.Answercheckbox2().click();
        this.Answercheckbox3().click();
        protractor_1.browser.sleep(200);
        this.BasketCheckbox2().click();
        protractor_1.browser.sleep(200);
        this.Answercheckbox4().click();
        this.Answercheckbox5().click();
        this.Answercheckbox6().click();
    }
    Publishnavigation() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[contains(text(),'Save')]"));
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
}
exports.sortingPage = sortingPage;
