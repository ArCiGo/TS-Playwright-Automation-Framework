import { Locator, Page } from '@playwright/test';

export class SLLoginPage {

    // Elements
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('#user-name');
        this.passwordField = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    // Actions
    async goTo() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async fillLoginForm(username: string, password: string) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
        // await this.clickOnLoginButton();
    }

    async clickOnLoginButton() {
        await Promise.all([
            this.page.waitForNavigation(),
            this.loginButton.click()
        ]);
    }
}