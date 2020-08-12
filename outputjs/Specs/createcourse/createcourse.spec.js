"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coursePage_po_1 = require("../../Pages/coursePage.po");
const multiplechoicePage_po_1 = require("../../Pages/multiplechoicePage.po");
describe('Course Creation Page', () => {
    let coursePg;
    coursePg = new coursePage_po_1.coursePage();
    let taskPg;
    taskPg = new multiplechoicePage_po_1.tasksPage();
    it('Verify tasks by performing click action on every class', () => {
        coursePg.clickAllclasses();
    });
    it('check Course creation work flow', () => {
        coursePg.createNewCourse();
    });
    it('check course can be created with multiple tasks', () => {
        coursePg.CoursewithmultipleTasks();
    });
    // it('verifying the Delete course functionality', () => {
    //   coursePg.CourseDeleteicon();
    // })
    // it('Preview check for the created course', () => {
    //   coursePg.MilestonePreview(); 
    // });
    // it('Check whether the created milestone is updated', () => {
    //   coursePg.Milestoneupdate();
    // });
    // it('Check whether the created milestone is cloned', () => {
    //   coursePg.CloneMilestone();
    // });
    // it('Check whether the created milestone is deleted', () => {
    //   coursePg. Milestonedelete();
    // });
    // it('Check whether the created milestone is published', () => {
    //   coursePg.PublishMilestone();
    // });
    // it('Search for the courses', () => {
    //   coursePg.SearchCourse();
    // })
    // it('Year selection from the All courses page', () => {
    //   coursePg.Yearselectiondropdown();
    // })
    // it('Edit a course using course link and update it', () => {
    //      coursePg.Courselinkupdate();
    // })
    // it('Preview the course details by selecting the preview icon', () => {
    //   coursePg.CoursePreviewicon();
    // })
    // it('Checking for the Course Milestone with Multiple tasks are adding or not', () => {
    //   coursePg.Coursewithmultipletasks();
    // })
    // it('Checking for the Export button is working or not', () => {
    //   coursePg.ExportCourse();
    // })
    // it('Checking for the added task preview functionality in task field of Add/edit Activity page', () => {
    //   coursePg.Taskfeildpreview();
    // })
    // it('Checking for the added task edit functionality in task field of Add/edit Activity page', () => {
    //   coursePg.Taskfeildedit();
    // })
    // it('Checking for the added task remove functionality in task field of Add/edit Activity page', () => {
    //   coursePg.Taskremoval();
    // })
});
