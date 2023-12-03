/// <reference types="cypress" />

// Test suite for locating elements
describe('Locating elements', function () {

    // Test case to find a single element
    it('find a single element', function () {
        // Visit the specified URL
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // Find an h2 element with the name attribute equal to "contactme" and assert its existence
        cy.get('h2[name= "contactme"]').should('exist')
    })

    // Test case to find multiple elements
    it('find the multiple elements', function () {
        // Visit the specified URL
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // Find input elements with type attribute equal to "text" and assert their count to be 3
        cy.get('input[type="text"]').should('have.length', 3)
        // Find input elements with type attribute equal to "submit" and assert their count to be greater than 0
        cy.get('input[type="submit"]').should('have.length.greaterThan', 0)
    })

    // Test case to find an element by className
    it('find element by className', function () {
        // Visit the specified URL
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // Find elements with the class "text-center" and assert their count to be 2
        cy.get('.text-center').should('have.length', 2)
    })

    // Test case to find an element by css Selector
    it('find element by css Selector', function () {
        // Visit the specified URL
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // Find h2 elements with the name attribute equal to "contactme" and assert their text content
        cy.get('h2[name="contactme"]').should('have.text', 'CONTACT US')
    })

    // Test case to find an element by id
    it('find element by id', function () {
        // Visit the specified URL
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // Find an element with the id "contact_form" and assert its existence
        cy.get('#contact_form').should('exist')
    })

    // Test case to find an element by name attribute
    it('find element by name attribute', function () {
        // Visit the specified URL
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // Find an element with the name attribute equal to "first_name" and assert its existence
        cy.get('[name="first_name"]').should('exist')
    })

    // Test case to find an element by tagName
    it('find element by tagName', function () {
        // Visit the specified URL
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // Find h2 elements and assert their existence and text content
        cy.get('h2').should('exist').should('have.text', 'CONTACT US')
    })

    // Test case to find an element by link text using cy.contains()
    it('find element by link text', function () {
        // Visit the specified URL
        cy.visit('https://webdriveruniversity.com/')
        // Find an element containing the specified link text and assert its existence
        cy.contains(`Cypress with Cucumber BDD`).should('exist')
    })

    // Test case to verify the visibility of an element by link text
    it('verify the element by linkText', function () {
        // Visit the specified URL
        cy.visit('https://webdriveruniversity.com/')
        // Find an element containing the specified link text and assert its visibility
        cy.contains('Cypress with Cucumber BDD - Beginner to Expert in 9 Hours!').should('be.visible')
    })
})
