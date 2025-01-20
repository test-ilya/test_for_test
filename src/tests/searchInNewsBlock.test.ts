import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';

const searchValue = 'Как оформить работу в выходные и праздники: разъяснение Роструда';
const blockName = 'Новости';

test('test', async ({ page }) => {
    const searchPage = new SearchPage(page);
    //Открыть страницу поиска
    await searchPage.openSearchPage();
    //Выполнить поиск по искомому значению
    await searchPage.searchTheSite(searchValue);
    //Открыть блок в горизонтальном меню
    await searchPage.openBlockInMenu(blockName);
    //Проверить, что на странице присуствует искомая статья
    await expect(
        searchPage.searchResultsSelector(searchValue)
    ).toBeVisible();
});