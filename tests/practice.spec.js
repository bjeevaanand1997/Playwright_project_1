// // 

// import { test, expect } from '@playwright/test';

// test('iframe', async ({ page }) => {
//   // load page that contains the iframe
//   await page.goto('https://ui.vision/demo/webtest/frames/');

//   // wait until at least one iframe is attached (optional but helpful)
//   await page.waitForSelector('iframe');

//   // simple (first iframe). Narrow selector if needed: 'iframe[src*="frame_1.html"]'
//   const frameLocator = page.frameLocator('iframe');


//   // fill the input inside the iframe
//   await frameLocator.locator('input[name="mytext1"]').fill('Playwright');

//   await page.pause();
// })

import { test, expect } from '@playwright/test';

// test('i-frame', async ({ page }) => {
//   await page.goto('https://ui.vision/demo/webtest/frames/');

//   // Access the frame by its URL
//   const frame = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });

//   // Fill the input field inside the frame
//   await frame.locator('//input[@name="mytext1"]').fill('Playwright');

//   // Optional: Pause for interactive debugging (can be removed if not needed)
//   await page.pause();
// })

// test.only('child frame', async ({ page }) => {
//     await page.goto("https://ui.vision/demo/webtest/frames/")

//     const frame = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3.html" })

//     await frame.locator('//input[@name="mytext3"]').fill("playwright")

//     let child = await frame.childFrames()

//     await child[0].locator('(//div[@class="AB7Lab Id5V1"])[2]').check()

//     await page.pause()
// })

test.only("page navigation",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.waitForTimeout(2000)

    await page.goto("https://chatgpt.com/")

    await page.goBack()

    await page.waitForTimeout(2000)

    await page.goForward()

    await page.waitForTimeout(2000)
    
})


import { test, expect } from '@playwright/test';

