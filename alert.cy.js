
// <reference types="cypress" />

describe('alerts in cypress', function () {
    // Test to verify the JS alert
    it('verify the js alert', function () {
        // Visit the specified URL
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        // Listen for the window:alert event and provide a callback function
        cy.on('window:alert', function (str) {
            // Assertion: Check if the alert message is 'I am a JS Alert'
            expect(str).to.eq('I am a JS Alert')
            // Return true  accept the alert
            return true
        })

        cy.get('button').contains('Click for JS Alert').click()

        cy.get('#result').should("have.text", 'You successfully clicked an alert')
    })

    //confirm alert with 'Ok' button
    it.only('verify the confirm alert - ok', function () {
       
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.on('window:confirm', function (str) {
            
            expect(str).to.eq('I am a JS Confirm')
            return true
            
        })
        cy.get('button').contains('Click for JS Confirm').click()

        cy.get('#result').should("have.text", 'You clicked: Ok')
    })
})
