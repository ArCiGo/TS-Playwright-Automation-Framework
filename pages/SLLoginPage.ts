import { Locator, Page } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export class SLLoginPage {

    // Elements
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly errorMessageLabel: Locator;
    readonly botImage: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('#user-name');
        this.passwordField = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessageLabel = page.locator('[data-test="error"]');
        this.botImage = page.locator('.bot_column');
    }

    // Actions
    async goTo() {
        await this.page.goto(process.env.BASE_URL as string);
    }

    async fillLoginForm(username: string, password: string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessageLabel.textContent();
    }

    async botImageIsDisplayed() {
        return await this.botImage.isVisible();
    }
}