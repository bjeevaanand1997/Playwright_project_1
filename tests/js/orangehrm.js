class Orange {
  constructor(page) {
    this.page = page
    this.username = page.locator('//input[@name="username"]')
    this.password = page.locator('//input[@name="password"]')
    this.log = page.locator('//button[@type="submit"]')
  }

  async login(uname, pword) {
    await this.username.fill(uname)
    await this.password.fill(pword)
    await this.log.click()
  }
}

export default Orange;
