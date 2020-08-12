"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resources_po_1 = require("../../Pages/resources.po");
describe('Course Creation Page', () => {
    let Resource;
    Resource = new resources_po_1.Resources();
    it('Verify Resource can  be created', () => {
        Resource.Createresources();
    });
});
