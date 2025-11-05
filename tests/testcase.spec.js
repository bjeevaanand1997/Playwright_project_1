// // import {test,expect} from '@playwright/test'

// // test("login using built in locator",async({page})=>{
// //     await page.goto("https://www.saucedemo.com/")
// //     await page.getByPlaceholder("username").fill("standard_user")
// //     await page.getByPlaceholder("Password").fill("secret_sauce")
// //     await page.getByRole("button",{name:' Login '}).click()
    

// // });


// import { test, expect } from '@playwright/test';

// const users = [
//   'standard_user',
//   'locked_out_user',
//   'problem_user',
//   'performance_glitch_user',
//   'error_user',
//   'visual_user'
// ];

// const password = 'secret_sauce';

// test.describe('Login tests for all SauceDemo users', () => {

//   for (const user of users) {
//     test(`Login test for: ${user}`, async ({ page }) => {
//       await page.goto('https://www.saucedemo.com/');
      
//       await page.getByPlaceholder('Username').fill(user);
//       await page.getByPlaceholder('Password').fill(password);
//       await page.getByRole('button', { name: 'Login' }).click();

//       // success condition: redirected to inventory page
//       if (await page.url().includes('inventory.html')) {
//         console.log(`✅ ${user} => Login Successful`);
//         await expect(page).toHaveURL(/inventory\.html/);

//         // Logout to reset session
//         await page.click('#react-burger-menu-btn');
//         await page.click('#logout_sidebar_link');
//       } else {
//         console.log(`❌ ${user} => Login Failed`);
//         const errorMsg = await page.locator('[data-test="error"]').textContent();
//         console.log(`   Error: ${errorMsg}`);
//         await expect(page.locator('[data-test="error"]')).toBeVisible();
//       }
//     });
//   }
// });

// import { test, expect } from '@playwright/test';

// const users = [
//   'standard_user',
//   'locked_out_user',
//   'problem_user',
//   'performance_glitch_user',
//   'error_user',
//   'visual_user'
// ];

// const password = 'secret_sauce';

// test.describe('Login Screenshot for all SauceDemo users', () => {

//   for (const user of users) {
//     test(`Login and screenshot for: ${user}`, async ({ page }) => {
//       await page.goto('https://www.saucedemo.com/');
//       await page.getByPlaceholder('Username').fill(user);
//       await page.getByPlaceholder('Password').fill(password);
//       await page.getByRole('button', { name: 'Login' }).click();

//       // Take screenshot for every user
//       await page.screenshot({ path: `screenshots/${user}.png`, fullPage: true });

//       // Logout for next user
//       if (await page.url().includes('inventory.html')) {
//         await page.click('#react-burger-menu-btn');
//         await page.click('#logout_sidebar_link');
//       }
//     });
//   }
// });


// tests/saucedemo_add_to_cart.spec.js
import { test, expect } from '@playwright/test';

test('Login, screenshot, add Backpack & Bike Light, open cart', async ({ page }, testInfo) => {
  // 1) Login
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify successful login
  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.locator('.title')).toHaveText('Products');

  // 2) Screenshot after successful login (saved in test-artifacts)
  await page.screenshot({
    path: testInfo.outputPath('after-login.png'),
    fullPage: true
  });

  // 3) Add "Sauce Labs Backpack" to cart
  // Most stable selector: data-test
  await page.locator('//button[@data-test="add-to-cart-sauce-labs-backpack"]').click();


  // 4) Add "Sauce Labs Bike Light" to cart
  await page.locator('//button[@data-test="add-to-cart-sauce-labs-bike-light"]').click();

  // Optional: badge shows 2
  await expect(page.locator('//a[@data-test="shopping-cart-link"]')).toHaveText('2');

  // 5) Open the cart using class="shopping_cart_link"
  await page.click(('//a[@data-test="shopping-cart-link"]'));
  await expect(page).toHaveURL(/cart\.html/);

  // Verify both items are present in the cart
  const itemNames = page.locator('//div[@class="inventory_item_name"]');
  await expect(itemNames).toContainText([
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light'
  ]);

  // Optional: cart page screenshot
  await page.screenshot({
    path: testInfo.outputPath('cart.png'),
    fullPage: true
  });
});


