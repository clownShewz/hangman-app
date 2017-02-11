import { HangmanAppPage } from './app.po';

describe('hangman-app App', function() {
  let page: HangmanAppPage;

  beforeEach(() => {
    page = new HangmanAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
