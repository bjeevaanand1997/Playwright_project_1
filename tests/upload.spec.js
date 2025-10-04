import { test, expect } from "@playwright/test";

test("single upload", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Point to the actual file you want to upload
  await page
    .locator('//input[@id="singleFileInput"]')
    .setInputFiles("C:/Users/hariharan/Downloads/Playwright.txt");

  await page.locator("//button[text()='Upload Single File']").click();

  // The selected file name should be in the status message
  await expect(
    page.locator("//p[@id='singleFileStatus']")
  ).toContainText("Single file selected: Playwright");

  await page.pause();
});

test.only("multiple upload", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page
    .locator('//input[@id="multipleFilesInput"]')
    .setInputFiles([
      "C:/Users/hariharan/Downloads/Playwright.txt",
      "C:/Users/hariharan/Downloads/Playwright tool.txt"
    ]);

  await page.locator("//button[text()='Upload Multiple Files']").click();

  await page.pause();
});
