import redBusSerch from "../pages/redBusPage.js"

describe('redBus homepage', function() {
  it('serch Buses in Redbus', function() {
     browser.waitForAngularEnabled(false);

       browser.get('https://www.redbus.in/');

    browser.sleep(2000);
       
   redBusSerch.enterFieldValuesAndClickOnSerch();
    browser.sleep(10000);

    
    });
  });

