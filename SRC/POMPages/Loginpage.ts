import { Page, Locator } from "@playwright/test";

import { WaitUtils } from "./Waituntil/until.test";


export class LoginPage {

//readonly page = [{"username": "Locator"}, {"password": "Locator"}, {"loginButton": "Locator"}, {"waitUtils": "WaitUtils"}];    

readonly page: Page;
readonly username: Locator;
readonly password: Locator;
readonly loginButton: Locator;
readonly waitUtils: WaitUtils;

constructor(page: Page) {

this.page = page;

this.waitUtils = new WaitUtils(page);

this.username = page.getByPlaceholder("Username");
this.password = page.getByPlaceholder("Password");
this.loginButton = page.getByRole("button", { name: "Login" });

}

async login(username: string, password: string) {

await this.username.fill(username);
await this.password.fill(password);
await this.loginButton.click();

}

}


