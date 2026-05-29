import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
import { SearchResultPage } from "./SearchResultsPage";

export class HomePage extends BasePage{

  readonly searchBox :Locator;
  readonly searchButton : Locator;

  constructor(page:Page){
    super(page)
    this.searchButton = page.getByRole('button',{name:"SEARCH"})
    this.searchBox = page.getByPlaceholder('Search For Products').first();
  }

   async searchProduct(productName:string){
        await this.fill(this.searchBox, productName)
        await this.click(this.searchButton);
   }
   
}
