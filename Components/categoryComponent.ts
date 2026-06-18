import { Page,Locator,expect } from "@playwright/test";
import { BasePage } from "../page/BasePage";

export class CategoryComponent extends BasePage{
    readonly topCategoriesHeading: Locator;
    readonly categorySectionLink :Locator
    constructor(page:Page){
        super(page)
        this.topCategoriesHeading = page.getByRole('heading',{name:'Top categories'}); 
        this.categorySectionLink = page.locator('#widget-navbar-217841').getByRole('link');
    }

    async categoryItem(categoryName:string){
      const targetcategory = this.categorySectionLink.filter({hasText:categoryName});
      await targetcategory.waitFor({state:'visible'});
      await targetcategory.click();

    }
}