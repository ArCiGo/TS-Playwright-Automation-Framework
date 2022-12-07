import { expect, Locator, Page } from '@playwright/test';

export class SLProductPage {

    // Elements
    readonly page: Page;
    readonly titleHeader: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.titleHeader = page.locator('.title');
    }

    // Actions
    async headerIsDisplayed() {
        // await expect(this.titleHeader).toBeVisible();
        return await this.titleHeader.isVisible();
    }
}