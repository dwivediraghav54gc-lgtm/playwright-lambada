import { Page,Locator } from "@playwright/test";

export class HomePage{
  page: Page
  searchInput:Locator;
  searchButton :Locator;

  constructor(page:Page){
   this.page = page
   this.searchButton= page.getByRole('button',{name:'Search'}).nth(0);
   this.searchInput =page.getByRole('textbox',{name:'Saerch For Products'}); 

  }

  async searchProduct(productName:string){
    await this.searchInput.fill(productName);
    await  this.searchButton.click();
  }
}