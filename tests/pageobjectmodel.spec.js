import { test, expect } from '@playwright/test'
import Orange from './js/orangehrm'

test("pom", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/")

  const print = new Orange(page)
  print.login("Admin", "admin123")

  await page.pause()
})
