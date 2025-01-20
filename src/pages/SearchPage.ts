import { Page } from '@playwright/test';

export class SearchPage {
    private readonly inputSearchStringLocator = this.page.getByRole('textbox', { name: 'Поиск по сайту' });
    public readonly searchResultsSelector = (value: string) => 
        this.page.getByRole('link', { name: value });
    private readonly blockNameSelector = (blockName: string) => 
        this.page.locator('#site-search-result-react-app').getByRole('link', { name: blockName });

    constructor(readonly page: Page) {};

    /** Открыть страницу поиска */
    public async openSearchPage() {
        await this.page.goto('https://www.buhonline.ru/search');
    }

    /** Выполнить поиск
     * @param {string} value - Искомое значение
    */
    public async searchTheSite(value: string) {
        await this.inputSearchStringLocator.fill(value);
        await this.page.keyboard.press('Enter');
    }

    /**  Открыть блок в горизонтальном меню 
     * @param {string} blockName - Наименование блока
    */
    public async openBlockInMenu(blockName: string) {
        await this.blockNameSelector(blockName).click();
    }
}