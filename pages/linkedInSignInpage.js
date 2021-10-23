import signIn from "../data/linkedInSignInData.json"
class LoginPage{
	constructor(){
		this.emailOrName =  by.id('username');
		this.password =  by.id('password');
		this.SignIn= by.xpath("//button[@type='submit']")
	}
	enterFieldsAndClickSignIn(){

		
		element(this.emailOrName).sendKeys(signIn.emailOrPhone);
		element(this.password).sendKeys(signIn.password);
		element(this.SignIn).click();
	}
}

export default new LoginPage();