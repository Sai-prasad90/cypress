/// <reference types="cypress" />

// methods
describe('webelements method', function () {

    // Test case for click() method
    it('click() - click on a function', function () {
        // Visit the specified URL
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        // Type values into input fields
        cy.get('[name="first_name"]').type("sai")
        cy.get('[name="last_name"]').type("wate")
        cy.get('[name="email"]').type("01saiprasad@gmail.com")
        cy.get('[name="message"]').type("I am learning something which i dont know")
        // Click on the submit button
        cy.get('[type="submit"]').click() // click()
        // Assert the existence of an h1 element
        cy.get('h1').should('exist')
    })

    // Test case for type() method
    it('type() - type on input element', function () {
        // Visit the specified URL
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        // Type values into input fields
        cy.get('[name="first_name"]').type("chetya") // type()
        cy.get('[name="last_name"]').type("aag")
        cy.get('[name="email"]').type("chetan_aag25@gmail.com")
        cy.get('[name="message"]').type("I am learning python")
        // Click on the submit button
        cy.get('[type="submit"]').click()
        // Assert the existence of an h1 element
        cy.get('h1').should('exist')
    })

    // Test case for clear() method
    it('clear() - clearing the element', function () {
        // Arrangement: Visit the specified URL
        // Action: Type and then clear the first name field
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name= "first_name"]').as("firstName")
        cy.get('@firstName').type('Sai wate')
        cy.get('@firstName').clear()
        // Assertion: Verify that the first name field is now empty
        cy.get('@firstName').should('have.text', '')
    })

    // Test case for getting attribute and verifying attribute
    it('getting attribute and verifying attribute', function () {
        // Visit the specified URL
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        // Assert attributes of an h2 element
        cy.get('h2').should('have.attr', 'class')
        cy.get('h2').should('have.attr', 'name')
        cy.get('h2').should('have.attr', 'class', 'section_header')
        cy.get('h2').should('have.attr', 'name', 'contactme')
        // Log the values of attributes
        cy.get('h2').invoke('attr', 'class').then(function (text) {
            cy.log(text)
        })
        cy.get('h2').invoke('attr', 'name').then(function (text) {
            cy.log(text)
        })
    })

    // Test case for getting text and and and and verify the text of element
    it('getting text and verifying the text of element', function () {
        // Visit the specified URL
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        // Assert the text content of an h2 element
        cy.get('h2').should('have.text', 'CONTACT US')
        // Log the text 
        cy.get('h2').invoke('text').then(function (txt) {
            cy.log(txt)
        })
        // Assert that the h2 element is visible
        cy.get('h2').should('be.visible')
    })

    // Test case to check element is select ahe or nhi
      it('element is selected', function () {
        // Visit the specified URL
        cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        // Assert checkbox with value "Lettuce" is checked
        cy.get('[value="Lettuce"]').should('be.checked')
    })

    // element is enabled
    it('element is enabled', function () {
        
        cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        //asert "cabbage" is disabled
        cy.get('[value="cabbage"]').should('be.disabled')
    })

})