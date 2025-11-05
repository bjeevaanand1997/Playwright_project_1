// tests/saucedemo.spec.js
const { test, expect } = require('@playwright/test');

test('Login and verify product page', async ({ page }) => {
  // Navigate to the site
  await page.goto('https://www.saucedemo.com/');

  // Fill in login credentials
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // Click login
  await page.click('#login-button');

  // Verify we're on the inventory page
  await expect(page).toHaveURL(/.*inventory.html/);

  // Check that products are visible
  const productTitles = await page.locator('.inventory_item_name').allTextContents();
  console.log('Products found:', productTitles);

  // Assert at least one product is listed
  expect(productTitles.length).toBeGreaterThan(0);
});
