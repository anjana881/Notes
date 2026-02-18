import { test, expect } from '@playwright/test';

import { SignupPage } from '../pages/SignupPage';


test.describe.parallel('Signup Functionality', () => {
  test('should signup successfully with valid credentials', async ({ page }) => {
    const signupPage = new SignupPage(page);
    await signupPage.goto();
    await signupPage.signup();
    
  });
});
