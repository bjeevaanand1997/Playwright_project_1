import {test,expect} from "@playwright/test";


test("keyboard action", async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.fill('#name', 'trend@gmail.com');
  await page.keyboard.press('Control+A');
  await page.keyboard.press('Control+X');
  await page.keyboard.down('Tab');
  await page.keyboard.press('Control+V');
  await page.keyboard.press('Shift+Tab');
  await page.keyboard.insertText("Trendnologies");
  await page.keyboard.press('Tab'); // Goes to Email
  // 
  await page.keyboard.press('Tab'); // Goes to Phone

  await page.waitForTimeout(3000);
});
