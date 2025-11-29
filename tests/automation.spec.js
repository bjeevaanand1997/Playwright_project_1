// // tests/blogspot_full_page.spec.js
// import { test, expect } from '@playwright/test';

// test('End-to-end GUI Elements, Alerts, Windows, Hover & Double-Click', async ({ page, context }, testInfo) => {
//   await page.goto('https://testautomationpractice.blogspot.com/', { waitUntil: 'domcontentloaded' });

//   // ---------- GUI Elements: Text inputs ----------
//   await page.getByPlaceholder('Enter Name').fill('Jeeva Anand');          // Name
//   await page.getByPlaceholder('Enter EMail').fill('jeeva@example.com');   // Email
//   await page.getByPlaceholder('Enter Phone').fill('9876543210');          // Phone
//   await page.getByLabel('Address:').fill('123, MG Road, Chennai');        // Address (label is present)

//   // ---------- Radio & Checkboxes ----------
//   await page.locator('input[name="gender"][value="male"]').check();
//   await page.getByLabel('Monday').check();
//   await page.getByLabel('Wednesday').check();
//   await page.getByLabel('Saturday').check();

//   // ---------- Dropdowns (single & multi-select) ----------
//   // Country (single select)
//   await page.getByLabel('Country:').selectOption({ label: 'United States' });
//   // Colors (multi-select) — hold Ctrl/Cmd internally
//   await page.getByLabel('Colors:').selectOption([
//     { label: 'Red' },
//     { label: 'Blue' },
//   ]);
//   // Sorted List (multi-select)
//   await page.getByLabel('Sorted List:').selectOption([{ label: 'Dog' }, { label: 'Cat' }]);

//   // ---------- Date pickers ----------
//   // Tip: these inputs accept typing directly; use page.keyboard to ensure format.
// // ---------- Date pickers (fixed locators) ----------

// // Date Picker 1 (mm/dd/yyyy)
// // ---------- Date pickers (fixed & working) ----------

// // Date Picker 1 (mm/dd/yyyy)
// // Date Picker 1 (mm/dd/yyyy)
// const date1 = page.locator('#datepicker');
// await date1.waitFor({ state: 'visible' });
// await date1.scrollIntoViewIfNeeded();
// await date1.click({ clickCount: 3 });
// await date1.fill('12/31/2025');
// await expect(date1).toHaveValue('31/12/2025');

// // Date Picker 2 (dd/mm/yyyy)  ← fixed
// const date2 = page.locator('#txtDate');
// await date2.waitFor({ state: 'visible' });
// await date2.scrollIntoViewIfNeeded();
// await date2.click({ clickCount: 3 });
// await date2.fill('31/12/2025');
// await expect(date2).toHaveValue('31/12/2025');

// // Date range (dd-mm-yyyy)
// const from = page.locator('#from');
// const to   = page.locator('#to');
// await from.scrollIntoViewIfNeeded();
// await from.fill('01-01-2026');
// await to.fill('10-01-2026');
// await expect(from).toHaveValue('01-01-2026');
// await expect(to).toHaveValue('10-01-2026');


//   // ---------- Dynamic Button ----------
//   // Button text usually starts as START and flips to STOP; verify toggle.
//   const dynBtn = page.getByRole('button', { name: /^start$/i });
//   await dynBtn.click();
//   await expect(page.getByRole('button', { name: /^stop$/i })).toBeVisible();

//   // ---------- Alerts & Popups ----------
//   // Simple alert
//   page.once('dialog', d => d.accept());
//   await page.getByRole('button', { name: 'Simple Alert' }).click();

//   // Confirmation alert (dismiss)
//   page.once('dialog', d => d.dismiss());
//   await page.getByRole('button', { name: 'Confirmation Alert' }).click();

//   // Prompt alert (send text + accept)
//   page.once('dialog', d => d.accept('Hello from Playwright'));
//   await page.getByRole('button', { name: 'Prompt Alert' }).click();

//   // ---------- New Tab ----------
//   const [newTab] = await Promise.all([
//     context.waitForEvent('page'),
//     page.getByRole('button', { name: 'New Tab' }).click(),
//   ]);
//   await newTab.waitForLoadState();
//   // Optional check & close
//   await newTab.close();

//   // ---------- Popup Window ----------
//   const [popup] = await Promise.all([
//     context.waitForEvent('page'),
//     page.getByRole('button', { name: 'Popup Windows' }).click(),
//   ]);
//   await popup.waitForLoadState();
//   await popup.close();

//   // ---------- Mouse Hover Menu ----------
//   await page.getByRole('button', { name: 'Point Me' }).hover();
//   // Usually reveals a small menu; click first item if present
//   const hoverMenuFirst = page.getByRole('link').filter({ hasText: /link 1|Top|Home/i }).first();
//   if (await hoverMenuFirst.isVisible().catch(() => false)) {
//     await hoverMenuFirst.click();
//     await page.goBack(); // return to main page if navigation happened
//   }

//   // ---------- Double Click section ----------
//   // There’s a Field1 (Hello World!) and a Copy Text button that copies to Field2.
//   const field1 = page.getByLabel('Field1:');
//   const field2 = page.getByLabel('Field2:');
//   await field1.fill('Playwright rocks!');
//   await page.getByRole('button', { name: 'Copy Text' }).dblclick();
//   await expect(field2).toHaveValue('Playwright rocks!');

//   // ---------- Screenshots (artifacts folder) ----------
//   await page.screenshot({ path: testInfo.outputPath('filled-form.png'), fullPage: true });

//   // ---------- Assertions to ensure page behaved as expected ----------
//   // Check some checkboxes are selected
//   await expect(page.getByLabel('Monday')).toBeChecked();
//   // Country value
//   await expect(page.getByLabel('Country:')).toHaveValue(/United States|US|United/);
// });


const { test, expect } = require('@playwright/test');

test('Verify Learn Selenium cell in Static Web Table', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  const learnSeleniumCell = page.locator("//table[@name='BookTable']//td[text()='Learn Selenium']");
  await expect(learnSeleniumCell).toBeVisible();
  const text = await learnSeleniumCell.textContent();
  console.log("✅ Found Cell Text:", text);
  await expect(learnSeleniumCell).toHaveText('Learn Selenium');
});
