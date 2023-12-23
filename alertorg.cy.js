/// <reference types="cypress" />

// Describe block to group related test cases
describe('alerts in cypress', function () {
  
    // Test case to verify the JavaScript alert
    it('verify the js alert', function () {
        // Visit the specified URL
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        // Intercept the window:alert event and assert the alert message
        cy.on('window:alert', function (str) {
            expect(str).to.eq('I am a JS Alert')
            return true
        })

        // Click the button triggering the JavaScript alert
        cy.get('button').contains('Click for JS Alert').click()

        // Assert the result message after clicking the alert
        cy.get('#result').should("have.text", 'You successfully clicked an alert')
    })

    // Test case to verify the JavaScript confirm alert - OK option
    it.only('verify the confirm alert - ok', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        // Intercept the window:confirm event and assert the confirm message
        cy.on('window:confirm', function (str) {
            expect(str).to.eq('I am a JS Confirm')
            return true
        })

        // Click the button triggering the JavaScript confirm alert
        cy.get('button').contains('Click for JS Confirm').click()

        // Assert the result message after clicking the OK option
        cy.get('#result').should("have.text", 'You clicked: Ok')
    })

    // Test case to verify the JavaScript confirm alert - Cancel option
    it.only('verify the confirm alert - cancel', function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        // Intercept the window:confirm event and assert the confirm message
        cy.on('window:confirm', function (str) {
            expect(str).to.eq('I am a JS Confirm')
            return false
        })

        // Click the button triggering the JavaScript confirm alert
        cy.get('button').contains('Click for JS Confirm').click()

        // Assert the result message after clicking the Cancel option
        cy.get('#result').should("have.text", 'You clicked: Cancel')
    })

    // Test case to verify the JavaScript prompt - OK option (commented out)
    // it.only('verify the prompt- ok', function () {
    //     const firstName = "chinmay"
    //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    //     cy.get('button').contains('Click for JS Prompt').click()
    //     cy.on('window:prompt', function (str) {
    //         expect(str).to.eq('I am a JS prompt')
    //         return firstName
    //     })
    //     cy.get('#result').should('have.text', `You entered: ${firstName}`)
    // })

    // Test case to verify the JavaScript prompt - OK option using stub (commented out)
    it.only('verify the prompt- ok stub', function () {
        // Visit the specified URL
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        // Stub the window.prompt function to return a specific value
        cy.window().then(function (win) {
            cy.stub(win, 'prompt').returns('chinmay')
            // Click the button triggering the JavaScript prompt alert
            cy.get('button').contains('Click for JS Prompt').click()
        })

        // Assert the result message after clicking the OK option
        cy.get('#result').should('have.text', `You entered: chinmay`)
    })
})
