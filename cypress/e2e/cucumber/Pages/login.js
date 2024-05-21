import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
const SauceDemoLoginPage = require ("../../cucumber/Pages/Elements/SauceDemoLoginPage")

//step defination file 
Given("A user opens the login page",() => {

    cy.visit("https://www.saucedemo.com/")
})

When("A user enter username {string}",(username)=>{
    SauceDemoLoginPage.typeUsername(username)
})

And ("A user enter the password {string}",  (password)=>{
    SauceDemoLoginPage.typePassword(password)
})

And ("A user clicks on login button", ()=>{
    SauceDemoLoginPage.clickLogin()
})

Then ("A user must be successful logged in",()=>{
    cy.url().should('include', '/inventory.html') 
})

Then ("A user must get error  message",()=>{
    SauceDemoLoginPage.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service') 
})