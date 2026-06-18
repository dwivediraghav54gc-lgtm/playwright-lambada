import { Page, Locator } from "@playwright/test";

export class LoginPage {
    // 1. Declare properties
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    // 2. The Constructor: Initializes our properties when the object is born
    constructor(page: Page) {
        this.page = page; // Saving the browser page instance to use inside this class
        this.emailInput = page.getByPlaceholder('E-Mail Address');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.locator("//input[@value='Login']"); 
    }

    // 3. Method: The action our page can perform using native Playwright
    async login(email: string, pass: string): Promise<void> {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }
}