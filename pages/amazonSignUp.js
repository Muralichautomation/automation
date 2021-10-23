import signUp from "../data/amazonSignUpData.json"
class SignUpPage{
constructor(){

	this.createYourAmazonAccount = by.id('createAccountSubmit');
	this.yourName =by.name('customerName');
	this.emailOrMobile =by.name('email');
	this.password = by.name('password');
	this.passwordAgain = by.id('ap_password_check');
	this.clickOncontinue= by.id('continue');
}
enterUserDetailsClickOnSubmit(){

element(this.createYourAmazonAccount).click();
element(this.yourName).sendKeys(signUp.yourName);
element(this.emailOrMobile).sendKeys(signUp.emailOrMobile);
element(this.password).sendKeys(signUp.password);
element(this.passwordAgain).sendKeys(signUp.passwordAgain);
element(this.clickOncontinue).click();

}


}
export default new SignUpPage