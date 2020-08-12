"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kitdetails_po_1 = require("../../Pages/kitdetails.po");
describe('Course Creation Page', () => {
    let kit;
    kit = new kitdetails_po_1.kitDetails();
    it('Verify kit with cards selection can  be created', () => {
        //kit.Createcards();
        //kit.CreateAidsnoncards();
        kit.CreateLaddernoncards();
        //kit.CreateOthersnoncards();
    });
});
