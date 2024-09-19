import { expect, test } from '@playwright/test'

test.describe('input组件xdesign规范', () => {
  test('button默认--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('button#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    // hover时截图
    const btns = await demo.locator('.tiny-button').all()
    btns.forEach(async (btn, i) => {
      await btn.hover()
      await expect(demo).toBeInViewport()
      await expect(demo).toHaveScreenshot(`basic-usage-hover${i}.png`)
    })
  })

  test('幽灵--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('button#ghost')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    // hover时截图
    const btns = await demo.locator('.tiny-button').all()
    btns.forEach(async (btn, i) => {
      await btn.hover()
      await expect(demo).toBeInViewport()
      await expect(demo).toHaveScreenshot(`ghost-hover${i}.png`)
    })
  })

  test('动态禁用--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('button#dynamic-disabled')
    const demo = page.locator('#dynamic-disabled .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('dynamic-disabled1.png')

    const switchBtn = demo.locator('.tiny-switch')
    await switchBtn.click()
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('dynamic-disabled2.png')
  })
})
