import { chromium, ChromiumBrowser, Page } from 'playwright';

(async () => {
    const browser : ChromiumBrowser = await chromium.launch();
    const page : Page = await browser.newPage();
    await page.goto('https://organicosinbox.com.br');
    await page.screenshot({ path: 'teste.png' });
    await browser.close();
  })();