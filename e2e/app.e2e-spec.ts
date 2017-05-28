import { GrazidontbemadPage } from './app.po';

describe('grazidontbemad App', () => {
  let page: GrazidontbemadPage;

  beforeEach(() => {
    page = new GrazidontbemadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
