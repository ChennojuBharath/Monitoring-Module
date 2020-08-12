"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assets_po_1 = require("../../Pages/assets.po");
describe('Assets Page', () => {
    let Asset;
    Asset = new assets_po_1.Assets();
    it('Verify Assets can  be created', () => {
        Asset.Createassets();
    });
    it('Verify Assets can  be updated', () => {
        Asset.Updateassets();
    });
});
