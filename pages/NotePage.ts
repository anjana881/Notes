import { Page, Locator } from '@playwright/test';
import FormHelper from '../utils/formHelpers';
const fs = require('fs');
const path = require('path');


export class NotePage {
    private page: Page;
    private addNoteButton: Locator;
    private titleInput: Locator;
    private descriptionInput: Locator;
    private createButton: Locator;
    private editNoteButton: Locator;
    private editedTitleInput: Locator;
    private editedDescriptionInput: Locator;
    private updateButton: Locator;
    private deleteNoteButton: Locator;
    private submitdelete: Locator;
    formHelper: FormHelper;

    constructor(page: Page) {
        this.page = page;
        this.formHelper = new FormHelper(page);
        this.addNoteButton = page.locator('.btn.btn-primary.mt-3.mt-lg-0');
        this.titleInput = page.locator('#title');
        this.descriptionInput = page.locator('#description');
        this.createButton = page.locator("button[data-testid='note-submit']");
        this.editNoteButton = page.locator("button[data-testid='note-edit']").first();
        this.editedTitleInput = page.locator('#title');
        this.editedDescriptionInput = page.locator('#description');
        this.updateButton = page.locator("button[data-testid='note-submit']");
        this.deleteNoteButton = page.locator("button[data-testid='note-delete']").first();
        this.submitdelete = page.locator(".btn.btn-danger");

    }
    async createNote(): Promise<void> {
        const notePath = path.join(__dirname, '../Note.json');
        const notes = JSON.parse(fs.readFileSync(notePath, 'utf-8'));
        await this.formHelper.clickElement(this.addNoteButton);
        await this.titleInput.fill(notes.title);
        await this.descriptionInput.fill(notes.description);
        await this.formHelper.clickElement(this.createButton);


    }

    async updateNote(): Promise<void> {
        const notePath = path.join(__dirname, '../Note.json');
        const notes = JSON.parse(fs.readFileSync(notePath, 'utf-8'));
        await this.editNoteButton.click()
        // await this.formHelper.clickElement(this.editNoteButton);
        await this.editedTitleInput.fill(notes.editedTitle);
        await this.editedDescriptionInput.fill(notes.editedDescription);
        await this.updateButton.click()
        // await this.formHelper.clickElement(this.updateButton);


    }
    async deleteNote(): Promise<void> {

        await this.formHelper.clickElement(this.deleteNoteButton);
        await this.formHelper.clickElement(this.submitdelete);


    }
}
