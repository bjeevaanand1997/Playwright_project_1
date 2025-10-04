
// import { test, expect } from '@playwright/test';

// test("home page", async ({ page }) => {
//     await page.goto('https://www.amazon.in/');
//     await page.screenshot({
//         path: `C:/Users/gajendran/vscodes/playwrightbatch5/screenshot_${Date.now()}.png`
//     });
// });


import { test, expect } from '@playwright/test';

test('single item screenshot', async ({ page }) => {
    await page.goto('https://www.amazon.in/');

    // Change the selector below to match the element you want to capture.
    // For example, to target the first product image in the "Trending products" section:
    const element = await page.locator('img[alt][src*="71maWZxfc1L._AC_SY175_.jpg"]'); // Edit selector as needed

    await element.screenshot({
        path: `C:/Users/hariharan/item_screenshot_${Date.now()}.png`
    });
});
