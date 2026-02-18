import { Page, expect, Locator } from "@playwright/test";

export default class FormHelper{
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }


// Wait for a specified time (in milliseconds)
  async waitTime(time: number): Promise<void> {
    await this.page.waitForTimeout(time);
  }

  // Click element
  async clickElement(locator: Locator): Promise<void> {
    await locator.click();
  }
 
  // Fill input fields
  async fillInputField(locator: Locator, text: string): Promise<void> {
    await locator.fill(text);
  }
  // Verifies that an element is visible.
  async verifyElementVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }
}
