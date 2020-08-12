"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browser_utils_1 = require("../utils/browser.utils");
const dataprovider_1 = require("../TestData/dataprovider");
var path = require('path');
class tasksPage {
    tasklistPanelElement() {
        return protractor_1.element(protractor_1.by.xpath("//mat-panel-title[text()=' Tasks ']"));
    }
    createNewTaskBtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()=' CREATE NEW TASK ']"));
    }
    tappingMCQLink() {
        return protractor_1.element(protractor_1.by.xpath("//mat-card-title[@class='title-link mat-card-title'][text()='Multiple Choice Questions']"));
    }
    Clearq() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='text']/..)[6]"));
    }
    OKbtn() {
        return protractor_1.element(protractor_1.by.xpath('//button[.="OK"]'));
    }
    typefile1() {
        return protractor_1.element(protractor_1.by.css('input[type="file"]'));
    }
    typefile() {
        return protractor_1.element(protractor_1.by.xpath("(//input[type='file'])[1]"));
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
    typefile9() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='file'])[9]"));
    }
    typefile8() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='file'])[8]"));
    }
    tappingMCQHeading() {
        return protractor_1.element(protractor_1.by.xpath('//div[text()="Tapping MCQ"]'));
    }
    selectSubject() {
        return protractor_1.element(protractor_1.by.xpath('//select[@name="subjectNames"]'));
    }
    addSlide() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(@class,'add-slide')]"));
    }
    questionBox(sIndex) {
        return protractor_1.element(protractor_1.by.xpath(`(//div[@class='question-container']/div[@class='margins']/input)[${sIndex}]`));
    }
    optionBox(sIndex, oIndex) {
        return protractor_1.element(protractor_1.by.xpath(`(//div[@class='options-container']//div[@class='margins']/input)[${sIndex}]`));
    }
    addOptionBox(sIndex) {
        return protractor_1.element(protractor_1.by.xpath(`(//input[@value='Add option +'])[${sIndex}]`));
    }
    questionBox1() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='question-container']/div[@class='margins']/input)[1]"));
    }
    questionBox2() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='question-container']/div[@class='margins']/input)[2]"));
    }
    questionBox3() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='question-container']/div[@class='margins']/input)[3]"));
    }
    questionBox4() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='question-container']/div[@class='margins']/input)[4]"));
    }
    questionBox5() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='question-container']/div[@class='margins']/input)[5]"));
    }
    optionBox1() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='options-container']//div[@class='margins']/input)[1]"));
    }
    optionBox18() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='options-container']//div[@class='margins']/input)[18]"));
    }
    optionBox2() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='options-container']//div[@class='margins']/input)[2]"));
    }
    optionBox3() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='options-container']//div[@class='margins']/input)[3]"));
    }
    optionBox4() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='options-container']//div[@class='margins']/input)[4]"));
    }
    optionBox5() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='options-container']//div[@class='margins']/input)[5]"));
    }
    optionBox6() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='options-container']//div[@class='margins']/input)[6]"));
    }
    optionBox7() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='options-container']//div[@class='margins']/input)[7]"));
    }
    optionBox8() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='options-container']//div[@class='margins']/input)[8]"));
    }
    optionBox9() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='options-container']//div[@class='margins']/input)[9]"));
    }
    optionBox10() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='options-container']//div[@class='margins']/input)[10]"));
    }
    optionBox11() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='options-container']//div[@class='margins']/input)[11]"));
    }
    optionBox12() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='options-container']//div[@class='margins']/input)[12]"));
    }
    optionBox13() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='options-container']//div[@class='margins']/input)[13]"));
    }
    optionBox14() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='options-container']//div[@class='margins']/input)[14]"));
    }
    optionBox15() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='options-container']//div[@class='margins']/input)[15]"));
    }
    optionBox16() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='options-container']//div[@class='margins']/input)[16]"));
    }
    optionBox17() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='options-container']//div[@class='margins']/input)[17]"));
    }
    addOptionBox1() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@value='Add option +'])[1]"));
    }
    addOptionBox2() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@value='Add option +'])[2]"));
    }
    addOptionBox3() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@value='Add option +'])[3]"));
    }
    addOptionBox4() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@value='Add option +'])[4]"));
    }
    addOptionBox5() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@value='Add option +'])[5]"));
    }
    addOptionBox6() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@value='Add option +'])[6]"));
    }
    saveMCQ() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Save']"));
    }
    acceptSaveTaskPopUp() {
        return protractor_1.element(protractor_1.by.xpath('//button[text()="OK"]'));
    }
    clickOnClassLinks() {
        return protractor_1.by.xpath('//mat-panel-title[text()=" Tasks "]/../../following-sibling::div//mat-list-item');
    }
    clickOnSubjectsLinks() {
        return protractor_1.by.xpath("//div[@class='mat-tab-label-content']");
    }
    Maths() {
        return protractor_1.element(protractor_1.by.xpath("//span[@class='ng-star-inserted'][text()='MATHS']"));
    }
    clickOntappingMCQNextBtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Next ']"));
    }
    okbutton() {
        return protractor_1.element(protractor_1.by.xpath("//button[text()='OK']"));
    }
    publishBtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Send To Review')]"));
    }
    succesfulCreationOfTasks() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Home']"));
    }
    taskCreateValidation(text) {
        return protractor_1.element(protractor_1.by.xpath('//table[@class="mat-table"]//tbody/tr'));
    }
    Activity() {
        return protractor_1.element(protractor_1.by.xpath("//select[@class='subject-cls ng-pristine ng-valid ng-touched']"));
    }
    Activityid() {
        return protractor_1.element(protractor_1.by.xpath("//input[@id='activityid']"));
    }
    Containercount() {
        return protractor_1.element(protractor_1.by.xpath("//div[@class='mcq-container ng-star-inserted']"));
    }
    Uploadfile() {
        return protractor_1.element(protractor_1.by.xpath("//div[@class='file-upload-block']"));
    }
    TaskActivity() {
        return protractor_1.element(protractor_1.by.xpath("//select[contains(@class,'activity-name')]"));
    }
    Activitytype() {
        return protractor_1.element(protractor_1.by.xpath("//option[text()='Author']"));
    }
    checkcorrectAns() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()=' Correct Answer ']"));
    }
    Addoption() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()=' Correct Answer ']"));
    }
    Addoption1() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@value='Add option +'])[1]"));
    }
    Addoption2() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@value='Add option +'])[2]"));
    }
    Addoption3() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@value='Add option +'])[3]"));
    }
    Addoption4() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@value='Add option +'])[4]"));
    }
    overallFeedbackCheckbox() {
        return protractor_1.element(protractor_1.by.xpath("//div[@class='task-head']//input[@type='checkbox']"));
    }
    Audiobutton() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()='Upload Audio File']"));
    }
    plusbutton() {
        return protractor_1.element(protractor_1.by.xpath("//button[text()='+']"));
    }
    sliderTextBox() {
        return protractor_1.element(protractor_1.by.xpath("//input[@ng-reflect-name='feedbackInfo']"));
    }
    slider() {
        return protractor_1.element(protractor_1.by.xpath("//div[@class='mat-slider-thumb']"));
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
    Behaviourtext() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()='Behaviour ']"));
    }
    behaviourCheckBoxShowSolution() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='behaviour-items']//input[contains(@class,'ng-valid')][@type='checkbox'])[1]"));
    }
    behaviourCheckBoxEnableRetry() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='behaviour-items']//input[contains(@class,'ng-valid')][@type='checkbox'])[2]"));
    }
    behaviourCheckBoxAutoCheck() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='behaviour-items']//input[contains(@class,'ng-valid')][@type='checkbox'])[3]"));
    }
    clickCheckbox() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='checkbox'])[4]"));
    }
    CheckCheckbox() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()=' Check ']"));
    }
    checkbtn() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()=' Check ']"));
    }
    showsolutionbtn() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()=' Show Solution ']"));
    }
    ActivityRole() {
        return protractor_1.element(protractor_1.by.xpath("//select[@class='subject-cls activity-name ng-pristine ng-valid ng-touched']"));
    }
    PublishTab() {
        return protractor_1.element(protractor_1.by.xpath("//div[@class='published-btn']"));
    }
    DraftTab() {
        return protractor_1.element(protractor_1.by.xpath("//div[@class='draft-btn']"));
    }
    MCQbreadcrumb() {
        return protractor_1.element(protractor_1.by.xpath("//a[@class='nav-link ng-star-inserted'][text()=' Multiple Choice Questions']"));
    }
    Previewbreadcrumb() {
        return protractor_1.element(protractor_1.by.xpath("//a[@class='nav-link ng-star-inserted'][text()=' Preview']"));
    }
    Class1() {
        return protractor_1.element(protractor_1.by.xpath("//mat-list-item[@ng-reflect-router-link='/task/task-list']//div[text()='Class 1 ']"));
    }
    Taskediticon() {
        return protractor_1.element(protractor_1.by.xpath("//i[@class='fa fa-edit action-icon-btn']"));
    }
    Taskdeleteicon() {
        return protractor_1.element(protractor_1.by.xpath("//i[@class='fa fa-trash action-icon-btn']"));
    }
    Editicon() {
        return protractor_1.element(protractor_1.by.xpath("(//i[@class='fa fa-edit action-icon-btn'])[1]"));
    }
    Deleteicon() {
        return protractor_1.element(protractor_1.by.xpath("(//i[@class='fa fa-trash action-icon-btn'])[1]"));
    }
    Norecored() {
        return protractor_1.element(protractor_1.by.xpath("//td[text()=' No record found. ']"));
    }
    Subject() {
        return protractor_1.element(protractor_1.by.xpath("//div[@class='mat-tab-label-content']"));
    }
    SubjectTab() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='mat-tab-label-content'])[1]"));
    }
    EnglishSubject() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='ENGLISH']"));
    }
    TeluguSubject() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='TELUGU']"));
    }
    Tasklink() {
        return protractor_1.element(protractor_1.by.xpath("(//a[@class='task-link'][contains(text(),'Multiplechoicequestions')])[1]"));
    }
    TaskConformDelete() {
        return protractor_1.element(protractor_1.by.xpath("//button[text()='OK']"));
    }
    TaskCancelicon() {
        return protractor_1.element(protractor_1.by.xpath("//button[@class='close mat-icon-button']"));
    }
    Checkbox1() {
        return protractor_1.element(protractor_1.by.xpath("(//input[contains(@ng-reflect-model,'!')]/../following-sibling::div//input)[1]"));
    }
    Checkbox2() {
        return protractor_1.element(protractor_1.by.xpath("(//input[contains(@ng-reflect-model,'!')]/../following-sibling::div//input)[2]"));
    }
    Checkbox3() {
        return protractor_1.element(protractor_1.by.xpath("(//input[contains(@ng-reflect-model,'!')]/../following-sibling::div//input)[3]"));
    }
    Checkbox4() {
        return protractor_1.element(protractor_1.by.xpath("(//input[contains(@ng-reflect-model,'!')]/../following-sibling::div//input)[4]"));
    }
    Checkbox5() {
        return protractor_1.element(protractor_1.by.xpath("(//input[contains(@ng-reflect-model,'!')]/../following-sibling::div//input)[5]"));
    }
    Deleteoption1() {
        return protractor_1.element(protractor_1.by.xpath("(//span[@class='delete-cls'])[2]"));
    }
    Deleteoption2() {
        return protractor_1.element(protractor_1.by.xpath("(//span[@class='delete-cls'])[6]"));
    }
    Deleteoption3() {
        return protractor_1.element(protractor_1.by.xpath("(//span[@class='delete-cls'])[10]"));
    }
    Deleteoption4() {
        return protractor_1.element(protractor_1.by.xpath("(//span[@class='delete-cls'])[14]"));
    }
    Deletefeedback1() {
        return protractor_1.element(protractor_1.by.xpath("(//span[@class='cancel-added-input'])[3]"));
    }
    Deletefeedback2() {
        return protractor_1.element(protractor_1.by.xpath("(//span[@class='cancel-added-input'])[4]"));
    }
    Taskcancelbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[text()='Cancel']"));
    }
    publishtext() {
        return protractor_1.element(protractor_1.by.xpath("//div[text()=' PUBLISH ']"));
    }
    Backbtn() {
        return protractor_1.element(protractor_1.by.xpath("//mat-icon[text()='chevron_left']"));
    }
    Table() {
        return protractor_1.element(protractor_1.by.xpath("//tbody[@role='rowgroup']"));
    }
    Tasktag() {
        return protractor_1.element(protractor_1.by.xpath("(//span[@class='input-text-align'])[4]"));
    }
    tag() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@class='subject-cls ng-pristine ng-valid ng-touched'])[1]"));
    }
    Tasktime() {
        return protractor_1.element(protractor_1.by.xpath("//input[@placeholder='mm:ss']"));
    }
    checkbox1() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='checkbox'])[4]"));
    }
    checkbox2() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='checkbox'])[9]"));
    }
    checkbox3() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='checkbox'])[15]"));
    }
    checkbox4() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='checkbox'])[17]"));
    }
    checkbox5() {
        return protractor_1.element(protractor_1.by.xpath("(//input[@type='checkbox'])[20]"));
    }
    Picture1() {
        return protractor_1.element(protractor_1.by.xpath("(//div[text()=' Picture '])[4]"));
    }
    Picture2() {
        return protractor_1.element(protractor_1.by.xpath("(//div[text()=' Picture '])[5]"));
    }
    Picture3() {
        return protractor_1.element(protractor_1.by.xpath("(//div[text()=' Picture '])[6]"));
    }
    Picture4() {
        return protractor_1.element(protractor_1.by.xpath("(//div[text()=' Picture '])[7]"));
    }
    Previewnextbtn() {
        return protractor_1.element(protractor_1.by.xpath("//i[text()=' chevron_right ']"));
    }
    Previewradio1() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='mcqOptions']//span[@class='ng-star-inserted'])[4]"));
    }
    Previewradio2() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='mcqOptions']//span[@class='ng-star-inserted'])[5]"));
    }
    Previewradio3() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='mcqOptions']//span[@class='ng-star-inserted'])[2]"));
    }
    Previewradioimage1() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='mcqOptions']/div/input/../img)[4]"));
    }
    Previewradioimage2() {
        return protractor_1.element(protractor_1.by.xpath("(//div[@class='mcqOptions']/div/input/../img)[5]"));
    }
    Preview2() {
        return protractor_1.element(protractor_1.by.xpath("(//div[text()=' Picture '])[5]"));
    }
    Preview3() {
        return protractor_1.element(protractor_1.by.xpath("(//div[text()=' Picture '])[6]"));
    }
    Preview4() {
        return protractor_1.element(protractor_1.by.xpath("(//div[text()=' Picture '])[7]"));
    }
    Preview1() {
        return protractor_1.element(protractor_1.by.xpath("(//div[text()=' Picture '])[4]"));
    }
    PreviewPage() {
        var count1 = protractor_1.by.xpath("//div[@class='mcq-container ng-star-inserted']");
        browser_utils_1.BrowserUtils.getTotalElementCount(count1).then((count) => {
            browser_utils_1.BrowserUtils.waitUntilReady(this.clickOntappingMCQNextBtn());
            this.clickOntappingMCQNextBtn().click();
            for (var i = 0; i < count; i++) {
                browser_utils_1.BrowserUtils.waitUntilReady(this.saveMCQ());
                this.clickCheckbox().click();
                this.CheckCheckbox().click();
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.waitUntilReady(this.clickOntappingMCQNextBtn());
                this.clickOntappingMCQNextBtn().click();
            }
        });
    }
    addoptions() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/TappingMCQTaskData/EnglishData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[text()='Question 1']"));
                let questions = record["Questions"], answers = record["Answers"];
                questions = questions && questions.replace(/\n/g, "").split("&");
                answers = answers && answers.replace(/\n/g, "").split("&");
                if (questions && questions.length) {
                    questions.forEach((val, i) => {
                        const options = (answers && answers[i] && answers[i].split(",")) || [];
                        this.questionBox(i + 1).sendKeys(val);
                        options.forEach((opt, k) => {
                            this.optionBox(i + 1, k + 1).sendKeys(opt);
                            if (k !== (options.length - 1)) {
                                this.addOptionBox(i + 1).click();
                                protractor_1.browser.actions().mouseMove(this.addSlide()).perform();
                            }
                        });
                        protractor_1.browser.sleep(1000);
                    });
                }
            });
            this.Checkbox1().click();
            this.Checkbox2().click();
            this.Checkbox3().click();
        }
    }
    Taskwithmultiplequestions() {
        this.MCQwithtexttotext();
    }
    MCQwithtexttotext() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/TappingMCQTaskData/TeluguData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.ignoreSynchronization = true;
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[text()='Question 1']"));
                protractor_1.browser.sleep(1500);
                var path1 = '../../TestData/AudioFiles/Telugu/MCQ2.wav';
                var audioPath = path.resolve(__dirname, path1);
                protractor_1.browser.sleep(1500);
                this.typefile2().sendKeys(audioPath);
                protractor_1.browser.sleep(1500);
                ;
                this.Addoption1().click();
                this.Addoption1().click();
                this.Addoption1().click();
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[text()='Question 1']"));
                protractor_1.browser.sleep(1500);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//div[@class='question-container']/div[@class='margins']/input)[1]"), record["Question1"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//div[@class='options-container']//div[@class='margins']/input)[1]"), record["Option1"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//div[@class='options-container']//div[@class='margins']/input)[2]"), record["Option2"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//div[@class='options-container']//div[@class='margins']/input)[3]"), record["Option3"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//div[@class='options-container']//div[@class='margins']/input)[4]"), record["Option4"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//div[@class='options-container']//div[@class='margins']/input)[5]"), record["Option5"]);
                protractor_1.browser.sleep(1000);
                this.checkbox1().click();
                protractor_1.browser.sleep(1000);
            });
        }
    }
    MCQTexttoPicture() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/TappingMCQTaskData/TeluguData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.ignoreSynchronization = true;
                this.addSlide().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[text()='Question 2']"));
                protractor_1.browser.sleep(1500);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//div[@class='question-container']/div[@class='margins']/input)[2]"), record["Question2"]);
                protractor_1.browser.sleep(1500);
                var path1 = '../../TestData/AudioFiles/Telugu/MCQ3.wav';
                var audioPath = path.resolve(__dirname, path1);
                protractor_1.browser.sleep(1500);
                this.typefile3().sendKeys(audioPath);
                protractor_1.browser.sleep(1500);
                this.Picture1().click();
                protractor_1.browser.sleep(1500);
                this.OKbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[text()='Question 2']"));
                this.Addoption2().click();
                this.Addoption2().click();
                this.Addoption2().click();
                var beans = "../../TestData/ImageFiles/beans.png";
                var beansPath = path.resolve(__dirname, beans);
                this.typefile4().sendKeys(beansPath);
                protractor_1.browser.sleep(500);
                var carrot = "../../TestData/ImageFiles/carrot.png";
                var carrotPath = path.resolve(__dirname, carrot);
                this.typefile4().sendKeys(carrotPath);
                protractor_1.browser.sleep(500);
                var mirchi = "../../TestData/ImageFiles/mirchi.png";
                var mirchiPath = path.resolve(__dirname, mirchi);
                this.typefile4().sendKeys(mirchiPath);
                protractor_1.browser.sleep(500);
                var watermelon = "../../TestData/ImageFiles/watermelon.png";
                var watermelonPath = path.resolve(__dirname, watermelon);
                this.typefile4().sendKeys(watermelonPath);
                protractor_1.browser.sleep(500);
                var radish = "../../TestData/ImageFiles/radish.png";
                var radishPath = path.resolve(__dirname, radish);
                this.typefile4().sendKeys(radishPath);
                protractor_1.browser.sleep(1500);
                this.checkbox2().click();
            });
        }
    }
    MCQPicturetoPicture() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/TappingMCQTaskData/TeluguData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.ignoreSynchronization = true;
                this.addSlide().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[text()='Question 3']"));
                protractor_1.browser.sleep(1500);
                this.Picture2().click();
                protractor_1.browser.sleep(1500);
                this.OKbtn().click();
                protractor_1.browser.sleep(1500);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//div[@class='question-container']//input[@ng-reflect-model])[3]"), record["Question3"]);
                protractor_1.browser.sleep(1500);
                var path1 = '../../TestData/AudioFiles/Telugu/MCQ3.wav';
                var audioPath = path.resolve(__dirname, path1);
                protractor_1.browser.sleep(1500);
                this.typefile4().sendKeys(audioPath);
                protractor_1.browser.sleep(1500);
                var Dies = "../../TestData/ImageFiles/Dies5.png";
                var DiesPath = path.resolve(__dirname, Dies);
                this.typefile5().sendKeys(DiesPath);
                protractor_1.browser.sleep(500);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[text()='Question 3']"));
                this.Picture3().click();
                protractor_1.browser.sleep(1500);
                this.OKbtn().click();
                protractor_1.browser.sleep(1500);
                this.Addoption3().click();
                this.Addoption3().click();
                this.Addoption3().click();
                var finger1 = "../../TestData/ImageFiles/finger1.png";
                var finger1Path = path.resolve(__dirname, finger1);
                this.typefile5().sendKeys(finger1Path);
                protractor_1.browser.sleep(500);
                var finger2 = "../../TestData/ImageFiles/finger2.png";
                var finger2Path = path.resolve(__dirname, finger2);
                this.typefile5().sendKeys(finger2Path);
                protractor_1.browser.sleep(500);
                var finger3 = "../../TestData/ImageFiles/finger3.png";
                var finger3Path = path.resolve(__dirname, finger3);
                this.typefile5().sendKeys(finger3Path);
                protractor_1.browser.sleep(500);
                var finger4 = "../../TestData/ImageFiles/finger4.png";
                var finger4Path = path.resolve(__dirname, finger4);
                this.typefile5().sendKeys(finger4Path);
                protractor_1.browser.sleep(500);
                var finger5 = "../../TestData/ImageFiles/finger5.png";
                var finger5Path = path.resolve(__dirname, finger5);
                this.typefile5().sendKeys(finger5Path);
                protractor_1.browser.sleep(500);
                this.checkbox3().click();
            });
        }
    }
    MCQPicturetoText() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/TappingMCQTaskData/TeluguData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.ignoreSynchronization = true;
                this.addSlide().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[text()='Question 4']"));
                protractor_1.browser.sleep(1500);
                this.Picture4().click();
                protractor_1.browser.sleep(1500);
                this.OKbtn().click();
                protractor_1.browser.sleep(1500);
                var path1 = '../../TestData/AudioFiles/Telugu/calendar.mp3';
                var audioPath = path.resolve(__dirname, path1);
                protractor_1.browser.sleep(1500);
                this.typefile5().sendKeys(audioPath);
                protractor_1.browser.sleep(1500);
                var Calendar = "../../TestData/ImageFiles/Calendar.jpg";
                var CalendarPath = path.resolve(__dirname, Calendar);
                this.typefile6().sendKeys(CalendarPath);
                protractor_1.browser.sleep(500);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[text()='Question 4']"));
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//div[@class='question-container']//input[@ng-reflect-model])[4]"), record["Question4"]);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("(//input[@value='Add option +'])[4]"));
                protractor_1.browser.sleep(500);
                this.Addoption4().click();
                protractor_1.browser.sleep(500);
                this.Addoption4().click();
                protractor_1.browser.sleep(500);
                this.Addoption4().click();
                protractor_1.browser.sleep(1500);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@ng-reflect-required])[10]"), record["Option6"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@ng-reflect-required])[11]"), record["Option7"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@ng-reflect-required])[12]"), record["Option8"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@ng-reflect-required])[13]"), record["Option9"]);
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("(//input[@ng-reflect-required])[14]"), record["Option10"]);
                protractor_1.browser.sleep(1000);
                this.checkbox4().click();
                protractor_1.browser.sleep(1000);
                this.checkbox5().click();
                protractor_1.browser.sleep(1000);
            });
        }
    }
    createTappingMCQTask() {
        this.Taskupdate();
        this.MCQwithtexttotext();
        this.MCQTexttoPicture();
        this.MCQPicturetoPicture();
        this.MCQPicturetoText();
        protractor_1.browser.sleep(1000);
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[text()='Save']"));
        this.saveMCQ().click();
        protractor_1.browser.sleep(2500);
        this.okbutton().click();
        protractor_1.browser.sleep(1000);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(1000);
        this.Previewpage();
        protractor_1.browser.sleep(1000);
        this.Publishnavigation();
    }
    SearchTaskfromlist() {
        protractor_1.browser.ignoreSynchronization = true;
        var clearsearch = protractor_1.element(protractor_1.by.xpath("//input[@ng-reflect-placeholder='Search']"));
        clearsearch.sendKeys("MCQ");
        browser_utils_1.BrowserUtils.waitUntilReady(this.Norecored());
        clearsearch.clear();
        protractor_1.browser.sleep(500);
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Task list search is working');
        });
    }
    Taskpublishpage() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/TrueorfalseData/EnglishData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.waitUntilReady(this.publishBtn());
                //BrowserUtils.selectDropdownValue(by.xpath("//select[contains(@class,'rv-select ng-pristine')]"), record["ActivityRole"]);
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
    Removeaddedfeedback() {
        this.Taskupdate();
        protractor_1.browser.actions().mouseMove(this.Audiobutton()).perform();
        protractor_1.browser.sleep(1000);
        this.Deletefeedback1().click();
        this.saveMCQ().click();
        this.acceptSaveTaskPopUp().click();
        protractor_1.browser.sleep(1000);
        this.Taskcancelbtn().click();
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Feedback removal is successful');
        });
    }
    UpdateMCQ() {
        protractor_1.browser.ignoreSynchronization = true;
        browser_utils_1.BrowserUtils.waitUntilReady(this.createNewTaskBtn());
        protractor_1.browser.sleep(1000);
        this.TeluguSubject().click();
        protractor_1.browser.sleep(2000);
        this.Tasklink().click();
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("(//div[@class='delete-cls'])[3]"));
        protractor_1.browser.sleep(1000);
        var deleteslide = protractor_1.element(protractor_1.by.xpath("(//div[@class='delete-cls'])[3]"));
        deleteslide.click();
        protractor_1.browser.sleep(1000);
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[text()='Save']"));
        this.okbutton().click();
        protractor_1.browser.sleep(1000);
        this.acceptSaveTaskPopUp().click();
        protractor_1.browser.sleep(500);
        this.Publishnavigation();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'MCQ task can be updated successfully');
        });
    }
    CancelTask() {
        protractor_1.browser.ignoreSynchronization = true;
        browser_utils_1.BrowserUtils.waitUntilReady(this.createNewTaskBtn());
        protractor_1.browser.sleep(1000);
        this.TeluguSubject().click();
        protractor_1.browser.sleep(2000);
        this.Tasklink().click();
        protractor_1.browser.sleep(2000);
        this.Taskcancelbtn().click();
        protractor_1.browser.sleep(2000);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Task popup is closed successfully');
        });
    }
    Multipletaskscreation() {
        for (var i = 0; i <= 3; i++) {
            this.createTappingMCQTask();
        }
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Multiple Tasks are created successfully');
        });
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
    Behaviourfeedback() {
        this.behaviourCheckBoxShowSolution().click();
        this.behaviourCheckBoxAutoCheck().click();
        this.behaviourCheckBoxEnableRetry().click();
    }
    EditPublishTableTask() {
        browser_utils_1.BrowserUtils.waitUntilReady(this.tasklistPanelElement());
        this.tasklistPanelElement().isDisplayed().then(function (dis) {
            expect(dis).toBe(true);
        });
        this.Editicon().click();
        this.Activityid().clear();
        this.Activityid().sendKeys("12");
        protractor_1.browser.sleep(1000);
        this.Tasktime().sendKeys("1010");
        this.saveMCQ().click();
        this.acceptSaveTaskPopUp().click();
        protractor_1.browser.sleep(2000);
        this.Taskcancelbtn().click();
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Task is edited successfully');
        });
    }
    DeletePublishTableTask() {
        this.Deleteicon().click();
        protractor_1.browser.sleep(2000);
        this.TaskConformDelete().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Task published is deleted successfully');
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
    EditDraftTabletask() {
        this.DraftTab().click();
        browser_utils_1.BrowserUtils.waitUntilReady(this.Editicon());
        this.Editicon().click();
        browser_utils_1.BrowserUtils.waitUntilReady(this.selectSubject());
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/TappingMCQData.json', null);
        console.log("dataRecs :", dataRecs);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@name='subjectNames']"), record["Subject"]);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//span[text()=' Activity Type ']/../span/select"), record["AcivityType"]);
                this.Activityid().clear();
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@id='activityid']"), record["Tag"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//div[text()=' Title ']/following-sibling::div/input"), record["Title"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//div[text()=' Description ']/following-sibling::div/input"), record["Description"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//div[text()=' Instructions ']/following-sibling::div/input"), record["Instructions"]);
                let questions = record["Questions"], answers = record["Answers"];
                questions = questions && questions.replace(/\n/g, "").split("&");
                answers = answers && answers.replace(/\n/g, "").split("&");
                if (questions && questions.length) {
                    questions.forEach((val, i) => {
                        const options = (answers && answers[i] && answers[i].split(",")) || [];
                        this.questionBox(i + 1).sendKeys(val);
                        options.forEach((opt, k) => {
                            this.optionBox(i + 1, k + 1).sendKeys(opt);
                            if (k !== (options.length - 1)) {
                                this.addOptionBox(i + 1).click();
                                protractor_1.browser.actions().mouseMove(this.addSlide()).perform();
                            }
                        });
                        if (i !== (questions.length - 1)) {
                            this.addSlide().click();
                        }
                    });
                }
                this.Addoption1().click();
                protractor_1.browser.actions().mouseMove(this.overallFeedbackCheckbox()).perform();
                this.overallfeedback();
                protractor_1.browser.actions().mouseMove(this.Behaviourtext()).perform();
                this.Behaviourfeedback();
                this.saveMCQ().click();
                this.acceptSaveTaskPopUp().click();
                protractor_1.browser.sleep(2000);
                var count1 = protractor_1.by.xpath("//div[@class='mcq-container ng-star-inserted']");
                browser_utils_1.BrowserUtils.getTotalElementCount(count1).then((count) => {
                    browser_utils_1.BrowserUtils.waitUntilReady(this.clickOntappingMCQNextBtn());
                    this.clickOntappingMCQNextBtn().click();
                    for (var i = 0; i < count; i++) {
                        browser_utils_1.BrowserUtils.waitUntilReady(this.saveMCQ());
                        this.clickCheckbox().click();
                        this.CheckCheckbox().click();
                        protractor_1.browser.sleep(2000);
                        browser_utils_1.BrowserUtils.waitUntilReady(this.clickOntappingMCQNextBtn());
                        this.clickOntappingMCQNextBtn().click();
                    }
                });
                browser_utils_1.BrowserUtils.waitUntilReady(this.publishBtn());
                this.saveMCQ().click();
                browser_utils_1.BrowserUtils.waitUntilReady(this.acceptSaveTaskPopUp());
                this.acceptSaveTaskPopUp().click();
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.waitUntilReady(this.publishBtn());
                this.publishBtn().click();
                browser_utils_1.BrowserUtils.waitUntilReady(this.succesfulCreationOfTasks());
                this.succesfulCreationOfTasks().click();
                this.createNewTaskBtn().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Task is not created');
                });
            });
        }
        browser_utils_1.BrowserUtils.waitUntilReady(this.tasklistPanelElement());
        this.tasklistPanelElement().isDisplayed().then(function (dis) {
            expect(dis).toBe(true);
        });
    }
    DeleteDraftTabletask() {
        protractor_1.browser.sleep(2000);
        this.DraftTab().click();
        protractor_1.browser.sleep(2000);
        this.Deleteicon().click();
        protractor_1.browser.sleep(2000);
        this.TaskConformDelete().click();
    }
    addoption() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/TappingMCQTaskData/TeluguData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(500);
                let questions = record["Questions"], answers = record["Answers"];
                questions = questions && questions.replace(/\n/g, "").split("&");
                answers = answers && answers.replace(/\n/g, "").split("&");
                if (questions && questions.length) {
                    questions.forEach((val, i) => {
                        const options = (answers && answers[i] && answers[i].split(",")) || [];
                        this.questionBox(i + 1).sendKeys(val);
                        options.forEach((opt, k) => {
                            this.optionBox(i + 1, k + 1).sendKeys(opt);
                            if (k !== (options.length - 1)) {
                                this.addOptionBox(i + 1).click();
                                protractor_1.browser.actions().mouseMove(this.addSlide()).perform();
                            }
                        });
                        protractor_1.browser.sleep(1000);
                        if (i !== (questions.length - 1)) {
                            this.addSlide().click();
                        }
                    });
                }
                this.Checkbox2().click();
                this.Checkbox3().click();
                this.Checkbox4().click();
                this.Checkbox5().click();
            });
        }
    }
    Tasllinkupdate() {
        protractor_1.browser.sleep(2000);
        this.Tasklink().click();
        protractor_1.browser.sleep(2000);
        this.Activityid().clear();
        this.Activityid().sendKeys("12");
        protractor_1.browser.sleep(1000);
        this.Tasktime().sendKeys("1010");
        this.saveMCQ().click();
        this.acceptSaveTaskPopUp().click();
        protractor_1.browser.sleep(2000);
        this.clickOntappingMCQNextBtn().click();
        this.clickOntappingMCQNextBtn().click();
        this.Taskpublishpage();
        protractor_1.browser.sleep(2000);
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Tasklink can be updated successfully');
        });
    }
    SearchTask() {
        var clearsearch = protractor_1.element(protractor_1.by.xpath("//input[contains(@class,'task-search')]"));
        clearsearch.sendKeys("admin");
        browser_utils_1.BrowserUtils.waitUntilReady(this.Norecored());
        clearsearch.clear();
        clearsearch.click();
        browser_utils_1.BrowserUtils.waitUntilReady(this.Taskediticon());
    }
    subjecttab() {
        this.tasklistPanelElement().click();
        browser_utils_1.BrowserUtils.waitUntilReady(this.SubjectTab());
        browser_utils_1.BrowserUtils.countAndClick(this.Subject());
        this.SubjectTab().click();
    }
    ClickAllclasses() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser_utils_1.BrowserUtils.waitUntilReady(this.tasklistPanelElement());
                protractor_1.browser.sleep(500);
                this.tasklistPanelElement().click();
                protractor_1.browser.sleep(1500);
                browser_utils_1.BrowserUtils.waitUntilReady(this.Class1());
                protractor_1.browser.sleep(1500);
                //BrowserUtils.countAndClick(this.clickOnClassLinks());
                var editiconselection = protractor_1.by.xpath("//mat-list-item[@ng-reflect-router-link='/task/task-list']/div[text()='" + record["Class"] + "']");
                browser_utils_1.BrowserUtils.clickOnElement(editiconselection);
                // this.createNewTaskBtn().isDisplayed().then(function (dis) {
                //    expect(dis).toBe(true, 'Task class links are clickable')
                // })
            });
        }
    }
    ClickAllsubjects() {
        protractor_1.browser.sleep(3000);
        protractor_1.browser.ignoreSynchronization = true;
        browser_utils_1.BrowserUtils.countAndClick(this.clickOnSubjectsLinks());
        browser_utils_1.BrowserUtils.waitUntilReady(this.Maths());
        // this.createNewTaskBtn().isDisplayed().then(function (dis) {
        //    expect(dis).toBe(true, 'Task subject links are clickable')
        // })
    }
    ClickonRandomArray() {
        var myArray = ['Multiplechoicequestions1a', 'Multiplechoicequestions1.1a', 'Multiplechoicequestions1.2a', 'Multiplechoicequestions1.3a', 'Multiplechoicequestions1.4a', 'Multiplechoicequestions1.5a', 'Multiplechoicequestions1.6a', 'Multiplechoicequestions2.0a', 'Multiplechoicequestions2.1s', 'Multiplechoicequestions2.s2', 'Multiplechoicequestions2.s3', 'Multiplechoicequestions2.4s', 'Multiplechoicequestions2f.5', 'Multiplechoicequestions2.6g', 'Multiplechoicequestions3.0g', 'Multiplechoicequestions3.1g', 'Multiplechoicequestions3.2g', 'Multiplechoicequestions3.g3', 'Multiplechoicequestions3.4g', 'Multiplechoicequestions3.g5', 'Multiplechoicequestions3.6g', 'Multiplechoicequestions4.1g', 'Multiplechoicequestions4.1g', 'Multiplechoicequestions4.2g', 'Multiplechoicequestions4.3g', 'Multiplechoicequestions4.4g', 'Multiplechoicequestions4.g5', 'Multiplechoicequestions4.g6', 'Multiplechoicequestions5.g0', 'Multiplechoicequestions5.g1', 'Multiplechoicequestions5.g2', 'Multiplechoicequestions5.d3', 'Multiplechoicequestions5.4d', 'Multiplechoicequestions5.d5', 'Multiplechoicequestions5.d6', 'Multiplechoicequestions6.d0', 'Multiplechoicequestions6.d1', 'Multiplechoicequestions6.d2', 'Multiplechoicequestions6.w3', 'Multiplechoicequestions6.4w', 'Multiplechoicequestions6.5w', 'Multiplechoicequestions6.6w', 'Multiplechoicequestions1.0w', 'Multiplechoicequestions1.1e1', 'Multiplechoicequestions1.2e1', 'Multiplechoicequestions1.3e1', 'Multiplechoicequestions1.e41', 'Multiplechoicequestions1.51e', 'Multiplechoicequestions1.61e', 'Multiplechoicequestions2.0e1', 'Multiplechoicequestions2.1e1', 'Multiplechoicequestions2.2e1', 'Multiplechoicequestions2.3e1', 'Multiplechoicequestions2.4e1', 'Multiplechoicequestions2.5e1', 'Multiplechoicequestions2.6e1', 'Multiplechoicequestions3.0e1', 'Multiplechoicequestions3.1e1', 'Multiplechoicequestions3.2e1', 'Multiplechoicequestions3.31r', 'Multiplechoicequestions3.41r', 'Multiplechoicequestions3.5r1', 'Multiplechoicequestions3.r61', 'Multiplechoicequestions4r.11', 'Multiplechoicequestions4.1t2', 'Multiplechoicequestions4.2t1', 'Multiplechoicequestions4.t31', 'Multiplechoicequestions4.t41', 'Multiplechoicequestions4.5t1', 'Multiplechoicequestions4.t61', 'Multiplechoicequestions5.0t1', 'Multiplechoicequestions5.1t1', 'Multiplechoicequestions5.2t1', 'Multiplechoicequestions5.3t1', 'Multiplechoicequestions5.4t1', 'Multiplechoicequestions5.51t', 'Multiplechoicequestions5.6u1', 'Multiplechoicequestions6.u01', 'Multiplechoicequestions6.11u', 'Multiplechoicequestions6.2u1', 'Multiplechoicequestions6.31u', 'Multiplechoicequestions6.u41', 'Multiplechoicequestions6.5u1', 'Multiplechoicequestions6.u61', 'Multiplechoicequestions1.21u2', 'Multiplechoicequestions1.12', 'Multiplechoicequestions1.22', 'Multiplechoicequestions1.32i', 'Multiplechoicequestions1.i42', 'Multiplechoicequestions1.5i2', 'Multiplechoicequestions1.6i2', 'Multiplechoicequestions2.0o2', 'Multiplechoicequestions2.12o', 'Multiplechoicequestions2.22o', 'Multiplechoicequestions2.32o', 'Multiplechoicequestions2.4o2', 'Multiplechoicequestions2.52o', 'Multiplechoicequestions2.6o2', 'Multiplechoicequestions3.l02', 'Multiplechoicequestions3.1l2', 'Multiplechoicequestions3.2l2', 'Multiplechoicequestions3.3l2', 'Multiplechoicequestions3.4l2', 'Multiplechoicequestions3.5l2', 'Multiplechoicequestions3.6x2', 'Multiplechoicequestions4.12x', 'Multiplechoicequestions4.12x3', 'Multiplechoicequestions4.22c', 'Multiplechoicequestions4.32c', 'Multiplechoicequestions4.42c', 'Multiplechoicequestions4.52c', 'Multiplechoicequestions4.6c2', 'Multiplechoicequestions5.0c2', 'Multiplechoicequestions5.c12', 'Multiplechoicequestions5.22b', 'Multiplechoicequestions5.3b2', 'Multiplechoicequestions5.4n2', 'Multiplechoicequestions5.52', 'Multiplechoicequestions5.62', 'Multiplechoicequestions6.02', 'Multiplechoicequestions6.12', 'Multiplechoicequestions6.22', 'Multiplechoicequestions6.32', 'Multiplechoicequestions6.42', 'Multiplechoicequestions6.52', 'Multiplechoicequestions6.62'];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        return rand;
    }
    Taskupdate() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/TappingMCQTaskData/TeluguData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            for (var i = 1; i <= dataRecs.length; i++) {
                if (dataRecs && dataRecs.length > 0) {
                    dataRecs.forEach(record => {
                        protractor_1.browser.ignoreSynchronization = true;
                        protractor_1.browser.sleep(2000);
                        browser_utils_1.BrowserUtils.waitUntilReady(this.createNewTaskBtn());
                        this.createNewTaskBtn().click();
                        browser_utils_1.BrowserUtils.waitUntilReady(this.tappingMCQLink());
                        protractor_1.browser.sleep(1000);
                        this.tappingMCQLink().click();
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
                        var path1 = '../../TestData/AudioFiles/Telugu/MCQ2.wav';
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
        }
    }
    Publishnavigation() {
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.waitUntilReady(this.clickOntappingMCQNextBtn());
        this.clickOntappingMCQNextBtn().click();
        this.Taskpublishpage();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Tasks is created successfully');
        });
    }
    Previewpage() {
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[text()=' PREVIEW ']"));
        protractor_1.browser.sleep(2000);
        this.Previewradio1().click();
        protractor_1.browser.sleep(500);
        this.checkbtn().click();
        protractor_1.browser.sleep(500);
        this.showsolutionbtn().click();
        protractor_1.browser.sleep(500);
        this.Previewnextbtn().click();
        this.Previewradioimage1().click();
        protractor_1.browser.sleep(500);
        this.checkbtn().click();
        protractor_1.browser.sleep(500);
        this.showsolutionbtn().click();
        protractor_1.browser.sleep(500);
        this.Previewnextbtn().click();
        this.Previewradioimage2().click();
        protractor_1.browser.sleep(500);
        this.checkbtn().click();
        protractor_1.browser.sleep(500);
        this.showsolutionbtn().click();
        protractor_1.browser.sleep(500);
        this.Previewnextbtn().click();
        this.Previewradio2().click();
        protractor_1.browser.sleep(500);
        this.Previewradio3().click();
        protractor_1.browser.sleep(500);
        this.checkbtn().click();
        protractor_1.browser.sleep(500);
        this.showsolutionbtn().click();
        protractor_1.browser.sleep(500);
    }
    ClickonRandomSubject() {
        var myArray = ['MATHS', 'EVS', 'ENGLISH', 'TELUGU'];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        return rand;
    }
    Exceldatareading() {
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/TappingMCQData.json', null);
        let rowCount;
        let num;
        dataRecs.forEach((data, index) => {
            if (index > 0) {
                rowCount = rowCount;
                this.addSlide().click();
            }
            else {
                rowCount = index + 1;
            }
            let options = data.Options;
            var option = options.split(",");
            option.forEach((opt, count) => {
                console.log("Count is " + count);
                if (count) {
                    num = index + 1;
                    var optionelem = protractor_1.element(protractor_1.by.xpath("(//input[contains(@value,'+ Add option')])[" + num + "]"));
                    optionelem.click();
                }
                rowCount = rowCount + 1;
            });
            rowCount = rowCount + 1;
        });
    }
    TaskPage() {
        browser_utils_1.BrowserUtils.waitUntilReady(this.tasklistPanelElement());
        this.tasklistPanelElement().isDisplayed().then(function (dis) {
            expect(dis).toBe(true);
        });
        this.tasklistPanelElement().click();
        browser_utils_1.BrowserUtils.waitUntilReady(this.createNewTaskBtn());
        this.createNewTaskBtn().click();
        browser_utils_1.BrowserUtils.waitUntilReady(this.tappingMCQLink());
        protractor_1.browser.sleep(1000);
        this.tappingMCQLink().click();
        browser_utils_1.BrowserUtils.waitUntilReady(this.selectSubject());
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/TappingMCQData.json', null);
        protractor_1.browser.sleep(2000);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//select[@name='subjectNames']"), record["Subject"]);
                browser_utils_1.BrowserUtils.selectDropdownValue(protractor_1.by.xpath("//span[text()=' Activity Type ']/../span/select"), record["AcivityType"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@id='activityid']"), record["Tag"]);
                this.Activityid().clear();
                protractor_1.browser.sleep(1000);
            });
        }
    }
    Previewcancelicon() {
        protractor_1.browser.ignoreSynchronization = true;
        browser_utils_1.BrowserUtils.waitUntilReady(this.createNewTaskBtn());
        protractor_1.browser.sleep(1000);
        this.TeluguSubject().click();
        protractor_1.browser.sleep(2000);
        this.Tasklink().click();
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[text()='Next ']"));
        protractor_1.browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(1500);
        this.okbutton().click();
        protractor_1.browser.sleep(1500);
        this.MCQbreadcrumb().click();
        protractor_1.browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Preview breadcrumb is working successfully');
        });
    }
    Previewbackbutton() {
        protractor_1.browser.ignoreSynchronization = true;
        browser_utils_1.BrowserUtils.waitUntilReady(this.createNewTaskBtn());
        protractor_1.browser.sleep(1000);
        this.TeluguSubject().click();
        protractor_1.browser.sleep(2000);
        this.Tasklink().click();
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[text()='Next ']"));
        protractor_1.browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(1500);
        this.okbutton().click();
        protractor_1.browser.sleep(1500);
        this.Backbtn().click();
        protractor_1.browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Preview cancelicon is working successfully');
        });
    }
    Publishcancelicon() {
        protractor_1.browser.ignoreSynchronization = true;
        browser_utils_1.BrowserUtils.waitUntilReady(this.createNewTaskBtn());
        protractor_1.browser.sleep(1000);
        this.TeluguSubject().click();
        protractor_1.browser.sleep(2000);
        this.Tasklink().click();
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[text()='Next ']"));
        protractor_1.browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(1500);
        this.okbutton().click();
        protractor_1.browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(500);
        this.Previewbreadcrumb().click();
        protractor_1.browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Publish breadcrumb is working successfully');
        });
    }
    Publishbackbutton() {
        protractor_1.browser.ignoreSynchronization = true;
        browser_utils_1.BrowserUtils.waitUntilReady(this.createNewTaskBtn());
        protractor_1.browser.sleep(1000);
        this.TeluguSubject().click();
        protractor_1.browser.sleep(2000);
        this.Tasklink().click();
        protractor_1.browser.sleep(2000);
        browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[text()='Next ']"));
        protractor_1.browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(1500);
        this.okbutton().click();
        protractor_1.browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        protractor_1.browser.sleep(1500);
        browser_utils_1.BrowserUtils.waitUntilReady(this.publishBtn());
        protractor_1.browser.sleep(1500);
        this.Backbtn().click();
        protractor_1.browser.sleep(1500);
        this.Backbtn().click();
        protractor_1.browser.sleep(1500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Publish backbutton is working successfully');
        });
    }
    Contenttypesearch() {
        protractor_1.browser.ignoreSynchronization = true;
        var contentsearch = protractor_1.element(protractor_1.by.xpath("//input[@type='search']"));
        this.createNewTaskBtn().click();
        protractor_1.browser.sleep(1000);
        contentsearch.sendKeys("Tapping");
        contentsearch.clear();
        protractor_1.browser.sleep(500);
        this.Class1().click();
    }
    Taskcancelicon() {
        this.createNewTaskBtn().click();
        this.tappingMCQLink().click();
        this.TaskCancelicon().click();
        protractor_1.browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Task popup cancel is working successfully');
        });
    }
}
exports.tasksPage = tasksPage;
