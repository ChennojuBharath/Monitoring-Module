"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fillintheblanks_po_1 = require("../../Pages/fillintheblanks.po");
const multiplechoicePage_po_1 = require("../../Pages/multiplechoicePage.po");
let fillintheblanks;
fillintheblanks = new fillintheblanks_po_1.fillintheblanksPage();
let taskPg;
taskPg = new multiplechoicePage_po_1.tasksPage();
describe('Fill in the blanks Tasks Creation', () => {
    it('Verify tasks by performing click action on every class', () => {
        taskPg.ClickAllclasses();
    });
    it('Verify the tab click for Subject tabs', () => {
        taskPg.ClickAllsubjects();
    });
    it('Create task flow check for fill in the blanks', () => {
        fillintheblanks.TeluguMultiplequestions();
    });
    // it('Create task flow for fill in the blanks with multiple slides', () => {
    //   fillintheblanks.Multipleslides();
    // })
    // it('Verify deletion of Options and Slides i working', () => {
    //   fillintheblanks.DeleteSlideandOptions();
    // })
    // it('Update fill in the blanks task', () => {
    //   fillintheblanks.Updatefillintheblanks();
    // })
    // it('To Search data in list of tasks', () => {
    //   fillintheblanks.SearchTaskfromlist();
    // });
    // it('Closing the task popup using cancel button', () => {
    //   fillintheblanks.CancelTask();
    // });
    // it('Check for the content type search', () => {
    //   fillintheblanks.Contenttypesearch();
    // });
    // it('Check the task preview page breadcrumbs are working', () => {
    //   fillintheblanks.Previewcancelicon()
    // });
    // it('Check the task preview page back button', () => {
    //   fillintheblanks.Previewbackbutton()
    // });
    // it('Check the task publish page breadcrumbs are working', () => {
    //   fillintheblanks. Publishcancelicon();
    // });
    // it('Check the task publish page back button', () => {
    //   fillintheblanks.Publishbackbutton();
    // })
});
