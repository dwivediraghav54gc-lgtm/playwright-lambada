import { expect, Expect,test } from "@playwright/test";
import { HomePage } from "../page/HomePage";
import { SearchResultPage } from "../page/SearchResultsPage";


test("search product validation",async({page}) =>{
const homePage = new HomePage(page);
const searchResultPage = new SearchResultPage(page);


const productName:string = "Apple"
await homePage.navigate('/');
await homePage.searchProduct(productName);
const tittle = await searchResultPage.getSearchTittle();
expect(tittle).toContain(productName);

})