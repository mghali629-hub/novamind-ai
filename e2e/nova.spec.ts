import { test, expect } from '@playwright/test';

test.describe('NovaMind AI E2E Test Suite', () => {
  test('should display homepage and execute AI inference', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=NovaMind AI')).toBeVisible();
    await page.click('button:has-text("Execute Neural API Inference")');
    await expect(page.locator('text=API Saved DB Output:')).toBeVisible();
  });
});
