// import { test, expect} from '@playwright/test';

// test("multiple tabs", async () => {
//     const browser = await chromium.launch()
//     const context = await browser.newContext()
//     const page1 = await context.newPage()
//     const page2 = await context.newPage()

//     await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     await page1.waitForTimeout(3000)
//     console.log(await page1.title())

//     await page2.goto("https://testautomationpractice.blogspot.com/")
//     await page2.waitForTimeout(3000)
//     console.log(await page2.title())
// })

// test.only("handling multiple tabs", async () => {
//     const browser = await chromium.launch();
//     const context = await browser.newContext();
//     const page = await context.newPage();

//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//     await page.waitForTimeout(5000);
//     console.log(await page.title());

//     const [newpage] = await Promise.all([
//         context.waitForEvent('page'),
//         page.locator("//a[text()='OrangeHRM, Inc']").click()
//     ]);

//     await newpage.waitForLoadState();
//     console.log(await newpage.title());
// });

import { test, chromium } from '@playwright/test';

test.only("handling multiple tabs", async () => {
    const browser = await chromium.launch({ headless: false }); // see the browser
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.waitForTimeout(5000);
    console.log(await page.title());

    const [newpage] = await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('link', { name: 'OrangeHRM, Inc' }).click()
    ]);

    await newpage.waitForLoadState();
    console.log(await newpage.title());

    await browser.close();
});
