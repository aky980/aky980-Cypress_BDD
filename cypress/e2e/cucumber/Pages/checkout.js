import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const checkout = require("../Pages/checkout") 

Given('I am on the login page', () => {
  cy.visit('https://www.saucedemo.com/');
});

When('I login with valid credentials', () => {
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();
});

When('I add a product to the cart', () => {
  cy.get('.inventory_item').first().find('button').click();
});

When('I proceed to checkout via the cart page', () => {
  cy.get('.shopping_cart_link').click();
  cy.get('#checkout').click();
});

When('I fill in all required information', () => {
  cy.get('#first-name').type('John');
  cy.get('#last-name').type('Doe');
  cy.get('#postal-code').type('12345');
  cy.get('#continue').click();
});

When('I complete the checkout process', () => {
  cy.get('#finish').click();
});

Then('I should see that the checkout is completed', () => {
  cy.get('.complete-header').should('have.text', 'Thank you for your order!');
});

Then('I should see the order dispatched message', () => {
  cy.get('.complete-text').should('contain', 'Your order has been dispatched');
});
