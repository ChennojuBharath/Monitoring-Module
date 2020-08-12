import { cardDetails } from '../../Pages/carddetails.po';

describe('KIT Creation Page', () => {
    let card: cardDetails
    card = new cardDetails();
    it('Verify kit with cards selection can  be created', () => {
        card.Createcards();
        // kit.CreateAidsnoncards();
        // kit.CreateLaddernoncards();
        // kit.CreateOthersnoncards();
      });
it('Verify kit with cards selection can  be created', () => {
        card.Updatecardsdetails();
      });
it('Verify kit with cards selection can  be created', () => {
        card.Deletekitdetals();
      })
})