import { expect, test } from '@playwright/test'

test.describe('modal 组件xdesign规范', () => {
  test('弹窗--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('modal#basic-usage')
    const demo = page.locator('#basic-usage .pc-demo')
    await expect(demo).toBeInViewport()

    const lastModal = page.locator('.tiny-modal .tiny-modal__box').last()

    // 循环点击截图
    const btns = await demo.locator('.tiny-button').all()
    let i = 1
    for (const btn of btns) {
      await btn.click()
      await page.waitForTimeout(100)
      await expect(lastModal).toHaveScreenshot({ threshold: 10 })
      await lastModal.locator('.tiny-button').first().click()
      await page.waitForTimeout(10)
      i++
    }
  })

  test('消息--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('modal#status')
    const demo = page.locator('#status .pc-demo')
    await expect(demo).toBeInViewport()

    const lastModal = page.locator('.tiny-modal .tiny-modal__box').last()

    // 循环点击截图
    const btns = await demo.locator('.tiny-button').all()
    let i = 1
    for (const btn of btns) {
      await btn.click()
      await page.waitForTimeout(100)
      await expect(lastModal).toHaveScreenshot({ threshold: 10 })
      await page.waitForTimeout(3000) // 等自动消息
      i++
    }
  })
})
