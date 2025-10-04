import {test ,expect} from "@playwright/test"

test("window handling",async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_open")
    
    const[newPage] = await Promise.all([
        context.waitForEvent("page"),
        
    ])
})