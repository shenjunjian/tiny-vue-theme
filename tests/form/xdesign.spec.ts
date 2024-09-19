import { expect, test } from '@playwright/test'

test.describe('form组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('form#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')
  })

  test('行内表单--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('form#form-in-row')
    const demo = page.locator('#form-in-row .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('inline.png')
  })

  test('标签位置--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('form#label-position')
    const demo = page.locator('#label-position .pc-demo')
    const form = demo.locator('form')
    const btn = demo.locator('button').filter({ hasText: 'top' })
    await btn.click()
    await expect(form).toBeInViewport()
    await expect(form).toHaveScreenshot('top.png')
  })

  test('校验--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('form#form-validation')
    const demo = page.locator('#form-validation .pc-demo')
    const btn = demo.locator('button').filter({ hasText: '提交' })
    await btn.click()
    await expect(demo).toBeInViewport()
    await page.locator('button').filter({ hasText: '确定' }).nth(1).click()
    await expect(demo).toHaveScreenshot('tip-validate.png')
  })

  test('text校验--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('form#validate-type')
    const demo = page.locator('#validate-type .pc-demo')
    const form = demo.locator('form')
    await expect(form).toBeInViewport()
    await expect(form).toHaveScreenshot('text-validate.png')
  })

  test('尺寸--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('form#size')
    const demo = page.locator('#size .pc-demo')
    const form = demo.locator('form')
    await expect(form).toBeInViewport()
    await demo.locator('button').filter({ hasText: 'medium' }).click()
    await expect(form).toHaveScreenshot('medium.png')
    await demo.locator('button').filter({ hasText: 'small' }).click()
    await expect(form).toHaveScreenshot('small.png')
    await demo.locator('button').filter({ hasText: 'mini' }).click()
    await expect(form).toHaveScreenshot('mini.png')
  })

  test('禁用--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('form#form-disabled')
    await page.setViewportSize({
      width: 1400,
      height: 1500
    })
    const demo = page.locator('#form-disabled .pc-demo')
    const form = demo.locator('form')
    await demo.locator('.tiny-switch').first().click()
    await expect(form).toBeInViewport()
    await expect(form).toHaveScreenshot('disabled.png')
  })

  test('仅展示--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('form#display-only')
    page.setViewportSize({
      width: 1400,
      height: 1500
    })
    const demo = page.locator('#display-only .pc-demo')
    const form = demo.locator('form')
    await expect(form).toBeInViewport()
    await expect(form).toHaveScreenshot('display-only.png')
  })


  test('额外提示--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('form#extra-tip')
    const demo = page.locator('#extra-tip .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('extra-tip.png')
  })

})
