import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { NotePage } from '../pages/NotePage';

test.describe.parallel('Note Functionality', () => {
     
  test.beforeEach('should log in successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login();


  });
    test('should create, update, and delete a note', async ({ page }) => {
 
    const notePage = new NotePage(page);
    await notePage.createNote();
    await notePage.updateNote();
    await notePage.deleteNote();

  

  });
});
