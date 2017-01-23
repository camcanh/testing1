import { Testing1Page } from './app.po';

describe('testing1 App', function() {
  let page: Testing1Page;

  beforeEach(() => {
    page = new Testing1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
