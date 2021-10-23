import loginUser from "../data/logindata.json"
class LoginPage{
	constructor(){
		this.userName =  by.id('ap_email');
		this.next =  by.xpath("//input[@id='continue']");
	}
	enterUserNameandClickOnNext(){

		
		element(this.userName).sendKeys(loginUser.username);
		element(this.next).click();
	}
}

export default new LoginPage();