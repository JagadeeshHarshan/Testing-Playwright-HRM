import { test, expect } from '@playwright/test';
import dashboardData from '../Json/dashboard.json';
import dotenv from 'dotenv';

dotenv.config();

test('should load dashboard and display widgets', async ({ page }) => {

await page.goto(process.env.DASHBOARD_URL!);

await expect(page).toHaveTitle(dashboardData.title);

await expect(page.getByRole('heading', {name: dashboardData.heading,exact: true})).

toBeVisible();

for (const widget of dashboardData.widgets) {
await expect(page.getByText(widget, { exact: true })).toBeVisible();

}
});



