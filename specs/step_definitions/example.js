import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";  

Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login.html')
cy.get('#email').type(email)
cy.get('#password').type(password)
cy.get('[type="submit"]').click()
cy.url().should('equal', 'http://localhost:7655/')
})

Given('I am on the login page', () => {
    cy.login('exempel@school.net', 'abc123')
    cy.wait(5000) 
})

When('I see Nodehill Logo', () => {
    cy.get('document.querySelector("body > div > img")').click()
});

Then('Login is successful', () => {
    cy.get('#main-image').should('be.visible')
});