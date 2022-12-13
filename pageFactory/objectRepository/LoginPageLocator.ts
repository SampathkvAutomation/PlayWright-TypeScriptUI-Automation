export class LoginPageLocator {
    //"//a[@data-toggle='dropdown']//span[contains(.,'My account')]"
    static MyAccountLogin = "//a[@data-toggle='dropdown']//span[contains(text(),'My account')]";
   // static Login_option = "'Login'";
    static Login_option = "//*[contains(text(),'Login')]//ancestor::li[1]";
    static emailid = "input[name='email']";
    static password = "input[name='password']";
    static loginButtom = "input[value='Login']";


}