import { test, expect } from '@playwright/test';

const homeUrl = 'https://rahulshettyacademy.com/seleniumPractise/#/';

test.describe('shopping-flow', () => {
  test('browse products and add items to cart', async ({ page }) => {
    await page.goto(homeUrl);
    await expect(page).toHaveTitle(/GreenKart/);

    const productCards = page.locator('.products-wrapper .product');
    await expect(productCards.first()).toBeVisible();
    await expect(productCards).toHaveCount(30);

    await productCards.first().locator('.product-action button').click();
    await expect(page.getByRole('button', { name: 'PROCEED TO CHECKOUT' })).toBeVisible();
  });

  test('view and modify cart contents', async ({ page }) => {
    await page.goto(homeUrl);
    await page.locator('.products-wrapper .product').first().locator('.product-action button').click();
    await page.getByRole('button', { name: 'PROCEED TO CHECKOUT' }).click();

    await expect(page).toHaveURL(/\/cart/);
    await expect(page.getByText(/Items\s*:\s*1/)).toBeVisible();
    await expect(page.locator('body')).toContainText('Brocolli - 1 Kg');

    await page.locator('button').filter({ hasText: '+' }).first().click();
    await expect(page.getByText(/Items\s*:\s*[2-9]/)).toBeVisible();

    await page.locator('button').filter({ hasText: '-' }).first().click();
    await expect(page.locator('body')).toContainText('Brocolli');
  });

  test('reach checkout and confirm order summary', async ({ page }) => {
    await page.goto(homeUrl);
    await page.locator('.products-wrapper .product').nth(0).locator('.product-action button').click();
    await page.locator('.products-wrapper .product').nth(1).locator('.product-action button').click();
    await page.getByRole('button', { name: 'PROCEED TO CHECKOUT' }).click();

    await expect(page).toHaveURL(/\/cart/);
    await expect(page.getByText(/Items\s*:\s*2/)).toBeVisible();
    await expect(page.getByText(/Price\s*:/)).toBeVisible();
    await expect(page.locator('body')).toContainText('Brocolli - 1 Kg');
    await expect(page.locator('body')).toContainText('Cauliflower - 1 Kg');
  });
});
