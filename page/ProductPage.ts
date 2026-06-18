import { Locator,Page } from "@playwright/test";
import { HeaderComponent } from "../Components/HeaderComponent";

export class ProductPage extends HeaderComponent {
    readonly productCategoryName :Locator;
    readonly allProductsInfoSection :Locator;
    readonly wishList: Locator;
    readonly productCard :Locator;
    readonly nextbutton:Locator;

    constructor(page:Page){
        super(page);
        this.productCategoryName = page.getByRole('heading',{name:'Desktop'});
        this.allProductsInfoSection = page.locator('.caption');

        this.wishList = page.getByRole('button',{name:'Add to Wish List'});
        this.productCard = page.locator('.product-thumb');
        this.nextbutton = page.locator('.pagination li a:has-text(">")').first();
    }

    async allProductsRelatedToCategory(){
        const productList:{name:string; price:string}[]=[]
        const count = await this.allProductsInfoSection.count();

        for( let i=0 ; i< count ; i++){
               const currentProduct = this.allProductsInfoSection
               const nameElement =  currentProduct.getByRole('heading').getByRole('link');
               const priceElement = currentProduct.locator('.price-new')
               
               const name = await nameElement.allInnerTexts();
               const price = await priceElement.allInnerTexts();
               
               productList.push()

        }



    }

    async addProductToWishList(){
        await this.productCard.first().waitFor({state:'visible'});
        const productsCount = await this.productCard.count();
        if(productsCount === 0){

        }    
    }


    async getAllproducts(){
        const allProductList:string[]=[];
        let hasNextPage= true;
        let pageCount =1

        while(hasNextPage){

            await this.productCard.first().waitFor({state:'visible'});
            const totalcoutOfProductsInSinglePage= await this.productCard.count();
            for(let i =0 ; i<totalcoutOfProductsInSinglePage ;i++){
             const name =   await this.productCard.nth(i).locator('.caption .title').textContent();

             if(name){
                allProductList.push(name.trim())
             }
            }

            if(await this.nextbutton.isVisible()){
                await this.nextbutton.click();
                await this.page.waitForLoadState('networkidle');
                pageCount++
            }else{
                console.log('reached the last page')
                hasNextPage=false
            }
        }
        return allProductList;
    }
}