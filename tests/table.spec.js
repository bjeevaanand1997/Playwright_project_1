import { test, expect } from "@playwright/test";

test("web table handling", async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const table = await page.locator('#productTable');

  // count the column
  const column = await table.locator('thead tr th');
  console.log("Number of column : " + await column.count());

  // count the rows
  const rows = await table.locator('tbody tr');
  console.log("Number of rows : " + await rows.count());


const chk = rows.filter({
  has: page.locator('td'),
  hasText: "Smartwatch"
});

await chk.locator('input').check();

});