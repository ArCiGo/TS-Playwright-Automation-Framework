import { test, expect } from '@playwright/test';

import { SLLoginPage } from '../pages/SLLoginPage';
import { SLProductPage } from '../pages/SLProductsPage';

let slLoginPage: SLLoginPage;
let slProductPage: SLProductPage;

test.beforeEach(async ({ page }) => {
    slLoginPage = new SLLoginPage(page);
    slProductPage = new SLProductPage(page);

    await slLoginPage.goTo();
});

test('as a user I should be able to print all items in the page', async() => {
    let items: string[] = ['Test.allTheThings() T-Shirt (Red)', 'Sauce Labs Backpack']

    await slLoginPage.fillLoginForm('standard_user', 'secret_sauce');
    await slProductPage.addItemsToCart(items);
});