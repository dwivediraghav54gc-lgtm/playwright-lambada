import{Locator, Page} from "@playwright/test";

export class BasePage{
    page:Page

    constructor(page:Page){
        this.page = page;
    }

    async navigate(path:string){
       await this.page.goto(path) 
    }
    
    async click(locator:Locator){
         await locator.click()
    }

    async fill(locator:Locator,text:string){
        await locator.fill(text)
    }

    async getText(locator:Locator){
     return await locator.textContent();
    }

    async waitforElement(locator:Locator){
         await locator.waitFor();    
    }

    async hover(locator:Locator){
            await locator.hover();
    }
}