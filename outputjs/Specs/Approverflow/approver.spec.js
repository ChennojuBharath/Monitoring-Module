"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const approver_po_1 = require("../../Pages/approver.po");
const multiplechoicePage_po_1 = require("../../Pages/multiplechoicePage.po");
let Approver;
Approver = new approver_po_1.Approverview();
let taskPg;
taskPg = new multiplechoicePage_po_1.tasksPage();
describe('Approver flow ', () => {
    it('Verify reviewer is able to login successfully', () => {
        Approver.Keycloaklogin();
    });
    it('Verify tasks by performing click action on every class', () => {
        taskPg.ClickAllclasses();
    });
    it('Verify the tab click for Subject tabs', () => {
        taskPg.ClickAllsubjects();
    });
    it('Verify approver is able to approve task successfully', () => {
        Approver.Approvetask();
    });
    it('Verify review tasks and send for approval is successful without comments', () => {
        Approver.Approvetaskswithoutcomments();
    });
    it('Verify created tasks can be drafted', () => {
        Approver.conformdraftapprovetasks();
    });
    it('Verify created tasks can be drafted', () => {
        Approver.canceldraftapprovetasks();
    });
    it('Verify comments for tasks can be edited', () => {
        Approver.editcomments();
    });
    it('Verify comments for tasks can be deleted', () => {
        Approver.deletecomments();
    });
    it('Verify delete is working for task table', () => {
        Approver.deletetasks();
    });
});
