import { NDCRegistrationSystemPage } from './app.po';

describe('ndc-registration-system App', function() {
  let page: NDCRegistrationSystemPage;

  beforeEach(() => {
    page = new NDCRegistrationSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
