import { Page } from '@playwright/test';

export class LoginPage {

page: Page;

constructor(page: Page) {
this.page = page;
}

async openLoginPage() {
await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
}

async enterUsername(username: string) {

await this.page.getByPlaceholder('Username').fill(username);

}

async enterPassword(password: string) {

await this.page.getByPlaceholder('Password').fill(password);

}

async clickLogin() {
await this.page.getByRole('button', { name: 'Login' }).click();
}

async login(username: string, password: string) 
{
    
await this.enterUsername(username);
await this.enterPassword(password);
await this.clickLogin();

}

}