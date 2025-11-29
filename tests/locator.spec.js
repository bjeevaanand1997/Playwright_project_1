// import {test, expect} from '@playwright/test';

// test('locator for the login page', async ({ page }) => {
//     await page.goto('https://www.demoblaze.com/');
//     await page.click('//a[@id="login2"]');
//     await page.click('//input[@id="loginusername"]');
//     await page.fill('//input[@id="loginusername"]', 'trendnologies');
//     await page.click('//input[@id="loginpassword"]');
//     await page.fill('//input[@id="loginpassword"]', 'Trend@123');
//     await page.click('//button[@onclick="logIn()"]');

//     page.close();
// });


//  test for the testautomation practice blogspot login page
import { test, expect } from '@playwright/test';
test('locator for the login page', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
//     await page.click('id=name');
//     await page.fill('id=name', 'trendnologies');
//     await page.click('id=email');
//     await page.fill('id=email', 'jeevaanand2197@gmail.com');
//     await page.click('//input[@id="phone"]');
//     await page.fill('//input[@id="phone"]', '9876543210'); 
//     await page.click('//textarea[@id="textarea"]');
//     await page.fill('//textarea[@id="textarea"]', 'am just learn how to use the locator in the playwright framework');
//     await page.waitForTimeout(3000);

//     page.close();
// });

await page.getByPlaceholder('Enter Name').fill('user');
await page.getByPlaceholder('Enter EMail').fill('jeevaanand2197');
await page.getByPlaceholder('Enter Phone').fill('9876543210');
await page.locator('//textarea[@id="textarea"]').fill('am just learn how to use the tool');
await page.waitForTimeout(3000);
await page.close();
});