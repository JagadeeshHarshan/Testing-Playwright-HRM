import {test, expect} from "@playwright/test";

test.afterAll(async () => {
  console.log("Before all tests");
});

test("OrangeHRM Login Test", async ({ page }) => {

await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
// await page.waitForURL("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
console.log("Page loaded successfully");


});


test(" Login Test", async ({ page }) => {

await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");     
console.log("2nd testcase run...")
 });

