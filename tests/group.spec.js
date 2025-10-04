import { test, expect } from '@playwright/test'

test.describe("group1", async () => {
  test("test1", async () => {
    console.log("test 1 started successfully")
  })

  test("test2", async () => {
    console.log("test 2 started successfully")
  })

  test("test3", async () => {
    console.log("test 3 started successfully")
  })
})

test.describe("group2", async () => {
  test("test4", async () => {
    console.log("test 4 started successfully")
  })

  test("test5", async () => {
    console.log("test 5 started successfully")
  })
})
