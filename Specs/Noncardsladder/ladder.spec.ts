import { ladderDetails } from '../../Pages/ladder.po';

describe('KIT Creation Page', () => {
    let ladder: ladderDetails
    ladder = new ladderDetails();
    it('Verify ladder can  be created', () => {
     ladder.CreateLaddernoncards();
      });
    it('Verify ladder details can  be updated', () => {
       ladder.Updateladdercardsdetails();
      });
    it('Verify ladder details can  be deleted', () => {
        ladder.Deleteladderdetals();
      })
})