var {defineSupportCode} = require('cucumber');
var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
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
	
	Then('I expect to have an account button', () => {
		browser.waitForVisible("#cuenta", 5000);
		var buttonCta = browser.element('#cuenta');
		expect(buttonCta).to.exist;
	});
	
	When(/^I fill with my (.*), (.*), (.*), selected a (.*), fill my (.*) and accept the (.*) and conditions$/, 
        (name, lastname, email, department, password, terms) => {
            var cajaSignUp = browser.element('.cajaSignUp');
            cajaSignUp.element('input[name="nombre"]').click().keys(name);
            cajaSignUp.element('input[name="apellido"]').click().keys(lastname);
            cajaSignUp.element('input[name="correo"]').click().keys(email);
            cajaSignUp.element('input[name="password"]').click().keys(password);
            if(department !== "")
                cajaSignUp.element('select[name="idDepartamento"]').selectByValue('3');
            if(terms !== "")
                cajaSignUp.element('input[name="acepta"]').click();
    });

    When('I try to register', () => {
        var cajaSignUp = browser.element('.cajaSignUp');
        cajaSignUp.element('button=Registrarse').click();
    });

    Then(/^I expect do not see the errors : (.*), (.*) and (.*)$/, 
        (error_email, error_password, error_terms) => {
            if(error_email !== "" && error_password !== "" && error_terms !== "") {
                browser.waitForVisible('.aviso.alert.alert-danger', 5000);
                var alertText = browser.element('.aviso.alert.alert-danger').getText();
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

