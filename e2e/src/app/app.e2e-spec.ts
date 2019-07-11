import { WebElement, Builder, Browser, WebDriver, By, until, logging } from 'selenium-webdriver';
import { login } from '../helper/login';
import { getShadowRoot } from '../helper/getShadowRoot';

describe('app', async () => {
  let driver: WebDriver;
  let appRoot: WebElement;
  beforeEach(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('http://localhost:8080');
    appRoot = await driver.findElement(By.tagName('marius-root'));
  });

  afterEach(async () => {
    await driver.quit();
  });

  it('should find title element', async () => {
    const title = await (await getShadowRoot(appRoot)).findElement(
      By.tagName('h1'));
    const content = await title.getText();
    expect(content).toBe('LitElement Starter');
  }, 3000);
});
