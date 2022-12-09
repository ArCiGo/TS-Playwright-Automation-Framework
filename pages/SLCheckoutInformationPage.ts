import { Locator, Page } from "@playwright/test";

export class SLCheckoutInformationPage {

    // Elements
    readonly page: Page;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly zipCodeField: Locator;
    readonly continueButton: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.firstNameField = page.locator('#first-name');
        this.lastNameField = page.locator('#last-name');
        this.zipCodeField = page.locator('#postal-code');
        this.continueButton = page.locator('[data-test="continue"]');
    }

    // Actions
    async fillCheckoutForm(firstName: string, lastname: string, zipCode: string) {
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastname);
        await this.zipCodeField.fill(zipCode);
        await this.continueButton.click();
    }
}