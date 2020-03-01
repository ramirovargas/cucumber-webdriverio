//Complete siguiendo las instrucciones del taller
var { Given } = require('cucumber');
var { When } = require('cucumber');
var { Then } = require('cucumber');
var { expect } = require('chai');

Given('I go to losestudiantes home screen', () => {
  browser.url('/');
  if ($('button=Cerrar').isDisplayed()) {
    $('button=Cerrar').click();
  }
});

When('I open the login screen', () => {
  const btnIngresar = $('button=Ingresar');
  btnIngresar.waitForExist(5000);
  btnIngresar.waitForDisplayed(5000);
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

When('I fill a right email and password', () => {
  var cajaLogIn = $('.cajaLogIn');

  var mailInput = cajaLogIn.$('input[name="correo"]');
  mailInput.click();
  mailInput.setValue('TestLogin@gmail.com');

  var passwordInput = cajaLogIn.$('input[name="password"]');
  passwordInput.click();
  passwordInput.setValue('password123');
});
Then('I expect to login sucessfull', () => {
    $('//*[@id="cuenta"]').waitForExist(15000);
});

When('I try to login', () => {
  var cajaLogIn = $('.cajaLogIn');
  cajaLogIn.$('button=Ingresar').click();
});

Then('I expect to not be able to login', () => {
  $('.aviso.alert.alert-danger').waitForDisplayed(5000);
});

When('I try to register', () => {
  var cajaLogIn = $('.cajaSignUp');
  cajaLogIn.$('button=Registrarse').click();
});

When(/^I fill with (.*) and (.*)$/, (email, password) => {
  var cajaLogIn = $('.cajaLogIn');
  cajaLogIn.waitForExist(5000);
  cajaLogIn.waitForDisplayed(5000);
  var mailInput = cajaLogIn.$('input[name="correo"]');
  mailInput.waitForExist(5000);
  mailInput.waitForDisplayed(5000);
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

When(/^I fill registration with (.*), (.*), (.*) and (.*)$/, (name, lastName,email, password) => {
  var cajaSignUp = $('.cajaSignUp');
  cajaSignUp.waitForExist(5000);
  cajaSignUp.waitForDisplayed(5000);
  var nameInput = cajaSignUp.$('input[name="nombre"]');
  nameInput.click();
  nameInput.keys(name);
  var nameLastInput = cajaSignUp.$('input[name="apellido"]');
  nameLastInput.click();
  nameLastInput.keys(lastName);
  var mailInput = cajaSignUp.$('input[name="correo"]');
  mailInput.click();
  mailInput.keys(email);
  var selectProgram = $('/html/body/div[2]/div[2]/div/div/div/div/div/div[1]/div/form/div/fieldset/div/select');
  selectProgram.selectByAttribute('value',1);
  var passwordInput = cajaSignUp.$('input[name="password"]');
  passwordInput.click();
  passwordInput.keys(password)
  var checkBox = $('/html/body/div[2]/div[2]/div/div/div/div/div/div[1]/div/form/fieldset[6]/div/label/input');
  checkBox.waitForExist(5000);
  checkBox.waitForDisplayed(5000);
  checkBox.click();
});

Then('I expect to see success {string}', resp => {
  $('.sweet-alert').waitForDisplayed(8000);
  var alertText = browser.$('.sweet-alert').getText();
  expect(alertText).to.include(resp);
});