"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courseapproval_po_1 = require("../../Pages/courseapproval.po");
let approval;
approval = new courseapproval_po_1.courseapprovalPage();
describe('Course approval flow ', () => {
    it('Verify reviewer is able to login successfully', () => {
        approval.Keycloaklogin();
    });
    it('Verify review tasks and send for approval is successful', () => {
        approval.approvetasks();
    });
    //    it('Verify review tasks and send for approval is successful without comments', () => {
    //       Reviewer.Reviewtaskswithoutcomments();
    //    });
    //    it('Verify created tasks can be drafted', () => {
    //       Reviewer.conformdraftreviewtasks();
    //    });
    //    it('Verify created tasks can be drafted', () => {
    //       Reviewer.canceldraftreviewtasks();
    //    });
    //    it('Verify comments for tasks can be edited', () => {
    //       Reviewer.editcomments();
    //    });
    //    it('Verify comments for tasks can be deleted', () => {
    //       Reviewer.deletecomments();
    //    });
    //    it('Verify delete is working for task table', () => {
    //       Reviewer.deletetasks();
    //    });
});
