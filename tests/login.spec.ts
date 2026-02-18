import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
// import { DashboardPage } from '../pages/DashboardPage';

test.describe('Login Functionality', () => {
  test('should log in successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login();

    // Server-side (Node.js/Express Example)
// const jwt = require('jsonwebtoken');
// const user = { id: 123 };  // Example user
// const token = jwt.sign(user, 'your-secret-key', { expiresIn: '1h' });

// res.cookie('auth_token', token, { httpOnly: true, secure: true });
// res.send({ message: 'Login successful' });

    // const dashboardPage = new DashboardPage(page);
    // await expect(dashboardPage.userProfile).toBeVisible();
  });
});
