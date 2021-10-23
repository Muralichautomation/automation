import linkedIn from "../pages/linkedInSignInpage.js"

describe('linkedIn homepage', function() {
  it('signIn to linkedIn', function() {
     browser.waitForAngularEnabled(false);

       browser.get('https://www.linkedin.com/login');

    browser.sleep(2000);
       
    linkedIn.enterFieldsAndClickSignIn();
    browser.sleep(100000);

    
    });
  });

