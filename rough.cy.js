/// <reference types="cypress" />
describe('traverse day-3', function () {
    it.only('To get the closest ancestor DOM element, use the .closest() command.',function()

cy.visit('https://webdriveruniversity.com/Data-Table/index.html') 
cy.get('.traversal-buttons').children().should('have.length', 5)



cy.get('.traversal-buttons').closest('div').should('have.class', 'thumbnail')

cy.get('#coffee').closest('div').should('have.class', 'thumbnail')
}