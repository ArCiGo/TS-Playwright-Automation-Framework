import { Locator, Page } from '@playwright/test';

export class GoogleResultsPage {

    // Elements
    readonly page: Page;
    readonly resultStatsLabel: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.resultStatsLabel = page.locator('//div[@id="result-stats" and contains(text(), "Cerca")]');
    }
}