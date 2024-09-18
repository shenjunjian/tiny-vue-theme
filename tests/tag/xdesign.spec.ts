import { expect, test } from '@playwright/test'

test.describe('tag 组件xdesign规范', () => {
  test('尺寸--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('tag#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage-size.png')
  })

  test('主题--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('tag#effect')
    const demo = page.locator('#effect .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('effect.png')
  })

  test('禁用--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('tag#disabled')
    const demo = page.locator('#disabled .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('disabled.png')
  })

  test('删除--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('tag#delete')
    const demo = page.locator('#delete .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('delete.png')
  })

  test('图标--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('tag#slot-default')
    const demo = page.locator('#slot-default .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('icon.png')
  })
})
