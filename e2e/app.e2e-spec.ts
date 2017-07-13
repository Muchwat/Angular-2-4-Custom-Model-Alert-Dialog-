import { CustomModelPage } from './app.po';

describe('custom-model App', () => {
  let page: CustomModelPage;

  beforeEach(() => {
    page = new CustomModelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
