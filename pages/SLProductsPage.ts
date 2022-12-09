import { expect, Locator, Page } from '@playwright/test';

export class SLProductPage {

    // Elements
    readonly page: Page;
    readonly titleHeader: Locator;
    readonly itemsText: Locator;
    readonly itemsButton: Locator;
    readonly cartLinkButton: Locator;

    // Constructor
    constructor(page: Page) {
        this.page = page;
        this.titleHeader = page.locator('.title');
        this.itemsText = page.locator('.inventory_item div[class="inventory_item_description"] div[class="inventory_item_name"]');
        this.itemsButton = page.locator('button[class*="btn btn_primary"]');
        this.cartLinkButton = page.locator('.shopping_cart_link')
    }

    // Actions
    async headerIsDisplayed() {
        // await expect(this.titleHeader).toBeVisible();
        return await this.titleHeader.isVisible();
    }

    async addItemsToCart(items: string[]) {
        const listOfItems = await this.itemsText.allTextContents();

        for(var i = 0; i < items.length; i ++) {
            for(var j = 0; j < listOfItems.length; j ++) {
                if(items[i] == listOfItems[j].trim()) {
                    await this.itemsButton.nth(j).click();
                }
            }
        }
    }

    async clickOnShoppingCartButton() {
        await this.cartLinkButton.click();
    }
}