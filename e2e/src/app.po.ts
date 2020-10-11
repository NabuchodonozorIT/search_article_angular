import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .login-page-header')).getText() as Promise<string>;
  }

  getUserName(): any {
    return element(by.css('app-root .username'));
  }

  getSearchInput(): any {
    return element(by.css('app-root .search-input'));
  }

  getPassworde(): any {
    return element(by.css('app-root .password'));
  }

  clickLogInButton(): Promise<any>{
    return element(by.css('.log-in-button')).click() as Promise<any>;
  }

}
