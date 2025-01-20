import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';

const searchValue = 'праздники';
const blockName = 'Новости';

test('test', async ({ page }) => {
    const searchPage = new SearchPage(page);

    await searchPage.openSearchPage();
    await searchPage.searchTheSite(searchValue);
    await searchPage.openBlockInMenu(blockName);

    await expect(
        page.locator(searchPage.searchResultsSelector)
    ).toContainText(searchValue);

});