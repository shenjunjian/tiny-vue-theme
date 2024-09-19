import { expect, test } from '@playwright/test'

test.describe('pager组件xdesign规范', () => {
  test('默认与悬浮态--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('pager#page-size')
    const demo = page.locator('#page-size .pc-demo')
    await expect(demo).toBeInViewport()
    await expect(demo).toHaveScreenshot('basic-usage.png')

    // 页码大小悬浮状态
    const sizes = demo.locator('.tiny-pager__sizes')
    await expect(demo).toBeInViewport()
    await sizes.hover()
    await expect(demo).toHaveScreenshot('sizes-hover.png')
    // 上一页悬浮状态
    const prev = demo.locator('.tiny-pager__btn-prev')
    await expect(demo).toBeInViewport()
    await prev.hover()
    await expect(demo).toHaveScreenshot('prev-hover.png')
    // 页码悬浮状态
    const item = demo.locator('.tiny-pager__pages li').filter({ hasText: '20' })
    await expect(demo).toBeInViewport()
    await prev.hover()
    await expect(demo).toHaveScreenshot('page-item-hover.png')
    // 下一页悬浮状态
    const next = demo.locator('.tiny-pager__btn-next')
    await expect(demo).toBeInViewport()
    await next.hover()
    await expect(demo).toHaveScreenshot('next-hover.png')
    // 跳转悬浮状态
    const goto = demo.locator('.tiny-pager__goto')
    await expect(demo).toBeInViewport()
    await goto.hover()
    await expect(demo).toHaveScreenshot('goto-hover.png')
   
  })

  test('下拉框--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('pager#page-size')
    const demo = page.locator('#page-size .pc-demo')

    const sizes = demo.locator('.tiny-pager__sizes')
    const popover = page.locator('.tiny-popper.tiny-pager__selector')
    await sizes.click()
    await expect(popover).toBeInViewport()
    await expect(popover).toHaveScreenshot('popper.png')
    await popover.locator('.list-item').nth(2).hover()
    await expect(popover).toHaveScreenshot('popper-item-hover.png')
  })

  test('禁用--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('pager#disabled-and-size')

    const demo = page.locator('#disabled-and-size')
    const mini = demo.locator('.tiny-pager.tiny-pager--mini')
    const pager = demo.locator('.tiny-pager__number').first()
    const switchBtn = demo.locator('.tiny-switch')
    await expect(mini).toHaveScreenshot('mini.png')

    await switchBtn.click()
    await expect(mini).toHaveScreenshot('mini-disabled.png')
    await expect(pager).toHaveScreenshot('pager-disabled.png')

  })

  test('分页模式--UI截图', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('pager#pager-mode')

    const demo = page.locator('#pager-mode')
    const pager = demo.locator('.tiny-pager')
    const btn = demo.locator('.tiny-radio-button')

    await btn.first().click()
    await expect(pager).toHaveScreenshot('pager-number.png')
    await btn.nth(1).click()
    await expect(pager).toHaveScreenshot('pager-simple.png')
    await btn.nth(2).click()
    await expect(pager).toHaveScreenshot('pager-complete.png')
    await btn.nth(3).click()
    await expect(pager).toHaveScreenshot('pager-fixed.png')
    await btn.nth(4).click()
    await expect(pager).toHaveScreenshot('pager-simplest.png')

  })

})
