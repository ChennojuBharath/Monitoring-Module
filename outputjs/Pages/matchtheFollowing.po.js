"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browser_utils_1 = require("../utils/browser.utils");
const dataprovider_1 = require("../TestData/dataprovider");
const coursePage_po_1 = require("../Pages/coursePage.po");
var path = require("path");
let coursePg;
coursePg = new coursePage_po_1.coursePage();
class matchtheFollowingPage {
    createNewTaskBtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()=' CREATE NEW TASK ']"));
    }
    MatchtheFollLink() {
        return protractor_1.element(protractor_1.by.xpath("//mat-card-title[@class='title-link mat-card-title'][text()='Match the following']"));
    }
    selectSubject() {
        return protractor_1.element(protractor_1.by.xpath('//select[@name="subjectNames"]'));
    }
    addSlide() {
        return protractor_1.element(protractor_1.by.xpath("//div[@class='add-slide ng-star-inserted']")); //h3[@class='default-cursor']
    }
    clickOntappingMCQNextBtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Next ']"));
    }
    MatchTheFollowingbreadcrumb() {
        return protractor_1.element(protractor_1.by.xpath("//a[@class='nav-link ng-star-inserted'][text()='  Match The Following']"));
    }
    Previewbreadcrumb() {
        return protractor_1.element(protractor_1.by.xpath("//a[@class='nav-link ng-star-inserted'][text()=' Preview']"));
    }
    plusbutton() {
        return protractor_1.element(protractor_1.by.xpath("//button[text()='+']"));
    }
    overallFeedbackCheckbox() {
        return protractor_1.element(protractor_1.by.xpath("//div[@class='task-head']//input[@type='checkbox']"));
    }
    Norecored() {
        return protractor_1.element(protractor_1.by.xpath("//td[text()=' No record found. ']"));
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
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Home']"));
    }
    okbutton() {
        return protractor_1.element(protractor_1.by.xpath("//button[text()='OK']"));
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
    optiondropdown1() {
        return protractor_1.element(protractor_1.by.xpath("(//select[contains(@class,'ng-pristine ng-valid ')])[1]"));
    }
    optiondropdown2() {
        return protractor_1.element(protractor_1.by.xpath("(//select[contains(@class,'ng-pristine ng-valid ')])[2]"));
    }
    optiondropdown3() {
        return protractor_1.element(protractor_1.by.xpath("(//select[contains(@class,'ng-pristine ng-valid ')])[3]"));
    }
    optiondropdown4() {
        return protractor_1.element(protractor_1.by.xpath("(//select[contains(@class,'ng-pristine ng-valid ')])[4]"));
    }
    //Text to text
    optionvalue1() {
        return protractor_1.element(protractor_1.by.xpath("(//option[text()=' 4'])[1]"));
    }
    optionvalue2() {
        return protractor_1.element(protractor_1.by.xpath("(//option[text()=' 2'])[2]"));
    }
    optionvalue3() {
        return protractor_1.element(protractor_1.by.xpath("(//option[text()=' 1'])[3]"));
    }
    optionvalue4() {
        return protractor_1.element(protractor_1.by.xpath("(//option[text()=' 3'])[4]"));
    }
    //Image to text
    optionValue5() {
        return protractor_1.element(protractor_1.by.xpath("(//option[text()=' 5'])[5]"));
    }
    optionValue1() {
        return protractor_1.element(protractor_1.by.xpath("(//option[text()=' 2'])[1]"));
    }
    optionValue2() {
        return protractor_1.element(protractor_1.by.xpath("(//option[text()=' 4'])[2]"));
    }
    optionValue3() {
        return protractor_1.element(protractor_1.by.xpath("(//option[text()=' 1'])[3]"));
    }
    optionValue4() {
        return protractor_1.element(protractor_1.by.xpath("(//option[text()=' 3'])[4]"));
    }
    checkbox5() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='mat-checkbox-inner-container'])[5]"));
    }
    Deletebtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='DELETE']"));
    }
    saveMCQ() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Save')]"));
    }
    acceptSaveTaskPopUp() {
        return protractor_1.element(protractor_1.by.xpath("//button[text()='OK']"));
    }
    Textbox5() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[5]"));
    }
    Textradiobutton() {
        return protractor_1.element(protractor_1.by.xpath("(//div[text()=' Text '])[1]"));
    }
    Textradiobutton2() {
        return protractor_1.element(protractor_1.by.xpath("(//div[text()=' Text '])[2]"));
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
    Imagesource1() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='ng-star-inserted'])[1]"));
    }
    Imagesource2() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='ng-star-inserted'])[2]"));
    }
    Imagesource3() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='ng-star-inserted'])[3]"));
    }
    Imagesource4() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='ng-star-inserted'])[4]"));
    }
    Imagesource5() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='ng-star-inserted'])[5]"));
    }
    Imagesource6() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='ng-star-inserted'])[6]"));
    }
    Imagesource7() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='ng-star-inserted'])[7]"));
    }
    Imagesource8() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='ng-star-inserted'])[8]"));
    }
    Backbtn() {
        return protractor_1.element(protractor_1.by.xpath("//mat-icon[text()='chevron_left']"));
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
    Taskcancelbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Cancel']"));
    }
    ActivityId() {
        this.Activityid().sendKeys(coursePg.ClickonRandomArray());
    }
    PreviewpagerearrangingImage() {
        browser_utils_1.BrowserUtils.waitUntilReady(this.Previewheader());
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.dragAndDrop(this.Imagesource1(), this.Imagesource5());
        //browser.actions().dragAndDrop(this.Imagesource1(), this.Imagesource5()).mouseUp().perform();
        //BrowserUtils.MatchAndDrop(this.Imagesource1(),this.Imagesource5());
        protractor_1.browser.sleep(2000);
        //BrowserUtils.MatchAndDrop(this.Imagesource2(),this.Imagesource3());
        browser_utils_1.BrowserUtils.dragAndDrop(this.Imagesource2(), this.Imagesource3());
        // browser.actions().dragAndDrop(this.Imagesource2(), this.Imagesource3()).mouseUp().perform();
        protractor_1.browser.sleep(2000);
        this.Checkbtn().click();
        protractor_1.browser.sleep(2000);
        this.ShowSolutionbtn().click();
        protractor_1.browser.sleep(2000);
    }
    createMatchthefollowingImagetoImageTask() {
        this.Taskupdate();
        this.MatchImagetoImage();
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[contains(text(),'Save')]"));
        protractor_1.browser.sleep(1000);
        this.saveMCQ().click();
        protractor_1.browser.sleep(1000);
        this.okbutton().click();
        protractor_1.browser.sleep(1000);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(1500);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'MatchthefollowingImagetoImageTask is created successfully');
        });
    }
    createMatchthefollowingTexttoImageTask() {
        this.Taskupdate();
        this.MatchTexttoImage();
        this.saveMCQ().click();
        protractor_1.browser.sleep(1500);
        this.okbutton().click();
        protractor_1.browser.sleep(2500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(1500);
        this.acceptSaveTaskPopUp().click();
        //this.PreviewpagerearrangingImage();
        protractor_1.browser.sleep(500);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'MatchthefollowingTexttoImageTask is created successfully');
        });
    }
    Contenttypesearch() {
        var contentsearch = protractor_1.element(protractor_1.by.xpath("//input[@type='search']"));
        this.createNewTaskBtn().click();
        protractor_1.browser.sleep(1000);
        contentsearch.sendKeys("Match the foll");
        contentsearch.clear();
        protractor_1.browser.sleep(500);
        this.Class1().click();
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
    CancelTask() {
        this.Taskupdate();
        this.Taskcancelbtn().click();
        protractor_1.browser.sleep(2000);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Task popup is closed successfully');
        });
    }
    Publishcancelicon() {
        this.Taskupdate();
        this.MatchTexttoImage();
        this.saveMCQ().click();
        protractor_1.browser.sleep(500);
        this.okbutton().click();
        protractor_1.browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(500);
        this.Previewbreadcrumb().click();
        protractor_1.browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Publish cancelicon is working successfully');
        });
    }
    Previewcancelicon() {
        this.Taskupdate();
        this.MatchTexttoText();
        this.overallfeedback();
        protractor_1.browser.sleep(500);
        this.saveMCQ().click();
        protractor_1.browser.sleep(500);
        this.okbutton().click();
        protractor_1.browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(500);
        this.MatchTheFollowingbreadcrumb().click();
        protractor_1.browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Preview breadcrumb is working successfully');
        });
    }
    SearchTaskfromlist() {
        var clearsearch = protractor_1.element(protractor_1.by.xpath("//input[@ng-reflect-placeholder='Search']"));
        clearsearch.sendKeys("Match");
        browser_utils_1.BrowserUtils.waitUntilReady(this.Norecored());
        clearsearch.clear();
        protractor_1.browser.sleep(500);
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Task list search is working');
        });
    }
    Previewbackbutton() {
        this.Taskupdate();
        this.MatchTexttoImage();
        this.saveMCQ().click();
        protractor_1.browser.sleep(1500);
        this.okbutton().click();
        protractor_1.browser.sleep(2500);
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
        this.MatchTexttoImage();
        this.saveMCQ().click();
        protractor_1.browser.sleep(1500);
        this.okbutton().click();
        protractor_1.browser.sleep(2500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(1500);
        this.Backbtn().click();
        protractor_1.browser.sleep(1500);
        this.Backbtn().click();
        protractor_1.browser.sleep(500);
        this.Cancelbtn().click();
        protractor_1.browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Publish page backbutton is working successfully');
        });
    }
    Deleteoptions() {
        this.Taskupdate();
        this.MatchImagetoText();
        this.Addbtn().click();
        protractor_1.browser.sleep(500);
        var tiger = "D:/RishiValleyAutomation/POM-LMS without excel/LMSProtractorScripts/TestData/ImageFiles/tiger.png";
        this.typefile2().sendKeys(tiger);
        this.Textbox5().click();
        this.Textbox5().sendKeys("tiger");
        this.optionValue5().click();
        protractor_1.browser.sleep(500);
        this.checkbox5().click();
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[text()='DELETE']"));
        this.Deletebtn().click();
        this.acceptSaveTaskPopUp().click();
        protractor_1.browser.sleep(500);
        this.optionvalue1().click();
        protractor_1.browser.sleep(500);
        this.optionvalue2().click();
        protractor_1.browser.sleep(500);
        this.optionvalue3().click();
        protractor_1.browser.sleep(500);
        this.optionvalue4().click();
        protractor_1.browser.sleep(500);
        this.saveMCQ().click();
        protractor_1.browser.sleep(500);
        this.okbutton().click();
        protractor_1.browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(500);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Options are added for task successfully');
        });
    }
    Addoptions() {
        this.Taskupdate();
        this.MatchImagetoText();
        this.Addbtn().click();
        protractor_1.browser.sleep(500);
        var tiger = "D:/RishiValleyAutomation/POM-LMS without excel/LMSProtractorScripts/TestData/ImageFiles/tiger.png";
        this.typefile2().sendKeys(tiger);
        this.Textbox5().click();
        this.Textbox5().sendKeys("tiger");
        this.optionValue5().click();
        protractor_1.browser.sleep(1500);
        this.saveMCQ().click();
        protractor_1.browser.sleep(2500);
        this.okbutton().click();
        protractor_1.browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(500);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Options are added for task successfully');
        });
    }
    createMatchthefollowingImagetoTextTask() {
        this.Taskupdate();
        this.MatchImagetoText();
        protractor_1.browser.sleep(1500);
        this.saveMCQ().click();
        protractor_1.browser.sleep(1500);
        this.acceptSaveTaskPopUp().click();
        protractor_1.browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(1500);
        this.okbutton().click();
        protractor_1.browser.sleep(1500);
        this.PreviewofImagetoTextTask();
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'MatchthefollowingImagetoTextTask is created successfully');
        });
    }
    PreviewofImagetoTextTask() {
    }
    createMatchthefollowingTexttoTextTask() {
        this.Taskupdate();
        this.MatchTexttoText();
        protractor_1.browser.sleep(500);
        this.saveMCQ().click();
        protractor_1.browser.sleep(500);
        this.okbutton().click();
        protractor_1.browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(500);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'MatchthefollowingTexttoTextTask is created successfully');
        });
    }
    MatchImagetoText() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/MatchthefollData/TeluguData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(500);
                var teacup = "../../TestData/ImageFiles/teacup.jpeg";
                var teacupPath = path.resolve(__dirname, teacup);
                this.typefile2().sendKeys(teacupPath);
                protractor_1.browser.sleep(500);
                var bucket = "../../TestData/ImageFiles/bucket.jpeg";
                var bucketPath = path.resolve(__dirname, bucket);
                this.typefile2().sendKeys(bucketPath);
                protractor_1.browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                protractor_1.browser.sleep(1000);
                var monitor = "../../TestData/ImageFiles/monitor.jpeg";
                var monitorPath = path.resolve(__dirname, monitor);
                this.typefile2().sendKeys(monitorPath);
                protractor_1.browser.sleep(1000);
                this.Textradiobutton2().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[1]"), record["textbox1"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[2]"), record["textbox2"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[3]"), record["textbox3"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[4]"), record["textbox4"]);
                protractor_1.browser.sleep(500);
                this.optionvalue1().click();
                protractor_1.browser.sleep(500);
                this.optionvalue2().click();
                protractor_1.browser.sleep(500);
                this.optionvalue3().click();
                protractor_1.browser.sleep(500);
                this.optionvalue4().click();
                protractor_1.browser.sleep(500);
            });
        }
    }
    ClickonRandomArray() {
        var myArray = ['MatchtheFollowing1a', 'MatchtheFollowing1.1a', 'MatchtheFollowing1.2a', 'MatchtheFollowing1.3a', 'MatchtheFollowing1.4a', 'MatchtheFollowing1.5a', 'MatchtheFollowing1.6a', 'MatchtheFollowing2.0a', 'MatchtheFollowing2.1s', 'MatchtheFollowing2.s2', 'MatchtheFollowing2.s3', 'MatchtheFollowing2.4s', 'MatchtheFollowing2f.5', 'MatchtheFollowing2.6g', 'MatchtheFollowing3.0g', 'MatchtheFollowing3.1g', 'MatchtheFollowing3.2g', 'MatchtheFollowing3.g3', 'MatchtheFollowing3.4g', 'MatchtheFollowing3.g5', 'MatchtheFollowing3.6g', 'MatchtheFollowing4.1g', 'MatchtheFollowing4.1g', 'MatchtheFollowing4.2g', 'MatchtheFollowing4.3g', 'MatchtheFollowing4.4g', 'MatchtheFollowing4.g5', 'MatchtheFollowing4.g6', 'MatchtheFollowing5.g0', 'MatchtheFollowing5.g1', 'MatchtheFollowing5.g2', 'MatchtheFollowing5.d3', 'MatchtheFollowing5.4d', 'MatchtheFollowing5.d5', 'MatchtheFollowing5.d6', 'MatchtheFollowing6.d0', 'MatchtheFollowing6.d1', 'MatchtheFollowing6.d2', 'MatchtheFollowing6.w3', 'MatchtheFollowing6.4w', 'MatchtheFollowing6.5w', 'MatchtheFollowing6.6w', 'MatchtheFollowing1.0w', 'MatchtheFollowing1.1e1', 'MatchtheFollowing1.2e1', 'MatchtheFollowing1.3e1', 'MatchtheFollowing1.e41', 'MatchtheFollowing1.51e', 'MatchtheFollowing1.61e', 'MatchtheFollowing2.0e1', 'MatchtheFollowing2.1e1', 'MatchtheFollowing2.2e1', 'MatchtheFollowing2.3e1', 'MatchtheFollowing2.4e1', 'MatchtheFollowing2.5e1', 'MatchtheFollowing2.6e1', 'MatchtheFollowing3.0e1', 'MatchtheFollowing3.1e1', 'MatchtheFollowing3.2e1', 'MatchtheFollowing3.31r', 'MatchtheFollowing3.41r', 'MatchtheFollowing3.5r1', 'MatchtheFollowing3.r61', 'MatchtheFollowing4r.11', 'MatchtheFollowing4.1t2', 'MatchtheFollowing4.2t1', 'MatchtheFollowing4.t31', 'MatchtheFollowing4.t41', 'MatchtheFollowing4.5t1', 'MatchtheFollowing4.t61', 'MatchtheFollowing5.0t1', 'MatchtheFollowing5.1t1', 'MatchtheFollowing5.2t1', 'MatchtheFollowing5.3t1', 'MatchtheFollowing5.4t1', 'MatchtheFollowing5.51t', 'MatchtheFollowing5.6u1', 'MatchtheFollowing6.u01', 'MatchtheFollowing6.11u', 'MatchtheFollowing6.2u1', 'MatchtheFollowing6.31u', 'MatchtheFollowing6.u41', 'MatchtheFollowing6.5u1', 'MatchtheFollowing6.u61', 'MatchtheFollowing1.21u2', 'MatchtheFollowing1.12', 'MatchtheFollowing1.22', 'MatchtheFollowing1.32i', 'MatchtheFollowing1.i42', 'MatchtheFollowing1.5i2', 'MatchtheFollowing1.6i2', 'MatchtheFollowing2.0o2', 'MatchtheFollowing2.12o', 'MatchtheFollowing2.22o', 'MatchtheFollowing2.32o', 'MatchtheFollowing2.4o2', 'MatchtheFollowing2.52o', 'MatchtheFollowing2.6o2', 'MatchtheFollowing3.l02', 'MatchtheFollowing3.1l2', 'MatchtheFollowing3.2l2', 'MatchtheFollowing3.3l2', 'MatchtheFollowing3.4l2', 'MatchtheFollowing3.5l2', 'MatchtheFollowing3.6x2', 'MatchtheFollowing4.12x', 'MatchtheFollowing4.12x3', 'MatchtheFollowing4.22c', 'MatchtheFollowing4.32c', 'MatchtheFollowing4.42c', 'MatchtheFollowing4.52c', 'MatchtheFollowing4.6c2', 'MatchtheFollowing5.0c2', 'MatchtheFollowing5.c12', 'MatchtheFollowing5.22b', 'MatchtheFollowing5.3b2', 'MatchtheFollowing5.4n2', 'MatchtheFollowing5.52', 'MatchtheFollowing5.62', 'MatchtheFollowing6.02', 'MatchtheFollowing6.12', 'MatchtheFollowing6.22', 'MatchtheFollowing6.32', 'MatchtheFollowing6.42', 'MatchtheFollowing6.52', 'MatchtheFollowing6.62'];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        return rand;
    }
    Taskupdate() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/MatchthefollData/TeluguData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.ignoreSynchronization = true;
                browser_utils_1.BrowserUtils.waitUntilReady(this.createNewTaskBtn());
                this.createNewTaskBtn().click();
                browser_utils_1.BrowserUtils.waitUntilReady(this.MatchtheFollLink());
                protractor_1.browser.sleep(1000);
                this.MatchtheFollLink().click();
                browser_utils_1.BrowserUtils.waitUntilReady(this.selectSubject());
                protractor_1.browser.sleep(2000);
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
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@minutesseconds]"), record["Time"]);
                protractor_1.browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/Matching.wav';
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
    MatchTexttoText() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/MatchthefollData/TeluguData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("(//div[text()=' Text '])[1]"));
                this.Textradiobutton().click();
                protractor_1.browser.sleep(1000);
                this.Textradiobutton2().click();
                protractor_1.browser.sleep(1000);
                this.Addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[1]"), record["Textbox1"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[2]"), record["Textbox2"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[3]"), record["Textbox3"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[4]"), record["Textbox4"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[5]"), record["Textbox5"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[6]"), record["Textbox6"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[7]"), record["Textbox7"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[8]"), record["Textbox8"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[9]"), record["Textbox9"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[10]"), record["Textbox10"]);
            });
        }
        protractor_1.browser.sleep(500);
        this.optionValue5().click();
        protractor_1.browser.sleep(500);
        this.optionvalue1().click();
        protractor_1.browser.sleep(500);
        this.optionvalue2().click();
        protractor_1.browser.sleep(500);
        this.optionvalue3().click();
        protractor_1.browser.sleep(500);
        this.optionvalue4().click();
        protractor_1.browser.sleep(500);
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
    MatchTexttoImage() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/MatchthefollData/TeluguData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(1500);
                this.Addbtn().click();
                protractor_1.browser.sleep(1500);
                this.Textradiobutton().click();
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[1]"), record["Textbox3"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[2]"), record["Textbox2"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[3]"), record["Textbox5"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[4]"), record["textBox4"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@type='text'][contains(@class,'inputClass')])[5]"), record["textBox1"]);
                this.optionValue5().click();
                var Donkey = '../../TestData/ImageFiles/Donkey.png';
                var DonkeyPath = path.resolve(__dirname, Donkey);
                this.typefile2().sendKeys(DonkeyPath);
                protractor_1.browser.sleep(500);
                this.optionValue1().click();
                var pot = "../../TestData/ImageFiles/pot.png";
                var potPath = path.resolve(__dirname, pot);
                this.typefile2().sendKeys(potPath);
                protractor_1.browser.sleep(500);
                this.optionValue2().click();
                var fish = "../../TestData/ImageFiles/fish.png";
                var fishPath = path.resolve(__dirname, fish);
                this.typefile2().sendKeys(fishPath);
                protractor_1.browser.sleep(500);
                this.optionValue3().click();
                var watermelon = "../../TestData/ImageFiles/watermelon.png";
                var watermelonPath = path.resolve(__dirname, watermelon);
                this.typefile2().sendKeys(watermelonPath);
                protractor_1.browser.sleep(2000);
                this.optionValue4().click();
                var solder = "../../TestData/ImageFiles/solder.png";
                var solderPath = path.resolve(__dirname, solder);
                this.typefile2().sendKeys(solderPath);
                protractor_1.browser.sleep(2000);
            });
        }
    }
    MatchImagetoImage() {
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//button[@class='addButton']"));
        protractor_1.browser.sleep(500);
        var finger1 = "../../TestData/ImageFiles/finger1.png";
        var finger1Path = path.resolve(__dirname, finger1);
        this.typefile2().sendKeys(finger1Path);
        protractor_1.browser.sleep(500);
        var finger2 = "../../TestData/ImageFiles/finger2.png";
        var finger2Path = path.resolve(__dirname, finger2);
        this.typefile2().sendKeys(finger2Path);
        protractor_1.browser.sleep(500);
        var finger3 = "../../TestData/ImageFiles/finger3.png";
        var finger3Path = path.resolve(__dirname, finger3);
        this.typefile2().sendKeys(finger3Path);
        protractor_1.browser.sleep(1000);
        var finger4 = "../../TestData/ImageFiles/finger4.png";
        var finger4Path = path.resolve(__dirname, finger4);
        this.typefile2().sendKeys(finger4Path);
        protractor_1.browser.sleep(1500);
        this.Addbtn().click();
        protractor_1.browser.sleep(1500);
        var finger5 = "../../TestData/ImageFiles/finger5.png";
        var finger5Path = path.resolve(__dirname, finger5);
        this.typefile2().sendKeys(finger5Path);
        protractor_1.browser.sleep(1500);
        var Dies5 = "../../TestData/ImageFiles/Dies5.png";
        var Dies5Path = path.resolve(__dirname, Dies5);
        this.typefile2().sendKeys(Dies5Path);
        protractor_1.browser.sleep(500);
        this.optionValue5().click();
        var Dies4 = "../../TestData/ImageFiles/Dies4.png";
        var Dies4Path = path.resolve(__dirname, Dies4);
        this.typefile2().sendKeys(Dies4Path);
        protractor_1.browser.sleep(500);
        this.optionValue1().click();
        var Dies1 = "../../TestData/ImageFiles/Dies1.png";
        var Dies1Path = path.resolve(__dirname, Dies1);
        this.typefile2().sendKeys(Dies1Path);
        protractor_1.browser.sleep(500);
        this.optionValue2().click();
        var Dies3 = "../../TestData/ImageFiles/Dies3.png";
        var Dies3Path = path.resolve(__dirname, Dies3);
        this.typefile2().sendKeys(Dies3Path);
        protractor_1.browser.sleep(500);
        this.optionValue3().click();
        protractor_1.browser.sleep(2000);
        var Dies2 = "../../TestData/ImageFiles/Dies2.png";
        var Dies2Path = path.resolve(__dirname, Dies2);
        this.typefile2().sendKeys(Dies2Path);
        protractor_1.browser.sleep(500);
        this.optionValue4().click();
        protractor_1.browser.sleep(2000);
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
}
exports.matchtheFollowingPage = matchtheFollowingPage;
