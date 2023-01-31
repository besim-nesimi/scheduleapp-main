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
    cy.get('#email').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.get('.login-page').should('be.visible')
    cy.get('#login').should('be.visible')
    cy.wait(200)
})

When('Valid credentials are given', () => {
    cy.get('#email').type('exempel@school.net');
    cy.get('#password').type('abc123');
    cy.get('[type="submit"]').click()
    cy.url().should('equal', 'http://localhost:7655/')

});

When('Invalid credentials are given', () => {
    cy.get('#email').type('exempel@skola.net');
    cy.get('#password').type('123abc');
    cy.get('[type="submit"]').click()
});

Then('I should see Nodehill Logo and some other stuff in schedule page', () => {
    cy.get('img').should('be.visible')
    cy.get('footer').should('be.visible')
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
    cy.get('[onclick="location.href=\'/admin\'"]').click();
});

Then('I visit the admin page', () => {
  cy.url().should('include', 'http://localhost:7655/admin');
  cy.get('.MuiCardHeader-root').should('be.visible')
  cy.get('[href="#/classes"]').should('be.visible')
});