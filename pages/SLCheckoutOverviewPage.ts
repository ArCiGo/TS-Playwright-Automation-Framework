import { Locator, Page } from '@playwright/test';

export class SLCheckoutOverviewPage {

    // Elements
    readonly page: Page;
    readonly totalLabel: Locator;
    readonly finishButton: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.totalLabel = page.locator('.summary_total_label');
        this.finishButton = page.locator('#finish');
    }

    // Actions
    async getTotalText() {
        return await this.totalLabel.textContent();
    }

    async clickOnFinishButton() {
        await this.finishButton.click();
    }
}