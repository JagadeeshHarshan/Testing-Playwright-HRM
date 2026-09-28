import {test,expect} from "@playwright/test";

import { AdminPage } from "../SRC/POMPages/Adminpage";

import { RandomData } from "../SRC/POMPages/Waituntil/random.test";

test("Create Admin User with Random Data", async ({ page }) => {
await page.goto

("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await page.getByPlaceholder("Username").fill("Admin");
await page.getByPlaceholder("Password").fill("admin123");
await page.getByRole("button", {name: "Login"}).click();

await expect(page).toHaveURL(/.*dashboard\/index/);
const adminPage = new AdminPage(page);
await adminPage.openAdmin();
    
await adminPage.clickAdd();
const username = RandomData.randomUsername();
const password = RandomData.randomPassword();

console.log("=================================");
console.log("Random Username :", username);
console.log("Random Password :", password);
console.log("=================================");

await adminPage.username.fill(username);
await adminPage.password.fill(password);
await adminPage.confirmPassword.fill(password);

await adminPage.save();

console.log("Admin user created successfully!");

});


