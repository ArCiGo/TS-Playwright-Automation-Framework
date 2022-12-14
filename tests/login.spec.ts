import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

import { SLLoginPage } from '../pages/SLLoginPage';
import { SLProductPage } from '../pages/SLProductsPage';
import { messages } from '../tests/data/testData'

let slLoginPage: SLLoginPage;
let slProductPage: SLProductPage;

test.beforeEach(async ({ page }) => {
    slLoginPage = new SLLoginPage(page);
    slProductPage = new SLProductPage(page);

    await slLoginPage.goTo();
});

test('as a user I should be able to login into the store', async() => {
    await slLoginPage.fillLoginForm(process.env.USERNAME as string, process.env.PASSWORD as string);
    // await slProductPage.headerIsDisplayed();
    expect(await slProductPage.headerIsDisplayed()).toBeTruthy();
});

test('as a user I shouldn\'t be able to login into the store using a locked username', async() => {
    await slLoginPage.fillLoginForm(process.env.LOCKED_USERNAME as string, process.env.PASSWORD as string);
    expect(await slLoginPage.getErrorMessage()).toBe(messages.lockedOutMessage);
});

test('as a user I shouldn\'t be able to login into the store with invalid credentials', async() => {
    await slLoginPage.fillLoginForm(process.env.INVALID_USERNAME as string, process.env.INVALID_PASSQORD as string);
    expect(await slLoginPage.getErrorMessage()).toBe(messages.invalidCredentialsMessage);
});

test('as a user I shouldn\'t be able to login into the store without password', async() => {
    await slLoginPage.fillLoginForm(process.env.USERNAME as string, '');
    expect(await slLoginPage.getErrorMessage()).toBe(messages.passwordMessage);
});

test('as a user I shouldn\'t be able to login into the store without username', async() => {
    await slLoginPage.fillLoginForm('', process.env.PASSWORD as string);
    expect(await slLoginPage.getErrorMessage()).toBe(messages.usernameMessage);
});