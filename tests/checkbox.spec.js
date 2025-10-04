import {test,expect} from '@playwright/test'

test("radiobutton",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="male"]').check()

    await expect(page.locator('//input[@id="male"]')).toBeChecked()

})

// test("Multiple checkbox",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     await page.locator('//input[@id="monday"]').check

//     await expect(page.locator('//input[@id="monday"]')).toBeChecked()

// })

 test("Multiple checkbox",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    
    const locat =['//input[@id="monday"]','//input[@id="wednesday"]','//input[@id="friday"]']

    for(let print of locat){
        await page.locator(print).check()
        await expect(page.locator(print)).toBeChecked()

    }

    await page.pause()
 })