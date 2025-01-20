import { Page } from '@playwright/test';

export class SearchPage {
    private readonly inputSearchStringLocator = this.page.getByRole('textbox', { name: 'Поиск по сайту' });
    public readonly searchResultsSelector = '[data-main-container]';
    private readonly blockNameSelector = (blockName: string) => 
        this.page.locator('#site-search-result-react-app').getByRole('link', { name: blockName });


    constructor(readonly page: Page) {};

    public async openSearchPage() {
        await this.page.goto('https://www.buhonline.ru/search');
    }

    public async searchTheSite(value: string) {
        await this.inputSearchStringLocator.fill(value);
        await this.page.keyboard.press('Enter');
    }

    public async openBlockInMenu(blockName: string) {
        await this.blockNameSelector(blockName).click();
    }
}