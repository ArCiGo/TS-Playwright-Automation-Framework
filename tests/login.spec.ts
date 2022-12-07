import { test, expect } from '@playwright/test';

import { SLLoginPage } from '../pages/SLLoginPage';
import { SLProductPage } from '../pages/SLProductsPage';

test('as a user I should be able to login into the store', async({ page }) => {
    const slLoginPage = new SLLoginPage(page);
    const slProductPage = new SLProductPage(page);

    await slLoginPage.goTo();
    await slLoginPage.fillLoginForm('standard_user', 'secret_sauce');
    await slProductPage.headerIsDisplayed();
});