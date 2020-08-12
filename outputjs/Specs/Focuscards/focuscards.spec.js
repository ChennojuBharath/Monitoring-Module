"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const focuscards_po_1 = require("../../Pages/focuscards.po");
const multiplechoicePage_po_1 = require("../../Pages/multiplechoicePage.po");
let focuscards;
focuscards = new focuscards_po_1.focuscardsPage();
let taskPg;
taskPg = new multiplechoicePage_po_1.tasksPage();
describe('Focuscards Tasks Creation', () => {
    it('Verify tasks by performing click action on every class', () => {
        taskPg.ClickAllclasses();
    });
    it('Verify the tab click for Subject tabs', () => {
        taskPg.ClickAllsubjects();
    });
    it('Create task flow check for focuscards task', () => {
        focuscards.createfocuscardsTask();
    });
    // it('Create task flow check for multiple focuscards task', () => {
    //   focuscards.createmultiplefocuscards();
    // });
    // it('Check focus cards can be deleted', () => {
    //   focuscards.Addanddeletefocuscards();
    // });
});
