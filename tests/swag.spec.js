import { test, expect } from '@playwright/test';

test('E2E - SauceDemo purchase flow', async ({ page }) => {

  // Step 1: Go to site
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Verify successful login
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('.title')).toHaveText('Products');

  // Step 3: Add item to cart
  await page.click('#add-to-cart-sauce-labs-backpack');
  await page.click('.shopping_cart_link');

  // Verify item is added
  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

  // Step 4: Checkout
  await page.click('#checkout');
  await page.fill('#first-name', 'Jeeva');
  await page.fill('#last-name', 'Anand');
  await page.fill('#postal-code', '600001');
  await page.click('#continue');

  // Verify order summary
  await expect(page.locator('.summary_total_label')).toContainText('Total');

  // Step 5: Finish purchase
  await page.click('#finish');
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');

  // Step 6: Take screenshot
  await page.screenshot({ path: 'order_confirmation.png', fullPage: true });
});
