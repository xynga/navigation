import { AppPage } from './app.po';

describe('testing App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should Open the menu', () => {
    page.navigateTo();
    page.checkMenuOpen().then(data => {
      expect(data).not.toEqual('open');
    });
    page.getMenuButton().click();
    page.checkMenuOpen().then(data => {
      expect(data).toEqual('open');
    });
  });
  it( 'should change to Tab 1 when a tab 1 is clicked', () => {
    page.findTab('Tab1').click();
    page.checkForTab('Tab 1').then(data => {
      expect(data).toEqual('Tab 1');
    });
  });
  it( 'should change to Tab 2 when a tab 2 is clicked', () => {
    page.findTab('Tab2').click();
    page.checkForTab('Tab 2').then(data => {
      expect(data).toEqual('Tab 2');
    });
  });
  it( 'should change to Tab 3 when a tab 3 is clicked', () => {
    page.findTab('Tab3').click();
    page.checkForTab('Tab 3').then(data => {
      expect(data).toEqual('Tab 3');
    });
  });
});
