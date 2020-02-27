var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
	
	Given('I go to losestudiantes home screen', () => { 
		browser.url('/');
		if($('button=Cerrar').isDisplayed()) {
			$('button=Cerrar').click();
		}
	});
	
	When('I open the login screen', () => {
		$('button=Ingresar').waitForExist(5000);
		$('button=Ingresar').waitForDisplayed(5000);
		$('button=Ingresar').click();
	});

	When('I fill a wrong email and password', () => {
		var cajaLogIn = $('.cajaLogIn');
		
		var mailInput = cajaLogIn.$('input[name="correo"]');
		mailInput.click();
		mailInput.setValue('wrongemail@example.com');
		
		var passwordInput = cajaLogIn.$('input[name="password"]');
		passwordInput.click();
		passwordInput.setValue('123467891');
	});
	
	When('I try to login', () => {
		var cajaLogIn = $('.cajaLogIn');
		cajaLogIn.$('button=Ingresar').click();
	});
	
	Then('I expect to not be able to login', () => {
		$('.aviso.alert.alert-danger').waitForDisplayed(5000);
	});
	
	When(/^I fill with (.*) and (.*)$/ , (email, password) => {
		var cajaLogIn = $('.cajaLogIn');
		var mailInput = cajaLogIn.$('input[name="correo"]');
		mailInput.click();
		mailInput.keys(email);
		
		var passwordInput = cajaLogIn.$('input[name="password"]');
		passwordInput.click();
		passwordInput.keys(password)
	});
	
	Then('I expect to see {string}', error => {
		$('.aviso.alert.alert-danger').waitForDisplayed(5000);
		var alertText = browser.$('.aviso.alert.alert-danger').getText();
		expect(alertText).to.include(error);
	});
	
	Then('I expect to be logged in', () => {
		var header = browser.$('.navbar');
		var alertText = header.$('.usrImage'); 
		expect(alertText).to.not.be.null;
	});
	
	When(/^I fill with my (.*), (.*), (.*), selected a (.*), fill my (.*) and accept the (.*) and conditions$/, 
        (name, lastname, email, department, password, terms) => {
            var cajaSignUp = browser.$('.cajaSignUp');
            cajaSignUp.$('input[name="nombre"]').click().keys(name);
            cajaSignUp.$('input[name="apellido"]').click().keys(lastname);
            cajaSignUp.$('input[name="correo"]').click().keys(email);
            cajaSignUp.$('input[name="password"]').click().keys(password);
            if(department !== "")
                cajaSignUp.$('select[name="idDepartamento"]').selectByValue('3');
            if(terms !== "")
                cajaSignUp.$('input[name="acepta"]').click();
    });

    When('I try to register', () => {
        var cajaSignUp = browser.$('.cajaSignUp');
        cajaSignUp.$('button=Registrarse').click();
    });

    Then(/^I expect do not see the errors : (.*), (.*) and (.*)$/, 
        (error_email, error_password, error_terms) => {
            if(error_email !== "" && error_password !== "" && error_terms !== "") {
                $('.aviso.alert.alert-danger').waitForDisplayed(5000);
                var alertText = browser.$('.aviso.alert.alert-danger').getText();
                var msgErrors = [
                    error_email, 
                    error_password, 
                    error_terms
                ];
                //Saber si alguno de los siguientes errores es mostrando...
                var showError = false;
                var numBerError = 0;
                for(var i = 0; i < msgErrors.length; i++) {
                    if(msgErrors[i] === alertText) {
                        showError = true;
                        numBerError = i;
                        break;
                    }
                }
                if(showError) {
                    expect(alertText).to.include(msgErrors[numBerError]);
                }
            }
    });
});

