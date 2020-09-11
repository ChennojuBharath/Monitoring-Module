import { othersDetails } from '../../Pages/others.po';

describe('KIT Creation Page', () => {
    let others: othersDetails
    others = new othersDetails();
    it('Verify others can  be created', () => {
  others.CreateOthersnoncards();
      });
    it('Verify others  details can  be updated', () => {
      others.Updateotherscardsdetails();
      });
    it('Verify others details can  be deleted', () => {
        others.Deleteothersdetals();
      })
})