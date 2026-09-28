import { test as teardown } from "@playwright/test";

import { LoginPage } from "../POMPages/Loginpage";

teardown("OrangeHRM LoginPage Teardown", async ({ page }) => {

console.log("========== TEARDOWN STARTED ==========");
console.log("Cleaning up after OrangeHRM tests");

await page.close();

console.log("Browser page closed");
console.log("========== TEARDOWN COMPLETED ==========");

});
