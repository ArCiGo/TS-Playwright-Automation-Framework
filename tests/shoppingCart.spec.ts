import { test, expect } from '@playwright/test';

import { SLLoginPage } from '../pages/SLLoginPage';
import { SLProductPage } from '../pages/SLProductsPage';
import { SLCartPage } from '../pages/SLCartPage';
import { SLCheckoutInformationPage } from '../pages/SLCheckoutInformationPage';
import { SLCheckoutOverviewPage } from '../pages/SLCheckoutOverviewPage';
import { SLCheckoutCompletePage } from '../pages/SLCheckoutCompletePage';

let slLoginPage: SLLoginPage;
let slProductPage: SLProductPage;
let slCartPage: SLCartPage;
let slCheckoutInformationPage: SLCheckoutInformationPage;
let slCheckoutOverviewPage: SLCheckoutOverviewPage;
let slCheckoutCompletePage: SLCheckoutCompletePage;

test.beforeEach(async ({ page }) => {
    slLoginPage = new SLLoginPage(page);
    slProductPage = new SLProductPage(page);
    slCartPage = new SLCartPage(page);
    slCheckoutInformationPage = new SLCheckoutInformationPage(page);
    slCheckoutOverviewPage = new SLCheckoutOverviewPage(page);
    slCheckoutCompletePage = new SLCheckoutCompletePage(page);

    await slLoginPage.goTo();
});

test('as a user I should be able to print all items in the page', async() => {
    let items: string[] = ['Test.allTheThings() T-Shirt (Red)', 'Sauce Labs Backpack']

    await slLoginPage.fillLoginForm('standard_user', 'secret_sauce');
    await slProductPage.addItemsToCart(items);
    await slProductPage.clickOnShoppingCartButton();
    
    expect(await slCartPage.verifyItemsOnCart(items)).toBeTruthy();
    
    await slCartPage.clickOnCheckoutButton();
    await slCheckoutInformationPage.fillCheckoutForm('Armando', 'Cifuentes', '89000');
    
    expect(await slCheckoutOverviewPage.getTotalText()).toBe('Total: $49.66');
    await slCheckoutOverviewPage.clickOnFinishButton();

    expect(await slCheckoutCompletePage.getThanksText()).toBe('THANK YOU FOR YOUR ORDER');
});