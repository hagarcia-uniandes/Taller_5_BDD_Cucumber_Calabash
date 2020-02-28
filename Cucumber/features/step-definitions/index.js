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
	
	When(/^I fill with (.*) and (.*)$/ , (email, password) => {
		var cajaLogIn = $('.cajaLogIn');
		var mailInput = cajaLogIn.$('input[name="correo"]');
		mailInput.click();
		mailInput.keys(email);
		
		var passwordInput = cajaLogIn.$('input[name="password"]');
		passwordInput.click();
		passwordInput.keys(password)
	});
	
	When(/^I fill basic information (.*), (.*) and (.*)$/  , (name, lastName, email) => {
		var cajaSignUp = browser.$('.cajaSignUp');
		
		var nameInput = cajaSignUp.$('input[name="nombre"]');
		nameInput.click();
		nameInput.keys(name);
		
		var lastNameInput = cajaSignUp.$('input[name="apellido"]');
		lastNameInput.click();
		lastNameInput.keys(lastName);
		
		browser.pause(1000);
		var mailInput = cajaSignUp.$('input[name="correo"]');
		mailInput.click();
		mailInput.keys(email);
	});
	
	When(/^I select studies, is MBA (.*) and (.*)$/  , (isMBA, program) => {
		var cajaSignUp = browser.$('.cajaSignUp');
		
		if(isMBA) {
			var isMBAElement = cajaSignUp.$('input[class="jsx-527058112"]');
			isMBAElement.click();
		}
		
		var selectPrograma = cajaSignUp.$('select[name="idPrograma"]');
		selectPrograma.selectByVisibleText(1);
	});

	When(/^I set the password (.*) and sign up$/, (password) => {
		var cajaSignUp = browser.$('.cajaSignUp');
		var passwordInput = cajaSignUp.$('input[name="password"]');
		passwordInput.click();
		passwordInput.keys(password);
	});
	
	When('I try to login', () => {
		var cajaLogIn = $('.cajaLogIn');
		cajaLogIn.$('button=Ingresar').click();
	});
	
	When('I open the register screen', () => {
		let loginButton = $('button=Ingresar');
		if(loginButton.isEnabled() && browser.$('button=Ingresar').waitForDisplayed(5000)){
			$('button=Ingresar').click();
		}
	});
	
	Then('I expect to not be able to login', () => {
		$('.aviso.alert.alert-danger').waitForDisplayed(5000);
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
  
	Then('I expect to be on sign up', () => {
		var signUpScreen = browser.isVisible('.cajaSignUp');
		expect(signUpScreen).to.be.true;
	});
	
});

