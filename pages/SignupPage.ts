import { Page, Locator } from '@playwright/test';
const fs=require('fs');
const path = require('path');

export class SignupPage {
  private page: Page;
  private emailInput: Locator;
  private passwordInput: Locator;
  private nameInput: Locator;
  private confirmpasswordInput: Locator;
  private registerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
     this.nameInput = page.locator('#name');
     this.confirmpasswordInput = page.locator('#confirmPassword');
    this.registerButton = page.locator("button[type='submit']");
  }
   async goto(): Promise<void> {
    await this.page.goto('https://practice.expandtesting.com/notes/app/register');
  }

  async signup(): Promise<void> {
    const credentialsPath = path.join(__dirname, '../cred.json');
    const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf-8'));
  
    await this.emailInput.fill(credentials.email);
    await this.passwordInput.fill(credentials.password);
    await this.nameInput.fill(credentials.name);
    await this.confirmpasswordInput.fill(credentials.confirmPassword);
    await this.registerButton.click();
  }
}
