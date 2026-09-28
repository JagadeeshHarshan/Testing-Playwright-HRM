import { Page, Locator } from "@playwright/test";

export class PIMPage {
readonly page: Page;
readonly addEmployeeButton: Locator;
readonly firstNameInput: Locator;
readonly lastNameInput: Locator;
readonly employeeIdInput: Locator;
readonly saveButton: Locator;

constructor(page: Page) {
this.page = page;

this.addEmployeeButton = page.locator('button:has-text("Add")');
this.firstNameInput = page.locator('input[name="firstName"]');
this.lastNameInput = page.locator('input[name="lastName"]');
this.employeeIdInput = page.locator('input.oxd-input').nth(2);
this.saveButton = page.locator('button:has-text("Save")');
}

async clickAddEmployee() {
await this.addEmployeeButton.click();
}

async fillEmployeeDetails(firstName: string, lastName: string, employeeId: string) {
await this.firstNameInput.fill(firstName);
await this.lastNameInput.fill(lastName);
await this.employeeIdInput.fill(employeeId);
}

async saveEmployee() {
await this.saveButton.click();

}

}