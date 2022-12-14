// here goes your amazing tests
import { test, expect } from '@playwright/test';

import { GoogleHomePage } from '../pages/GoogleHomePage';
import { GoogleResultsPage } from '../pages/GoogleResultsPage';

let googleHomePage: GoogleHomePage;
let googleResultsPage: GoogleResultsPage;

/**
 * This is just a sample test.
 * Maybe you've faced how hard and painful is to automate the Google page
 * because there aren't appropriate values for the IDs and classes the elements.
 * My goal with this sample is to check if the About label is displayed.
 * If you want to see full test samples, check my AutomationFrameworkSample_TS branch.
 */
test('as a user I should be able to search something on Google', async({ page }) => {
    googleHomePage = new GoogleHomePage(page);
    googleResultsPage = new GoogleResultsPage(page);

    await googleHomePage.goTo();
    await googleHomePage.search('Tampico');

    expect(await googleResultsPage.resultStatsLabel.textContent()).toContain("Cerca");
});