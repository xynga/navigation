import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getMenuButton() {
    return element(by.cssContainingText('button', 'Select Sandwich'));
  }

  checkMenuOpen() {
    const openMenu = element(by.tagName('menu-xynga'));
    return openMenu.getAttribute('class');
  }

  findTab(myTab: string) {
    return element(by.cssContainingText('a', myTab));
  }

  checkForTab(myTab: string) {
    const h1Tag = element(by.cssContainingText('h1', myTab));
    return h1Tag.getText();
  }




}
