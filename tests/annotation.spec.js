import {test ,expect} from "@playwright/test"

//only | Skip | Fail | fixme |slow 

// test("demo test ", async()=> {
//     await expect(2).toBe(2)

// })

// test.fixme("demo test1",async()=>{
//     await expect(2).toBe(2)
// })

// fix me is pass the test case but indicate to fix the error in the future '

test("navigation",async ({page})=>{
    test.slow()
    await page.goto("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
})