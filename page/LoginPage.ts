import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";
import { HeaderComponent } from "../Components/HeaderComponent";

export class LoginPage extends BasePage{

    readonly emailInput:Locator;
    readonly passwordInput: Locator;
    readonly loginButton:Locator;

    constructor(page:Page){
        super(page)
        this.emailInput = page.getByRole('textbox',{name:'E-mail Address'});
        this.passwordInput = page.getByRole('textbox',{name:'Password'});
        this.loginButton = page.getByRole('button',{name:'Login'});
        
        
    }

    public async login(email:string ,pass:string):Promise<void>{
        
        await this.fill(this.emailInput,email);
        await this.fill(this.passwordInput,pass);
        await this.click(this.loginButton);

    }
    



} 