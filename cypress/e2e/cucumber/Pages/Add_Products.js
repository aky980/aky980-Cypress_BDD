import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps.js';
const addProducts = require ('./Elements/Add_productsPage.js')

Given('I am on the login page', () => {
  cy.visit('https://www.saucedemo.com/');
});

When('I login with valid credentials', () => {
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();
});

When('I filter products by price from low to high', () => {
  cy.get('.product_sort_container').select('Price (low to high)');
});

When('I add the first listed product to the cart', () => {
  cy.get('.inventory_item').first().find('button').click();
});

When('I add the last listed product to the cart', () => {
  cy.get('.inventory_item').last().find('button').click();
});

Then('I should see both products in the cart with correct descriptions', () => {
  cy.get('.shopping_cart_link').click();
  cy.get('.cart_item').should('have.length', 2);

  cy.get('.cart_item').first().find('.inventory_item_name').then(($firstProduct) => {
    const firstProductName = $firstProduct.text();
    cy.get('.cart_item').first().find('.inventory_item_desc').should('have.text', firstProductName);
  });

  cy.get('.cart_item').last().find('.inventory_item_name').then(($lastProduct) => {
    const lastProductName = $lastProduct.text();
    cy.get('.cart_item').last().find('.inventory_item_desc').should('have.text', lastProductName);
  });
});

Then('I should see both products in the cart with correct prices', () => {
  cy.get('.cart_item').first().find('.inventory_item_price').then(($firstProductPrice) => {
    const firstProductPrice = $firstProductPrice.text();
    cy.get('.cart_item').first().find('.inventory_item_price').should('have.text', firstProductPrice);
  });

  cy.get('.cart_item').last().find('.inventory_item_price').then(($lastProductPrice) => {
    const lastProductPrice = $lastProductPrice.text();
    cy.get('.cart_item').last().find('.inventory_item_price').should('have.text', lastProductPrice);
  });
});
