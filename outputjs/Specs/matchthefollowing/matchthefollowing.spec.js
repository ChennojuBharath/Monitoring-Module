"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const matchtheFollowing_po_1 = require("../../Pages/matchtheFollowing.po");
const multiplechoicePage_po_1 = require("../../Pages/multiplechoicePage.po");
let matchtheFollowing;
matchtheFollowing = new matchtheFollowing_po_1.matchtheFollowingPage();
let taskPg;
taskPg = new multiplechoicePage_po_1.tasksPage();
describe('MatchtheFollowing Tasks Creation', () => {
    it('Verify tasks by performing click action on every class', () => {
        taskPg.ClickAllclasses();
    });
    it('Verify the tab click for Subject tabs', () => {
        taskPg.ClickAllsubjects();
    });
    it('Create task flow check for Matchthefollowing for Image to Image selection', () => {
        matchtheFollowing.createMatchthefollowingImagetoImageTask();
    });
    it('Create task flow check for Matchthefollowing for Text to Image selection', () => {
        matchtheFollowing.createMatchthefollowingTexttoImageTask();
    });
    it('Create task flow check for Matchthefollowing for Text to Text selection', () => {
        matchtheFollowing.createMatchthefollowingTexttoTextTask();
    });
    it('Create task flow check for Matchthefollowing for Image to Text selection', () => {
        matchtheFollowing.createMatchthefollowingImagetoTextTask();
    });
    it('Verify Add options button is working', () => {
        matchtheFollowing.Addoptions();
    });
    it('Verify Options can be deleted', () => {
        matchtheFollowing.Deleteoptions();
    });
    it('To Search data in list of tasks', () => {
        matchtheFollowing.SearchTaskfromlist();
    });
    it('Closing the task popup using cancel button', () => {
        matchtheFollowing.CancelTask();
    });
    it('Check for the content type search', () => {
        matchtheFollowing.Contenttypesearch();
    });
    it('Check the task preview page breadcrumbs are working', () => {
        matchtheFollowing.Previewcancelicon();
    });
    it('Check the task preview page back button', () => {
        matchtheFollowing.Previewbackbutton();
    });
    it('Check the task publish page breadcrumbs are working', () => {
        matchtheFollowing.Publishcancelicon();
    });
    it('Check the task publish page back button', () => {
        matchtheFollowing.Publishbackbutton();
    });
});
