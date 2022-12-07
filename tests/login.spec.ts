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

test('as a user I should be able to login into the store', async() => {
    await slLoginPage.fillLoginForm('standard_user', 'secret_sauce');
    // await slProductPage.headerIsDisplayed();
    expect(await slProductPage.headerIsDisplayed()).toBeTruthy();
});

test('as a user I shouldn\'t be able to login into the store using a locked username', async() => {
    await slLoginPage.fillLoginForm('locked_out_user', 'secret_sauce');
    expect(await slLoginPage.getErrorMessage()).toBe('Epic sadface: Sorry, this user has been locked out.');
});

test('as a user I shouldn\'t be able to login into the store with invalid credentials', async() => {
    await slLoginPage.fillLoginForm('invalid_username', 'invalid_password');
    expect(await slLoginPage.getErrorMessage()).toBe('Epic sadface: Username and password do not match any user in this service');
});

test('as a user I shouldn\'t be able to login into the store without password', async() => {
    await slLoginPage.fillLoginForm('standard_user', '');
    expect(await slLoginPage.getErrorMessage()).toBe('Epic sadface: Password is required');
});

test('as a user I shouldn\'t be able to login into the store without username', async() => {
    await slLoginPage.fillLoginForm('', 'secret_sauce');
    expect(await slLoginPage.getErrorMessage()).toBe('Epic sadface: Username is required');
});