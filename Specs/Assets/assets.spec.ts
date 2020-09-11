import { Assets } from '../../Pages/assets.po';

describe('Assets Page', () => {
    let Asset: Assets
    Asset = new Assets();
       it('Verify Tab selection is working', () => {
        Asset.tab();
      });
    it('Verify Assets can  be created', () => {
        Asset.Createassets();
      });
      it('Verify Assets can  be updated', () => {
        Asset.Updateassets();
      });
 it('Verify Assets can  be deleted', () => {
        Asset.Deleteassets();
      });
})