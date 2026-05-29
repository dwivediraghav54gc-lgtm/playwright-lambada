import { Locator,Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SearchResultPage extends BasePage{
   
    readonly searchProductTittle: Locator
    


    constructor(page:Page){
        super(page)
        this.searchProductTittle = page.getByRole('heading');
    }


    async getSearchTittle(){
        return await this.searchProductTittle.textContent();
    }


}