import { Locator, Page } from '@playwright/test';

export class SLCheckoutCompletePage {

    // Elements
    readonly page: Page;
    readonly thanksHeader: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.thanksHeader = page.locator('.complete-header');
    }

    // Actions
    async getThanksText() {
        return await this.thanksHeader.textContent();
    }
}