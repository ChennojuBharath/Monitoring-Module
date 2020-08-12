"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trueorfalse_po_1 = require("../../Pages/trueorfalse.po");
const multiplechoicePage_po_1 = require("../../Pages/multiplechoicePage.po");
let taskPg;
taskPg = new multiplechoicePage_po_1.tasksPage();
let trueorfalsePg;
trueorfalsePg = new trueorfalse_po_1.trueorfalsePage();
describe('trueorfalse task Creation Page', () => {
    it('Verify tasks by performing click action on every class', () => {
        taskPg.ClickAllclasses();
    });
    it('Verify the tab click for Subject tabs', () => {
        taskPg.ClickAllsubjects();
    });
    it('Check for the task with pictureandtext can be created', () => {
        trueorfalsePg.createTrueorfalsetaskwithtext();
    });
    it('Check for the task with pictureandtext can be created', () => {
        trueorfalsePg.createTrueorfalsetaskwithpictureandtext();
    });
    it('Check for the task with multiple questions can be created', () => {
        trueorfalsePg.taskwithmultiplequestions();
    });
    it('To Search data in list of tasks', () => {
        trueorfalsePg.SearchTaskfromlist();
    });
    it('Closing the task popup using cancel button', () => {
        trueorfalsePg.CancelTask();
    });
    it('Check for the content type search', () => {
        trueorfalsePg.Contenttypesearch();
    });
    it('Check the task preview page breadcrumbs are working', () => {
        trueorfalsePg.Previewcancelicon();
    });
    it('Check the task preview page back button', () => {
        trueorfalsePg.Previewbackbutton();
    });
    it('Check the task publish page breadcrumbs are working', () => {
        trueorfalsePg.Publishcancelicon();
    });
    it('Check the task publish page back button', () => {
        trueorfalsePg.Publishbackbutton();
    });
});
