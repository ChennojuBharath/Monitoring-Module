"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorting_po_1 = require("../../Pages/sorting.po");
const multiplechoicePage_po_1 = require("../../Pages/multiplechoicePage.po");
let Sorting;
Sorting = new sorting_po_1.sortingPage();
let taskPg;
taskPg = new multiplechoicePage_po_1.tasksPage();
describe('Sorting Tasks Creation', () => {
    it('Verify tasks by performing click action on every class', () => {
        taskPg.ClickAllclasses();
    });
    // it('Verify the tab click for Subject tabs', () => {
    //     taskPg.ClickAllsubjects();
    // });
    it('Create Sorting task with Text', () => {
        Sorting.createTextSortingTask();
    });
    // it('Update Sorting task with link', () => {
    //     Sorting.Updatesortingbylink();
    // });
    // it('Create Sorting task with Image', () => {
    //     Sorting.createImageSortingTask();
    // });
    // it('To Search data in list of tasks', () => {
    //     Sorting.SearchTaskfromlist();
    // });
    // it('Closing the task popup using cancel button', () => {
    //     Sorting.CancelTask();
    // });
    // it('Closing the task popup using cancel Icon', () => {
    //     Sorting.Cancelicon();
    // });
    // it('Check for the content type search', () => {
    //     Sorting.Contenttypesearch();
    // });
    // it('Check the task preview page close icon', () => {
    //     Sorting.Previewcancelicon()
    // });
    // it('Check the task preview page back button', () => {
    //     Sorting.Previewbackbutton()
    // });
    // it('Check the task publish page close icon', () => {
    //     Sorting. Publishcancelicon();
    // });
    // it('Check the task publish page back button', () => {
    //     Sorting.Publishbackbutton();
    // })
    // it('Check delete button is working', () => {
    //         Sorting.deleteoptions();
    // })
});
