import{test,expect} from '@playwright/test'
import{HomePage} from '../page/HomePage';
import {LoginPage} from'../page/LoginPage';
import { ProductPage } from '../page/ProductPage';
import { HeaderComponent } from '../Components/HeaderComponent';
import { CategoryComponent } from '../Components/categoryComponent';


test.only('Assignment 1 — Browser Context (Multi-user)',async({browser})=>{
    const userContextA = await browser.newContext();
    const userPageA = await userContextA.newPage();

    const homePage = new HomePage(userPageA);
    const loginPage = new LoginPage(userPageA);
    const productPage = new ProductPage(userPageA);
    const headerComponent = new HeaderComponent(userPageA);
    const categories = new CategoryComponent(userPageA);
    
    await headerComponent.userLogin()
    await loginPage.login('user2324@yopmail.com',"UserA@123!")
    await headerComponent.clikShopByCategory();
    await expect(categories.topCategoriesHeading).toBeVisible();
    await categories.categoryItem(' Phone, Tablets & Ipod')
    await productPage.getAllproducts();



     
})