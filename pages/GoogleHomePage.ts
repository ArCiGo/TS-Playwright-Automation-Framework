import { Locator, Page } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export class GoogleHomePage {

    // Elements
    readonly page: Page;
    readonly searchField: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.searchField = page.locator('input[name="q"]');
    }

    // Actions
    async goTo() {
        await this.page.goto(process.env.BASE_URL as string)
    }

    async search(value: string) {
        await this.searchField.type(value);
        await this.page.keyboard.press('Enter');
    }
}