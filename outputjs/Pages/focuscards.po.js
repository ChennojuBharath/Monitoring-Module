"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browser_utils_1 = require("../utils/browser.utils");
const dataprovider_1 = require("../TestData/dataprovider");
const coursePage_po_1 = require("../Pages/coursePage.po");
var path = require("path");
let coursePg;
coursePg = new coursePage_po_1.coursePage();
class focuscardsPage {
    createNewTaskBtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()=' CREATE NEW TASK ']"));
    }
    FocusCardsLink() {
        return protractor_1.element(protractor_1.by.xpath("//mat-card-title[@class='title-link mat-card-title'][text()='Focus Cards']"));
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
    plusbutton() {
        return protractor_1.element(protractor_1.by.xpath("//button[text()='+']"));
    }
    overallFeedbackCheckbox() {
        return protractor_1.element(protractor_1.by.xpath("//div[@class='task-head']//input[@type='checkbox']"));
    }
    Activityid() {
        return protractor_1.element(protractor_1.by.xpath("//input[@id='activityid']"));
    }
    sliderTextBox() {
        return protractor_1.element(protractor_1.by.xpath("//input[@ng-reflect-name='feedbackInfo']"));
    }
    slider() {
        return protractor_1.element(protractor_1.by.xpath("//div[@class='mat-slider-thumb']"));
    }
    Instructions() {
        return protractor_1.element(protractor_1.by.xpath("//textarea[@ng-reflect-name]"));
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
    publishBtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Send To Review')]"));
    }
    succesfulCreationOfTasks() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='SUBMIT ']"));
    }
    Audiobutton() {
        return protractor_1.element(protractor_1.by.xpath("//div[.='Upload Audio File']"));
    }
    Addbtn() {
        return protractor_1.element(protractor_1.by.xpath("//button[@class='addButton']"));
    }
    Textradio1() {
        return protractor_1.element(protractor_1.by.xpath("(//mat-radio-button[@ng-reflect-value='text']//div[@class='mat-radio-outer-circle'])[1]"));
    }
    Textradio2() {
        return protractor_1.element(protractor_1.by.xpath("(//mat-radio-button[@ng-reflect-value='text']//div[@class='mat-radio-outer-circle'])[1]"));
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
    typefile10() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='file'])[10]"));
    }
    typefile11() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='file'])[11]"));
    }
    Deletebtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='DELETE']"));
    }
    saveMCQ() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Save']"));
    }
    AddQuestion() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Add Question +']"));
    }
    AddBtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='ADD +']"));
    }
    Spinner() {
        return protractor_1.element(protractor_1.by.xpath("//mat-progress-spinner[@role]"));
    }
    acceptSaveTaskPopUp() {
        return protractor_1.element(protractor_1.by.xpath("//button[text()='OK']"));
    }
    Previewheader() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()=' PREVIEW ']"));
    }
    Checkbtn() {
        return protractor_1.element(protractor_1.by.xpath("//button[text()='Check']"));
    }
    ShowSolutionbtn() {
        return protractor_1.element(protractor_1.by.xpath("//button[text()='Show Solution']"));
    }
    Backbtn() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()='Back']"));
    }
    deletecheckbox() {
        return protractor_1.element(protractor_1.by.xpath("(//div[contains(@class,'mat-checkbox-inner-container ')])[5]"));
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
    ActivityId() {
        this.Activityid().sendKeys(coursePg.ClickonRandomArray());
    }
    Taskupdate() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/FocuscardsData/EnglishData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.ignoreSynchronization = true;
                browser_utils_1.BrowserUtils.waitUntilReady(this.createNewTaskBtn());
                this.createNewTaskBtn().click();
                browser_utils_1.BrowserUtils.waitUntilReady(this.FocusCardsLink());
                protractor_1.browser.sleep(1000);
                this.FocusCardsLink().click();
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
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[text()='ADD +']"));
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@placeholder='__:__']"), record["Time"]);
                protractor_1.browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/sample.mp3';
                var audioPath = path.resolve(__dirname, path1);
                protractor_1.browser.sleep(500);
                this.typefile1().sendKeys(audioPath);
                protractor_1.browser.sleep(1500);
                this.OKbtn().click();
                protractor_1.browser.sleep(500);
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
    ClickonRandomArray() {
        var myArray = ['FocusCards1a', 'FocusCards1.1a', 'FocusCards1.2a', 'FocusCards1.3a', 'FocusCards1.4a', 'FocusCards1.5a', 'FocusCards1.6a', 'FocusCards2.0a', 'FocusCards2.1s', 'FocusCards2.s2', 'FocusCards2.s3', 'FocusCards2.4s', 'FocusCards2f.5', 'FocusCards2.6g', 'FocusCards3.0g', 'FocusCards3.1g', 'FocusCards3.2g', 'FocusCards3.g3', 'FocusCards3.4g', 'FocusCards3.g5', 'FocusCards3.6g', 'FocusCards4.1g', 'FocusCards4.1g', 'FocusCards4.2g', 'FocusCards4.3g', 'FocusCards4.4g', 'FocusCards4.g5', 'FocusCards4.g6', 'FocusCards5.g0', 'FocusCards5.g1', 'FocusCards5.g2', 'FocusCards5.d3', 'FocusCards5.4d', 'FocusCards5.d5', 'FocusCards5.d6', 'FocusCards6.d0', 'FocusCards6.d1', 'FocusCards6.d2', 'FocusCards6.w3', 'FocusCards6.4w', 'FocusCards6.5w', 'FocusCards6.6w', 'FocusCards1.0w', 'FocusCards1.1e1', 'FocusCards1.2e1', 'FocusCards1.3e1', 'FocusCards1.e41', 'FocusCards1.51e', 'FocusCards1.61e', 'FocusCards2.0e1', 'FocusCards2.1e1', 'FocusCards2.2e1', 'FocusCards2.3e1', 'FocusCards2.4e1', 'FocusCards2.5e1', 'FocusCards2.6e1', 'FocusCards3.0e1', 'FocusCards3.1e1', 'FocusCards3.2e1', 'FocusCards3.31r', 'FocusCards3.41r', 'FocusCards3.5r1', 'FocusCards3.r61', 'FocusCards4r.11', 'FocusCards4.1t2', 'FocusCards4.2t1', 'FocusCards4.t31', 'FocusCards4.t41', 'FocusCards4.5t1', 'FocusCards4.t61', 'FocusCards5.0t1', 'FocusCards5.1t1', 'FocusCards5.2t1', 'FocusCards5.3t1', 'FocusCards5.4t1', 'FocusCards5.51t', 'FocusCards5.6u1', 'FocusCards6.u01', 'FocusCards6.11u', 'FocusCards6.2u1', 'FocusCards6.31u', 'FocusCards6.u41', 'FocusCards6.5u1', 'FocusCards6.u61', 'FocusCards1.21u2', 'FocusCards1.12', 'FocusCards1.22', 'FocusCards1.32i', 'FocusCards1.i42', 'FocusCards1.5i2', 'FocusCards1.6i2', 'FocusCards2.0o2', 'FocusCards2.12o', 'FocusCards2.22o', 'FocusCards2.32o', 'FocusCards2.4o2', 'FocusCards2.52o', 'FocusCards2.6o2', 'FocusCards3.l02', 'FocusCards3.1l2', 'FocusCards3.2l2', 'FocusCards3.3l2', 'FocusCards3.4l2', 'FocusCards3.5l2', 'FocusCards3.6x2', 'FocusCards4.12x', 'FocusCards4.12x3', 'FocusCards4.22c', 'FocusCards4.32c', 'FocusCards4.42c', 'FocusCards4.52c', 'FocusCards4.6c2', 'FocusCards5.0c2', 'FocusCards5.c12', 'FocusCards5.22b', 'FocusCards5.3b2', 'FocusCards5.4n2', 'FocusCards5.52', 'FocusCards5.62', 'FocusCards6.02', 'FocusCards6.12', 'FocusCards6.22', 'FocusCards6.32', 'FocusCards6.42', 'FocusCards6.52', 'FocusCards6.62'];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        return rand;
    }
    Publishnavigation() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(2000);
                this.clickOntappingMCQNextBtn().click();
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.waitUntilReady(this.publishBtn());
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("(//select[@class])[2]"), record["ActivityRole"]);
                this.publishBtn().click();
                protractor_1.browser.sleep(3000);
                browser_utils_1.BrowserUtils.waitUntilReady(this.succesfulCreationOfTasks());
                this.succesfulCreationOfTasks().click();
                protractor_1.browser.sleep(1000);
                this.createNewTaskBtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Tasks is created successfully');
                });
            });
        }
    }
    createfocuscardsTask() {
        this.Taskupdate();
        this.focuscardsTask();
        this.saveMCQ().click();
        protractor_1.browser.sleep(500);
        browser_utils_1.BrowserUtils.waitUntilReady(this.Spinner());
        protractor_1.browser.sleep(3500);
        this.acceptSaveTaskPopUp().click();
        protractor_1.browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(500);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Focal cards Task is created successfully');
        });
    }
    Addanddeletefocuscards() {
        this.Taskupdate();
        this.focuscardsTask();
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[text()='ADD +']"));
        this.AddBtn().click();
        var Peacockskin = "../../TestData/ImageFiles/peacockskin.jpeg";
        var PeacockskinPath = path.resolve(__dirname, Peacockskin);
        this.typefile6().sendKeys(PeacockskinPath);
        protractor_1.browser.sleep(500);
        var path1 = '../../TestData/AudioFiles/sample.mp3';
        var audioPath = path.resolve(__dirname, path1);
        protractor_1.browser.sleep(500);
        this.typefile6().sendKeys(audioPath);
        protractor_1.browser.sleep(500);
        this.deletecheckbox().click();
        protractor_1.browser.sleep(500);
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[text()='ADD +']"));
        this.Deletebtn().click();
        protractor_1.browser.sleep(500);
        this.acceptSaveTaskPopUp().click();
        protractor_1.browser.sleep(500);
        this.saveMCQ().click();
        protractor_1.browser.sleep(500);
        browser_utils_1.BrowserUtils.waitUntilReady(this.Spinner());
        protractor_1.browser.sleep(3500);
        this.acceptSaveTaskPopUp().click();
        protractor_1.browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(500);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Focal cards is added and deleted successfully');
        });
    }
    createmultiplefocuscards() {
        this.Taskupdate();
        this.multiplefocuscardsTask();
        this.saveMCQ().click();
        protractor_1.browser.sleep(500);
        browser_utils_1.BrowserUtils.waitUntilReady(this.Spinner());
        protractor_1.browser.sleep(3500);
        this.acceptSaveTaskPopUp().click();
        protractor_1.browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(500);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Focal cards Task is created successfully');
        });
    }
    multiplefocuscardsTask() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/FocuscardsData/EnglishData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                this.focuscardsTask();
                protractor_1.browser.sleep(1500);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[text()='Add Question +']"));
                this.AddQuestion().click();
                protractor_1.browser.sleep(500);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("(//span[text()='ADD +'])[2]"));
                var Peacockskin = "../../TestData/ImageFiles/peacockskin.jpeg";
                var PeacockskinPath = path.resolve(__dirname, Peacockskin);
                this.typefile6().sendKeys(PeacockskinPath);
                protractor_1.browser.sleep(500);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@dicimalnumber])[5]"), record["Textbox5"]);
                protractor_1.browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/sample.mp3';
                var audioPath = path.resolve(__dirname, path1);
                protractor_1.browser.sleep(500);
                this.typefile6().sendKeys(audioPath);
                protractor_1.browser.sleep(500);
                var lionskin = "../../TestData/ImageFiles/lionskin.jpg";
                var lionskinPath = path.resolve(__dirname, lionskin);
                this.typefile7().sendKeys(lionskinPath);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@dicimalnumber])[6]"), record["Textbox6"]);
                protractor_1.browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/sample.mp3';
                var audioPath = path.resolve(__dirname, path1);
                protractor_1.browser.sleep(500);
                this.typefile7().sendKeys(audioPath);
                protractor_1.browser.sleep(500);
                var tigerskin = "../../TestData/ImageFiles/tigerskin.jpg";
                var tigerskinPath = path.resolve(__dirname, tigerskin);
                this.typefile8().sendKeys(tigerskinPath);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@dicimalnumber])[7]"), record["Textbox7"]);
                protractor_1.browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/sample.mp3';
                var audioPath = path.resolve(__dirname, path1);
                protractor_1.browser.sleep(500);
                this.typefile8().sendKeys(audioPath);
                protractor_1.browser.sleep(500);
                var doveskin = '../../TestData/ImageFiles/doveskin.jpeg';
                var doveskinPath = path.resolve(__dirname, doveskin);
                this.typefile9().sendKeys(doveskinPath);
                protractor_1.browser.sleep(500);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@dicimalnumber])[8]"), record["Textbox8"]);
                protractor_1.browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/sample.mp3';
                var audioPath = path.resolve(__dirname, path1);
                protractor_1.browser.sleep(500);
                this.typefile9().sendKeys(audioPath);
                protractor_1.browser.sleep(1500);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[text()='Save']"));
            });
        }
    }
    focuscardsTask() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/FocuscardsData/EnglishData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[text()='ADD +']"));
                protractor_1.browser.sleep(500);
                var dove = "../../TestData/ImageFiles/dove.png";
                var dovePath = path.resolve(__dirname, dove);
                this.typefile2().sendKeys(dovePath);
                protractor_1.browser.sleep(500);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@dicimalnumber])[1]"), record["Textbox1"]);
                protractor_1.browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/sample.mp3';
                var audioPath = path.resolve(__dirname, path1);
                protractor_1.browser.sleep(500);
                this.typefile2().sendKeys(audioPath);
                protractor_1.browser.sleep(1500);
                var lion = "../../TestData/ImageFiles/lion.png";
                var lionPath = path.resolve(__dirname, lion);
                this.typefile3().sendKeys(lionPath);
                protractor_1.browser.sleep(500);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@dicimalnumber])[2]"), record["Textbox2"]);
                protractor_1.browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/sample.mp3';
                var audioPath = path.resolve(__dirname, path1);
                protractor_1.browser.sleep(500);
                this.typefile3().sendKeys(audioPath);
                protractor_1.browser.sleep(500);
                var peacock = "../../TestData/ImageFiles/peacock.png";
                var peacockPath = path.resolve(__dirname, peacock);
                this.typefile4().sendKeys(peacockPath);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@dicimalnumber])[3]"), record["Textbox3"]);
                protractor_1.browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/sample.mp3';
                var audioPath = path.resolve(__dirname, path1);
                protractor_1.browser.sleep(500);
                this.typefile4().sendKeys(audioPath);
                protractor_1.browser.sleep(500);
                var tiger = "../../TestData/ImageFiles/tiger.png";
                var tigerPath = path.resolve(__dirname, tiger);
                this.typefile5().sendKeys(tigerPath);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@dicimalnumber])[4]"), record["Textbox4"]);
                protractor_1.browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/sample.mp3';
                var audioPath = path.resolve(__dirname, path1);
                protractor_1.browser.sleep(500);
                this.typefile5().sendKeys(audioPath);
                protractor_1.browser.sleep(500);
            });
        }
    }
}
exports.focuscardsPage = focuscardsPage;
