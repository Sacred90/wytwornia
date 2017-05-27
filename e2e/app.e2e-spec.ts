import { WytworniaPage } from './app.po';

describe('wytwornia App', () => {
  let page: WytworniaPage;

  beforeEach(() => {
    page = new WytworniaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
