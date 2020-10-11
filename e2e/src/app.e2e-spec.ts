import { AppPage } from './app.po';
import {browser, by, element, logging} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Login page', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Login');
  });

  it('the user name field should be filled', () => {
    const userName = page.getUserName();
    userName.sendKeys('User');
    expect(userName.getAttribute('value'))
      .toEqual('User');
  });

  it('the password field should be filled', () => {
    const password = page.getPassworde();
    password.sendKeys('password');
    expect(password.getAttribute('value'))
      .toEqual('password');
  });

  it('should click the Log in button', () => {
    page.clickLogInButton();
    expect(browser.getCurrentUrl())
      .toEqual(browser.baseUrl + 'search');
  });

  it('the search field should be filled by Handmade Cotton Towels', () => {
    const search = page.getSearchInput();
    search.sendKeys('Handmade Cotton Towels');
    expect(search.getAttribute('value'))
      .toEqual('Handmade Cotton Towels');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
