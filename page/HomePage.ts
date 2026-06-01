import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
import { HeaderComponent } from "../Components/HeaderComponent";


export class HomePage extends HeaderComponent{

  

  constructor(page:Page){
    super(page)
   
  }

   async clickHeroBanner(){
   
   }
}
