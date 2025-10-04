import {test,expect} from '@playwright/test'

// test("single select dropdown",async({page})=>{

//     await page.goto("https://testautomationpractice.blogspot.com/")

//     // const cnt = await page.locator('//select[@id="country"]/option').count()
//     // console.log("count of dropdown : ",cnt)

//     // const text =await page.locator('//select[@id="country"]').textContent()
//     // console.log(text)

//     await page.locator('//select[@id="country"]').selectOption("France")
//     // await page.locator('//select[@id="country"]').selectOption({value:"uk"})

//     // await page.locator('//select[@id="country"]').selectOption({index:7})

//     await page.pause()
// })

test("Multiple select",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//select[@id="colors"]').selectOption(["red","blue","white"])

    await page.pause()
})


test("let code with Jeeva pratice",async({page})=>{

    await page.goto("https://letcode.in/dropdowns")

    await page.locator('//select[@id="colors"]').selectOption(["red","blue","white"])

    await page.pause()
})

