import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";  

Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login.html')
cy.get('#email').type(email)
cy.get('#password').type(password)
cy.get('[type="submit"]').click()
cy.url().should('equal', 'http://localhost:7655/')
})

Given('I am on the login page', () => {
    cy.visit('/login.html')
    cy.wait(2000) 
})

When('I enter valid info', () => {
    cy.get('#email').type('exempel@school.net');
    cy.get('#password').type('abc123');
    cy.get('[type="submit"]').click()
    cy.url().should('equal', 'http://localhost:7655/')
});

When('I enter invalid info', () => {
    cy.get('#email').type('exempel@skola.net');
    cy.get('#password').type('123abc');
    cy.get('[type="submit"]').click()
});

Then('I should see Nodehill Logo in schedule page', () => {
    cy.get('img').should('be.visible')
});

Then('Login is successful', () => {
    cy.get('header > table > thead > tr > :nth-child(6) > div > a').should('be.visible')
});

Then('Login is unsuccessful', () => {
    cy.url().should('include', '/login.html')
});

Given('I should be logged in and see logo in schedule page', () => {
  cy.url().should('include', 'http://localhost:7655')
  cy.get('img').should('be.visible')
});

When('I click on the admin button', () => {
    // cy.get('[onclick="location.href='/admin'"]').click();
    //cy.get('button').contains('Admin').click()
    cy.get('[onclick="location.href=\'/admin\'"]').click();
    // cy.visit('/admin/')
});

Then('I visit the admin page', () => {
  cy.url().should('include', 'http://localhost:7655/admin');
});
