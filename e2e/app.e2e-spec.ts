import { ClubManangerPage } from './app.po';

describe('club-mananger App', () => {
  let page: ClubManangerPage;

  beforeEach(() => {
    page = new ClubManangerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
