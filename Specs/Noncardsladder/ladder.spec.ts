import { ladderDetails } from '../../Pages/ladder.po';

describe('KIT Creation Page', () => {
    let ladder: ladderDetails
    ladder = new ladderDetails();
    it('Verify ladder can  be created', () => {
     ladder.CreateLaddernoncards();
      });
    it('Verify ladder can  be updated', () => {
       ladder.Updateladdercardsdetails();
      });
    it('Verify ladder can  be updated', () => {
        ladder.Deleteladderdetals();
      })
})