/// <reference types="cypress" />

// Describe block to group related tests
describe('traverse day-3', function () {

    // Test case to demonstrate the .filter() command
    it.only('To get DOM elements that match a specific selector, use the .filter() command.', function () {
        // Visit the specified URL
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')

        // Get all buttons and filter out those with class '.btn-outline-info'
        cy.get('button').filter('.btn-outline-info').should('have.length', 2)
    })

    // Test case to demonstrate the .not() command
    it.only('To remove DOM element(s) from the set of elements, use the .not() command.', function () {
        // Visit the specified URL
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')

        // Get elements with class '.traversal-button-states', select their children excluding those with class '.disabled'
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length', 3)
    })

    // Test case to demonstrate the .find() command
    it.only('To get descendant DOM elements of the selector, use the .find() command.', function () {
        // Visit the specified URL
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')

        // Get elements with class '.thumbnail', select the last one, and find the element with id '#coffee'
        cy.get('.thumbnail').last().find('#coffee').should('have.text', 'Coffee')
    })

    // Test case to demonstrate the .closest() command
    it.only('To get the closest ancestor DOM element, use the .closest() command.', function () {
        // Visit the specified URL
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')

        // Get the element with id '#coffee', find its closest ancestor with tag 'div', and check if it has class 'thumbnail'
        cy.get('#coffee').closest('div').should('have.class', 'thumbnail')
    })

    // Test case to demonstrate the .parentsUntil() command
    it.only('To get parents DOM element of elements until other element, use the .parentsUntil() command.', function () {
        // Visit the specified URL
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')

        // Get the element with id '#coffee', find its parents until an element with class '.thumbnail' is encountered
        cy.get('#coffee').parentsUntil('.thumbnail').should('have.length', 1)
    })

})
