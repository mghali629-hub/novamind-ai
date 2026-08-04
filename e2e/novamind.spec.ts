import { test, expect } from '@playwright/test';

test.describe('NovaMind AI Foundation E2E Automation Suite', () => {
  test('should load novamind landing page', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=NovaMind AI')).toBeVisible();
  });

  test('should navigate to foundation models catalog', async ({ page }) => {
    await page.goto('/models');
    await expect(page.locator('text=Foundation Models Catalog')).toBeVisible();
  });

  test('should navigate to interactive neural playground', async ({ page }) => {
    await page.goto('/playground');
    await expect(page.locator('text=NovaMind AI Playground')).toBeVisible();
  });
});
