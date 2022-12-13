import { Page , expect } from '@playwright/test'
import { LoginPageLocator } from '../objectRepository/LoginPageLocator'
import { testConfig } from '../../testConfig';
export  class LoginPage 
{
    page: Page;
    constructor(page: Page)
    {
        this.page = page;
    }

    async navigateToUrl(url :string) {
        this.page.goto(url);
    }
    async goTologinOption()
    {        
        await this.page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
        await this.page.screenshot();
   
      
        await this.page.click("'Login'")
    }

    async enterEmailId() {

        await this.page.fill(LoginPageLocator.emailid, testConfig.username);

    }
    async enterPassword() {

        await this.page.fill(LoginPageLocator.password, testConfig.encodepassword);

    }
    async pressLoginButton() {

        await this.page.click(LoginPageLocator.loginButtom);


    }

    async login() {
     //   await this.goTologinOption();
        await this.enterEmailId();
        await this.enterPassword;
        await this.pressLoginButton
    }

    //async validatePage(Title: string)
    //{
    //    expect(this.page.title).toContain(Title);
    //}



}