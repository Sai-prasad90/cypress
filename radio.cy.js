/// <reference types="cypress" />

// Test suite for DropDown, Checkboxes, and Radio Buttons
describe('DropDown,Checkboxes and Radio Buttons', function () {

    // Test case: Selecting an option from the drop-down
    it('should select an option from drop-down', function () {
        // Arrangement: Visit the target webpage
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

        // Action: Select 'Python' from the first drop-down
        cy.get('#dropdowm-menu-1').select('Python')

        // Assertion: Check if the selected value is 'python'
        cy.get('#dropdowm-menu-1').should('have.value', 'python')

        // Action: Select 'Maven' from the second drop-down
        cy.get('#dropdowm-menu-2').select('Maven')

        // Assertion: Check if the selected value is 'maven'
        cy.get('#dropdowm-menu-2').should('have.value', 'maven')
    })

    // Test case: Selecting and unselecting checkboxes
    it.only('should select and unselect checkboxes', function () {
        // Arrangement: Visit the target webpage
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

        // Action: Click on the checkbox with value 'option-2'
        cy.get('input[value="option-2"]').click()

        // Assertion: Check if the checkbox with value 'option-2' is checked
        cy.get('input[value="option-2"]').should('be.checked')

        // Action: Check the checkbox with value 'option-3'
        cy.get('input[value="option-3"]').check()

        // Assertion: Check if the checkbox with value 'option-3' is checked
        cy.get('input[value="option-3"]').should('be.checked')

        // Action: Uncheck the checkbox with value 'option-3'
        cy.get('input[value="option-3"]').uncheck()

        // Assertion: Check if the checkbox with value 'option-3' is unchecked
        cy.get('input[value="option-3"]').should('not.be.checked')
    })

    // Test case: Selecting and validating radio buttons
    it('should select and validate radio buttons', function () {
        // Arrangement: Visit the target webpage
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

        // Action: Check the radio button with value 'green'
        cy.get('input[value="green"]').check().should('be.checked')

        // Assertion: Check if the radio button with value 'blue' is not checked
        cy.get('input[value="blue"]').should('not.be.checked')
    })
})
