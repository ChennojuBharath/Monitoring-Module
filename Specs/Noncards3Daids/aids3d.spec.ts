import { aids3dDetails } from '../../Pages/aids3d.po';

describe('KIT Creation Page', () => {
      let aids3d: aids3dDetails
      aids3d = new aids3dDetails();
      it('Verify kit with cards selection can  be created', () => {
            aids3d.CreateAidsnoncards();
      });
      it('Verify kit with cards selection can  be updated', () => {
            aids3d.Update3dcardsdetails();
      });
      it('Verify kit with cards selection can  be deleted', () => {
            aids3d.Delete3ddetals();
      })
})