import { test, expect } from '@playwright/test';

test.only("page navigation",async({page})=>{
    await page.goto("https://www.amazon.in/")
    consst searchbar = await page.locator("//input[@id='twotabsearchtextbox']")
    await searchbar.click();
    await page.keyboard.down('Shift');
    await page.keyboard.press('A');
    await page.keyboard.up('Shift');
    await page.keyboard.type("abchjadjn");
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000)
});
