import { expect, test } from '@playwright/test'

test.describe('alert 组件xdesign规范', () => {
  test('默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('alert#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    await demo.locator('svg').nth(1).hover()
    await expect(demo).toHaveScreenshot('hover.png')
  })

  test('尺寸--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('alert#size')
    const demo = page.locator('#size .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('size.png')
  })
  test('自定义标题--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('alert#title')
    const demo = page.locator('#title .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('title.png')
  })
  test('文字居中--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('alert#center')
    const demo = page.locator('#center .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('center.png')
  })
  test('自定义图标--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('alert#icon')
    const demo = page.locator('#icon .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('icon.png')
  })
  test('自定义交互--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('alert#icon')
    const demo = page.locator('#icon .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('icon.png')
  })

  test('是否显示图标--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('alert#show-icon')
    const demo = page.locator('#show-icon .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('show-icon.png')
  })
  test('关闭按钮--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('alert#custom-close')
    const demo = page.locator('#custom-close .pc-demo')
    await page.waitForTimeout(1000)
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('custom-close.png')
  })
  test('自定义类名--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('alert#custom-class')
    const demo = page.locator('#custom-class .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('custom-class.png')
  })
})
