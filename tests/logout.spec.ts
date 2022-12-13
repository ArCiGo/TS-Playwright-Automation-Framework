import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

import { SLLoginPage } from '../pages/SLLoginPage';
import { SLProductPage } from '../pages/SLProductsPage';

let slLoginPage: SLLoginPage;
let slProductPage: SLProductPage;

test.beforeEach(async ({ page }) => {
    slLoginPage = new SLLoginPage(page);
    slProductPage = new SLProductPage(page);

    await slLoginPage.goTo();
});

test('as a user I should be able to logout into the store', async () => {
    await slLoginPage.fillLoginForm(process.env.USERNAME as string, process.env.PASSWORD as string);
    
    expect(await slProductPage.headerIsDisplayed()).toBeTruthy();
    
    await slProductPage.clickOnMenuButton();
    await slProductPage.clickOnLogoutLinkButton();
    
    expect(await slLoginPage.botImageIsDisplayed()).toBeTruthy();
});