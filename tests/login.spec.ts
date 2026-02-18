import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe.parallel('Login Functionality', () => {
  test('should log in successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login();

  });
});
