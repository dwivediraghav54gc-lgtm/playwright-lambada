import { test,Page, expect } from "@playwright/test";
import { LoginPage } from "../page/LoginPage";
import { HeaderComponent } from "../Components/HeaderComponent";

test.only('login',async({page})=>{
  const login = new LoginPage(page);
  const headerComp = new HeaderComponent(page)

  await login.navigate('/')
  await headerComp.userLogin()
  await expect(page.getByRole('heading',{name:'Returning Customer'})).toBeVisible();
  await expect(login.loginButton).toBeEnabled();
  await login.login('dwivedi.raghav54.gc@gmail.com','Vishal@2026!')
  await headerComp.verifyUserLoggedIn();
})