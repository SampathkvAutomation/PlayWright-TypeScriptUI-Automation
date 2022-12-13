import test,{ expect } from '@lib/BaseTest'


test('Login to lamda Ecom', async ({ loginPage,page}) => {


    await loginPage.navigateToUrl('index.php?route=account/login')
    await loginPage.login();


    





});
