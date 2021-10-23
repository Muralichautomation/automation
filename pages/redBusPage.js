import serchchBus from "../data/redBusdata.json"
class redbus {
	constructor(){

		this.fromCity= by.id('src');
		this.toCity= by.id('dest');
		this.date= by.id('onward_cal');

	}
	enterFieldValuesAndClickOnSerch(){

		element(this.fromCity).sendKeys(serchchBus.fromCity);
		element(this.toCity).sendKeys(serchchBus.toCity);
		element(this.date).sendKeys(serchchBus.date);
		

	}




}

export default new redbus();
