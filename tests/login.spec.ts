import { test, expect } from "@playwright/test";

import { LoginPage } from "../SRC/POMPages/Loginpage";

test("OrangeHRM Login Test", async ({ page }) => {

    
const loginPage = new LoginPage(page);

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");


await loginPage.login("Admin", "admin123");

await expect(page).toHaveURL(/.*dashboard\/index/);

});

