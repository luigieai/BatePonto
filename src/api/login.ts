import { chromium, ChromiumBrowser, Page } from 'playwright';
import chalk from 'chalk';

export default async function login(email: string, password: string, debugMode: boolean = false) {
    const browser: ChromiumBrowser = await chromium.launch();
    const page: Page = await browser.newPage();
    await page.goto('https://app.pontomaisweb.com.br/#/acessar');
    await page.fill('input[name="login"]', email);
    await page.fill('input[name="password"]', password);
    
    if( debugMode ){
        await debugScreenshot(page, 'debug/01.png');
    }
    await page.click('text="Entrar"');
    if( debugMode ){
        await debugScreenshot(page, 'debug/02.png'); 
    }
    //await page.
    //await page.goto('https://app.pontomaisweb.com.br/#/meu_ponto/registro_de_ponto');
    if( debugMode ){
        await debugScreenshot(page, 'debug/03-A.png');
    }
    //await page.click('text="Registrar ponto"');
    
    await browser.close();
  }

async function debugScreenshot(page: Page,path: string) {
    if(process.env.DEBUG == "true") {
        console.log(chalk.blueBright.bold('Print do modo debug salvo em: ') + chalk.green.bold("./" + path));
        return await page.screenshot({ path });
    }
    else {
        return false;
    }
  }