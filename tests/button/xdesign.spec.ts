import { expect, test } from '@playwright/test'

test.describe('button 组件xdesign规范', () => {
  test('button默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('button#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    // hover时截图
    const btns = await demo.locator('.tiny-button').all()
    let i=1;
    for(const btn of btns){
      await btn.hover()
      await page.waitForTimeout(100)
      await expect(demo).toBeInViewport()
      await expect(demo).toHaveScreenshot({threshold:10})
      i++
    }
  })

  test('幽灵--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('button#ghost')
    const demo = page.locator('#ghost .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    // hover时截图
    const btns = await demo.locator('.tiny-button').all()
    let i=1;
    for(const btn of btns){
      await btn.hover()
      await page.waitForTimeout(100)
      await expect(demo).toBeInViewport()
      await expect(demo).toHaveScreenshot({threshold:10})
      i++
    }
  })

  test('动态禁用--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('button#dynamic-disabled')
    const demo = page.locator('#dynamic-disabled .pc-demo')
    await page.waitForTimeout(100)
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('dynamic-disabled1.png')

    const switchBtn = demo.locator('.tiny-switch')
    await switchBtn.click()
    await page.waitForTimeout(100)
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('dynamic-disabled2.png')
  })

  test('图标--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('button#icon')
    const demo = page.locator('#icon .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('icon.png')
  })

  test('文字--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('button#text')
    const demo = page.locator('#text .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('text.png')
  })

  test('加载--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('button#loading')
    const demo = page.locator('#loading .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('loading.png')
  })

  test('尺寸--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('button#size')
    const demo = page.locator('#size .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('size.png')
  })
})
