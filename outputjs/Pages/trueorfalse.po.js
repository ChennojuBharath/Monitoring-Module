"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browser_utils_1 = require("../utils/browser.utils");
const dataprovider_1 = require("../TestData/dataprovider");
var path = require('path');
class trueorfalsePage {
    createNewTaskBtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()=' CREATE NEW TASK ']"));
    }
    TrueorfalseLink() {
        return protractor_1.element(protractor_1.by.xpath("//mat-card-title[@class='title-link mat-card-title'][text()='True or False']"));
    }
    Activityid() {
        return protractor_1.element(protractor_1.by.xpath("//input[@id='activityid']"));
    }
    selectSubject() {
        return protractor_1.element(protractor_1.by.xpath('//select[@name="subjectNames"]'));
    }
    addSlide() {
        return protractor_1.element(protractor_1.by.xpath("//div[@class='add-slide ng-star-inserted']"));
    }
    clickOntappingMCQNextBtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Next ']"));
    }
    okbutton() {
        return protractor_1.element(protractor_1.by.xpath("//button[text()='OK']"));
    }
    Backbtn() {
        return protractor_1.element(protractor_1.by.xpath("//mat-icon[text()='chevron_left']"));
    }
    Cancelbtn() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()='Cancel']"));
    }
    Canceliconn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='×']"));
    }
    TrueOrFalsebreadcrumb() {
        return protractor_1.element(protractor_1.by.xpath("//a[@class='nav-link ng-star-inserted'][text()=' True Or False']"));
    }
    Previewbreadcrumb() {
        return protractor_1.element(protractor_1.by.xpath("//a[@class='nav-link ng-star-inserted'][text()=' Preview']"));
    }
    Taskcancelbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Cancel']"));
    }
    TaskCancelicon() {
        return protractor_1.element(protractor_1.by.xpath("//button[@class='close mat-icon-button']"));
    }
    Class1() {
        return protractor_1.element(protractor_1.by.xpath("//mat-list-item[@ng-reflect-router-link='/task/task-list']//div[text()='Class 1 ']"));
    }
    Norecored() {
        return protractor_1.element(protractor_1.by.xpath("//td[text()=' No record found. ']"));
    }
    plusbutton() {
        return protractor_1.element(protractor_1.by.xpath("//button[text()='+']"));
    }
    publishBtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Send To Review')]"));
    }
    succesfulCreationOfTasks() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Home']"));
    }
    Audiobutton() {
        return protractor_1.element(protractor_1.by.xpath("//div[.='Upload Audio File']"));
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
    OKbtn() {
        return protractor_1.element(protractor_1.by.xpath('//button[.="OK"]'));
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
    saveMCQ() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Save']"));
    }
    acceptSaveTaskPopUp() {
        return protractor_1.element(protractor_1.by.xpath('//button[text()="OK"]'));
    }
    Textradiobtn() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()='Text']"));
    }
    Textradiobtn2() {
        return protractor_1.element(protractor_1.by.xpath("(//div[text()='Text'])[2]"));
    }
    Addquestionbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='ADD Question +']"));
    }
    Pictureandtextradiobtn() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()='Text and Picture']"));
    }
    Pictureandtextradiobtn2() {
        return protractor_1.element(protractor_1.by.xpath("(//div[text()='Text and Picture'])[2]"));
    }
    Pictureandtextradiobtn3() {
        return protractor_1.element(protractor_1.by.xpath("(//div[text()='Text and Picture'])[3]"));
    }
    Question1() {
        return protractor_1.element(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../div/div/input[@type='text'])[1]"));
    }
    Question2() {
        return protractor_1.element(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../div/div/input[@type='text'])[2]"));
    }
    Option1() {
        return protractor_1.element(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[1]"));
    }
    Option2() {
        return protractor_1.element(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[2]"));
    }
    Option3() {
        return protractor_1.element(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[3]"));
    }
    Option4() {
        return protractor_1.element(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[4]"));
    }
    Radio1() {
        return protractor_1.element(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div//label)[1]"));
    }
    Radio2() {
        return protractor_1.element(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div//label)[2]"));
    }
    Radio3() {
        return protractor_1.element(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div//label)[7]"));
    }
    Radio4() {
        return protractor_1.element(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div//label)[8]"));
    }
    Radio5() {
        return protractor_1.element(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div//label)[9]"));
    }
    Radio6() {
        return protractor_1.element(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div//label)[10]"));
    }
    Checkbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Check']"));
    }
    Previewradio() {
        return protractor_1.element(protractor_1.by.xpath("(//label[@class='mat-radio-label'])[2]"));
    }
    ShowSolutionbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Show Solution']"));
    }
    Taskupdate() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/TrueorfalseData/TeluguData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.ignoreSynchronization = true;
                browser_utils_1.BrowserUtils.waitUntilReady(this.createNewTaskBtn());
                this.createNewTaskBtn().click();
                browser_utils_1.BrowserUtils.waitUntilReady(this.TrueorfalseLink());
                protractor_1.browser.sleep(1000);
                this.TrueorfalseLink().click();
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.waitUntilReady(this.selectSubject());
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
                var path1 = '../../TestData/AudioFiles/Telugu/TrueorFalse.mp3';
                var audioPath = path.resolve(__dirname, path1);
                protractor_1.browser.sleep(500);
                this.typefile1().sendKeys(audioPath);
                protractor_1.browser.sleep(500);
                this.OKbtn().click();
                protractor_1.browser.sleep(500);
                protractor_1.browser.actions().mouseMove(this.overallFeedbackCheckbox()).perform();
                this.overallfeedback();
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
    Publishnavigation() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/TrueorfalseData/TeluguData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.waitUntilReady(this.publishBtn());
                //BrowserUtils.selectDropdownValue(by.xpath("//select[@_ngcontent-tfk-c41]"), record["ActivityRole"]);
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
    ClickonRandomArray() {
        var myArray = ['TrueorFalse1a', 'TrueorFalse1.1a', 'TrueorFalse1.2a', 'TrueorFalse1.3a', 'TrueorFalse1.4a', 'TrueorFalse1.5a', 'TrueorFalse1.6a', 'TrueorFalse2.0a', 'TrueorFalse2.1s', 'TrueorFalse2.s2', 'TrueorFalse2.s3', 'TrueorFalse2.4s', 'TrueorFalse2f.5', 'TrueorFalse2.6g', 'TrueorFalse3.0g', 'TrueorFalse3.1g', 'TrueorFalse3.2g', 'TrueorFalse3.g3', 'TrueorFalse3.4g', 'TrueorFalse3.g5', 'TrueorFalse3.6g', 'TrueorFalse4.1g', 'TrueorFalse4.1g', 'TrueorFalse4.2g', 'TrueorFalse4.3g', 'TrueorFalse4.4g', 'TrueorFalse4.g5', 'TrueorFalse4.g6', 'TrueorFalse5.g0', 'TrueorFalse5.g1', 'TrueorFalse5.g2', 'TrueorFalse5.d3', 'TrueorFalse5.4d', 'TrueorFalse5.d5', 'TrueorFalse5.d6', 'TrueorFalse6.d0', 'TrueorFalse6.d1', 'TrueorFalse6.d2', 'TrueorFalse6.w3', 'TrueorFalse6.4w', 'TrueorFalse6.5w', 'TrueorFalse6.6w', 'TrueorFalse1.0w', 'TrueorFalse1.1e1', 'TrueorFalse1.2e1', 'TrueorFalse1.3e1', 'TrueorFalse1.e41', 'TrueorFalse1.51e', 'TrueorFalse1.61e', 'TrueorFalse2.0e1', 'TrueorFalse2.1e1', 'TrueorFalse2.2e1', 'TrueorFalse2.3e1', 'TrueorFalse2.4e1', 'TrueorFalse2.5e1', 'TrueorFalse2.6e1', 'TrueorFalse3.0e1', 'TrueorFalse3.1e1', 'TrueorFalse3.2e1', 'TrueorFalse3.31r', 'TrueorFalse3.41r', 'TrueorFalse3.5r1', 'TrueorFalse3.r61', 'TrueorFalse4r.11', 'TrueorFalse4.1t2', 'TrueorFalse4.2t1', 'TrueorFalse4.t31', 'TrueorFalse4.t41', 'TrueorFalse4.5t1', 'TrueorFalse4.t61', 'TrueorFalse5.0t1', 'TrueorFalse5.1t1', 'TrueorFalse5.2t1', 'TrueorFalse5.3t1', 'TrueorFalse5.4t1', 'TrueorFalse5.51t', 'TrueorFalse5.6u1', 'TrueorFalse6.u01', 'TrueorFalse6.11u', 'TrueorFalse6.2u1', 'TrueorFalse6.31u', 'TrueorFalse6.u41', 'TrueorFalse6.5u1', 'TrueorFalse6.u61', 'TrueorFalse1.21u2', 'TrueorFalse1.12', 'TrueorFalse1.22', 'TrueorFalse1.32i', 'TrueorFalse1.i42', 'TrueorFalse1.5i2', 'TrueorFalse1.6i2', 'TrueorFalse2.0o2', 'TrueorFalse2.12o', 'TrueorFalse2.22o', 'TrueorFalse2.32o', 'TrueorFalse2.4o2', 'TrueorFalse2.52o', 'TrueorFalse2.6o2', 'TrueorFalse3.l02', 'TrueorFalse3.1l2', 'TrueorFalse3.2l2', 'TrueorFalse3.3l2', 'TrueorFalse3.4l2', 'TrueorFalse3.5l2', 'TrueorFalse3.6x2', 'TrueorFalse4.12x', 'TrueorFalse4.12x3', 'TrueorFalse4.22c', 'TrueorFalse4.32c', 'TrueorFalse4.42c', 'TrueorFalse4.52c', 'TrueorFalse4.6c2', 'TrueorFalse5.0c2', 'TrueorFalse5.c12', 'TrueorFalse5.22b', 'TrueorFalse5.3b2', 'TrueorFalse5.4n2', 'TrueorFalse5.52', 'TrueorFalse5.62', 'TrueorFalse6.02', 'TrueorFalse6.12', 'TrueorFalse6.22', 'TrueorFalse6.32', 'TrueorFalse6.42', 'TrueorFalse6.52', 'TrueorFalse6.62'];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        return rand;
    }
    taskwithtext() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/TrueorfalseData/TeluguData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//h2[text()='Question 1']"));
                this.Textradiobtn().click();
                protractor_1.browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/TrueorFalse.mp3';
                var audioPath = path.resolve(__dirname, path1);
                protractor_1.browser.sleep(500);
                this.typefile2().sendKeys(audioPath);
                protractor_1.browser.sleep(1500);
                this.Question1().click();
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../div/div/input[@type='text'])[1]"), record["Question"]);
                this.Option1().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[1]"), record["Option1"]);
                this.Option2().click();
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[2]"), record["Option2"]);
                protractor_1.browser.sleep(1000);
                this.Radio1().click();
            });
        }
    }
    taskwithpictureandtext() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/TrueorfalseData/TeluguData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.ignoreSynchronization = true;
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[text()='Text and Picture']"));
                this.Pictureandtextradiobtn().click();
                protractor_1.browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/TrueorFalse.mp3';
                var audioPath = path.resolve(__dirname, path1);
                protractor_1.browser.sleep(500);
                this.typefile3().sendKeys(audioPath);
                protractor_1.browser.sleep(1500);
                var water = '../../TestData/ImageFiles/water.jpeg';
                var waterPath = path.resolve(__dirname, water);
                this.typefile3().sendKeys(waterPath);
                protractor_1.browser.sleep(500);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../div/div/input[@type='text'])[1]"), record["Question"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[1]"), record["Option1"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[2]"), record["Option2"]);
                protractor_1.browser.sleep(1000);
                this.Radio1().click();
            });
        }
    }
    multiplequestions() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/TrueorfalseData/TeluguData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.ignoreSynchronization = true;
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//h2[text()='Question 1']"));
                this.Textradiobtn().click();
                protractor_1.browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/TrueorFalse.mp3';
                var audioPath = path.resolve(__dirname, path1);
                protractor_1.browser.sleep(500);
                this.typefile2().sendKeys(audioPath);
                protractor_1.browser.sleep(1500);
                this.Question1().click();
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../div/div/input[@type='text'])[1]"), record["Question"]);
                this.Option1().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[1]"), record["Option1"]);
                this.Option2().click();
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[2]"), record["Option2"]);
                protractor_1.browser.sleep(1000);
                this.Radio1().click();
                protractor_1.browser.sleep(1000);
                ///////Question-2///////
                this.Addquestionbtn().click();
                protractor_1.browser.sleep(2000);
                this.Pictureandtextradiobtn2().click();
                protractor_1.browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/TrueorFalse.mp3';
                var audioPath = path.resolve(__dirname, path1);
                protractor_1.browser.sleep(500);
                this.typefile2().sendKeys(audioPath);
                protractor_1.browser.sleep(1500);
                var water = '../../TestData/ImageFiles/water.jpeg';
                var waterPath = path.resolve(__dirname, water);
                this.typefile3().sendKeys(waterPath);
                protractor_1.browser.sleep(500);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../div/div/input[@type='text'])[2]"), record["Question1"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[3]"), record["Option3"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[4]"), record["Option4"]);
                protractor_1.browser.sleep(1000);
                this.Radio3().click();
                ///////Question-3///////
                this.Addquestionbtn().click();
                protractor_1.browser.sleep(2000);
                this.Pictureandtextradiobtn3().click();
                protractor_1.browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/TrueorFalse.mp3';
                var audioPath = path.resolve(__dirname, path1);
                protractor_1.browser.sleep(500);
                this.typefile2().sendKeys(audioPath);
                protractor_1.browser.sleep(1500);
                var water = '../../TestData/ImageFiles/Gandhi.jpeg';
                var waterPath = path.resolve(__dirname, water);
                this.typefile3().sendKeys(waterPath);
                protractor_1.browser.sleep(500);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../div/div/input[@type='text'])[3]"), record["Question2"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[5]"), record["Option5"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//mat-radio-group['Select an option']/../../following-sibling::div//div/input[@type='text'])[6]"), record["Option6"]);
                protractor_1.browser.sleep(1000);
                this.Radio6().click();
            });
        }
    }
    Previewfortrueorfalse() {
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[text()=' PREVIEW ']"));
        protractor_1.browser.sleep(1000);
        this.Previewradio().click();
        protractor_1.browser.sleep(1000);
        this.Checkbtn().click();
        protractor_1.browser.sleep(2000);
        this.ShowSolutionbtn().click();
        protractor_1.browser.sleep(2000);
        this.clickOntappingMCQNextBtn().click();
    }
    createTrueorfalsetaskwithtext() {
        this.Taskupdate();
        protractor_1.browser.sleep(1000);
        this.taskwithtext();
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[text()='Save']"));
        protractor_1.browser.sleep(1500);
        this.saveMCQ().click();
        protractor_1.browser.sleep(1500);
        this.okbutton().click();
        protractor_1.browser.sleep(2500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(1500);
        this.Previewfortrueorfalse();
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'createTrueorfalsetaskwithtext is created successfully');
        });
    }
    taskwithmultiplequestions() {
        this.Taskupdate();
        this.multiplequestions();
        this.saveMCQ().click();
        protractor_1.browser.sleep(500);
        this.okbutton().click();
        protractor_1.browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(500);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'taskwithmultiplequestions is created successfully');
        });
    }
    Previewcancelicon() {
        this.Taskupdate();
        this.taskwithpictureandtext();
        protractor_1.browser.sleep(500);
        this.saveMCQ().click();
        protractor_1.browser.sleep(1500);
        this.okbutton().click();
        protractor_1.browser.sleep(2500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(1500);
        this.TrueOrFalsebreadcrumb().click();
        protractor_1.browser.sleep(1500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Preview cancelicon is working successfully');
        });
    }
    Previewbackbutton() {
        this.Taskupdate();
        this.taskwithpictureandtext();
        protractor_1.browser.sleep(1500);
        this.saveMCQ().click();
        protractor_1.browser.sleep(2500);
        this.okbutton().click();
        protractor_1.browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(500);
        this.Backbtn().click();
        protractor_1.browser.sleep(500);
        this.Taskcancelbtn().click();
        protractor_1.browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Preview cancelicon is working successfully');
        });
    }
    Publishcancelicon() {
        this.Taskupdate();
        this.taskwithpictureandtext();
        protractor_1.browser.sleep(1500);
        this.saveMCQ().click();
        protractor_1.browser.sleep(2500);
        this.okbutton().click();
        protractor_1.browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(500);
        this.Previewbreadcrumb().click();
        protractor_1.browser.sleep(1500);
        this.Taskcancelbtn().click();
        protractor_1.browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Publish breadcrumb is working successfully');
        });
    }
    Publishbackbutton() {
        this.Taskupdate();
        this.taskwithpictureandtext();
        protractor_1.browser.sleep(1500);
        this.saveMCQ().click();
        protractor_1.browser.sleep(2500);
        this.okbutton().click();
        protractor_1.browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        browser_utils_1.BrowserUtils.waitUntilReady(this.publishBtn());
        protractor_1.browser.sleep(500);
        this.Backbtn().click();
        protractor_1.browser.sleep(500);
        this.Backbtn().click();
        protractor_1.browser.sleep(500);
        this.Taskcancelbtn().click();
        protractor_1.browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Publish backbutton is working successfully');
        });
    }
    SearchTaskfromlist() {
        protractor_1.browser.ignoreSynchronization = true;
        var clearsearch = protractor_1.element(protractor_1.by.xpath("//input[@class='search-input']"));
        clearsearch.sendKeys("trueorflase");
        browser_utils_1.BrowserUtils.waitUntilReady(this.Norecored());
        clearsearch.clear();
        protractor_1.browser.sleep(500);
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Task list search is working');
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
    Contenttypesearch() {
        protractor_1.browser.ignoreSynchronization = true;
        var contentsearch = protractor_1.element(protractor_1.by.xpath("//input[@type='search']"));
        this.createNewTaskBtn().click();
        protractor_1.browser.sleep(1000);
        contentsearch.sendKeys("True or False");
        contentsearch.clear();
        protractor_1.browser.sleep(500);
        this.Class1().click();
    }
    createTrueorfalsetaskwithpictureandtext() {
        this.Taskupdate();
        this.taskwithpictureandtext();
        this.saveMCQ().click();
        protractor_1.browser.sleep(500);
        this.okbutton().click();
        protractor_1.browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(500);
        this.Previewfortrueorfalse();
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Trueorfalsetaskwithpictureandtext is created successfully');
        });
    }
}
exports.trueorfalsePage = trueorfalsePage;
