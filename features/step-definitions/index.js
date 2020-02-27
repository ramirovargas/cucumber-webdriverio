//Complete siguiendo las instrucciones del taller
var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var {expect} = require('chai');

Given('I go to losestudiantes home screen', () => {
  browser.url('/');
  if($('button=Cerrar').isDisplayed()) {
    $('button=Cerrar').click();
  }
});

When('I open the login screen', () => {
    const btnIngresar = $('button=Ingresar');
    btnIngresar.waitForExist(8000);
    btnIngresar.waitForDisplayed(8000);
    browser.waitUntil(() => btnIngresar.isClickable());
    btnIngresar.click();
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
   $('.aviso.alert.alert-danger').waitForDisplayed(8000);
   var alertText = browser.$('.aviso.alert.alert-danger').getText();
   expect(alertText).to.include(error);
  });