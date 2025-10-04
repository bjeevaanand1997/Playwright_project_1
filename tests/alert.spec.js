import {test,expect} from '@playwright/test'

// test("simple alert", async({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/")

//     page.on ('dialog',async dialog=>{
//         console.log(dialog.type())
//         console.log(dialog.message())
//         expect (dialog.message("i am an alert box"))
//         await dialog.accept()
//     })

//     await page.click('//button[@id="alertBtn"]')
// })

// test("confirmation alert", async({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/")

//     page.on('dialog',async dialog=>{
//         console.log(dialog.type())
//         await dialog.dismiss()
//     })
//     await page.click('//button[@id="confirmBtn"]')
//     await expect(page.locator('//p[@id="demo"]')).toHaveText("you pressed cancel!")

//     await page.pause()
// })

test("Prompt alert", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async dialog =>{
        console.log(dialog.type())
        await dialog.accept("Jeeva")
    })

    await page.click('//button[@id="promptBtn"]')
    

})