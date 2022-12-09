import { Locator, Page } from "@playwright/test";

export class SLCartPage {
    
    // Elements
    readonly page: Page;
    readonly itemsDescriptionText: Locator;
    readonly checkoutButton: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.itemsDescriptionText = page.locator('.inventory_item_name');
        this.checkoutButton = page.locator('[data-test="checkout"]');
    }

    // Actions
    async verifyItemsOnCart(items: string[]) {
        const listOfItems = await this.itemsDescriptionText.allTextContents();

        for(var i = 0; i < items.length; i ++) {
            for(var j = 0; j < listOfItems.length; j ++) {
                if(items[i] === listOfItems[j].trim()) {
                    return true;
                }
            }
        }
    }

    async clickOnCheckoutButton() {
        await this.checkoutButton.click();
    }
}