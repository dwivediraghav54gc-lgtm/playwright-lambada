import { Page,Locator, expect } from "@playwright/test";
import { BasePage } from "../page/BasePage";

export class HeaderComponent extends BasePage{
    readonly myAccount:Locator;
    readonly wishList:Locator;
    readonly cart :Locator;
    readonly logOut: Locator;
    readonly logIn: Locator;
    readonly searchBox :Locator;
    readonly searchButton : Locator;
    readonly shopByCategory:Locator;
    



    constructor(page:Page){
        super(page)
        this.myAccount = page.getByRole('button',{name:'My Account'});
        this.wishList = page.getByTestId('217824');
        this.cart = page.getByTestId('217825');
        this.logOut =page.getByText('Logout',{exact:true})
        this.logIn = page.getByText('Login',{exact:true});
        this.searchButton = page.getByRole('button',{name:"SEARCH"})
        this.searchBox = page.getByPlaceholder('Search For Products').first();
        this.shopByCategory = page.getByRole('button',{name:'Shop by Category'})
    }

    async verifyUserLoggedIn(){
        
        await this.hover(this.myAccount);
        await expect(this.logOut).toBeVisible();

    }

    async userLogin(){
        await this.hover(this.myAccount);
        await this.click(this.logIn);    
    }

    
   async searchProduct(productName:string){
        await this.fill(this.searchBox, productName)
        await this.click(this.searchButton);
   }

//    async wishListPage(){
//     await this.
//    }

    async clikShopByCategory(){
            await this.click(this.shopByCategory);
    }
}