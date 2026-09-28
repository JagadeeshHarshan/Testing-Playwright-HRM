import { Page, Locator } from "@playwright/test";

export class AdminPage {

readonly page: Page;

readonly adminMenu: Locator;
readonly addButton: Locator;
readonly userRole: Locator;
readonly employeeName: Locator;
readonly username: Locator;
readonly password: Locator;
readonly confirmPassword: Locator;
readonly saveButton: Locator;

constructor(page: Page) {

this.page = page;

this.adminMenu = page.getByText("Admin", { exact: true });

this.addButton = page.getByRole("button", {name: "Add"});

this.userRole = page.getByText("Select", {
exact: true}).first();

this.employeeName = page.getByPlaceholder( "Type for hints...");

this.username = page.locator("input.oxd-input").nth(1);

this.password = page.locator( "input[type='password']").first();

this.confirmPassword = page.locator("input[type='password']").nth(1);

this.saveButton = page.getByRole("button", {name: "Save"});

}

randomUsername(): string {

const randomNumber = Math.floor(Math.random() * 100000);

return "TestUser" + randomNumber;
}

randomPassword(): string {

const randomNumber = Math.floor(Math.random() * 100000);

return "Test@" + randomNumber;

}

async enterRandomUsername() {

const username = this.randomUsername();

console.log("Random Username:", username);

await this.username.fill(username);

return username;

}

async enterRandomPassword() {

const password = this.randomPassword();

console.log("Random Password:", password);

await this.password.fill(password);

await this.confirmPassword.fill(password);
return password;

}

async openAdmin() {
await this.adminMenu.click();
}

async clickAdd() {
await this.addButton.click();

}

async save() {
await this.saveButton.click();

}

}

