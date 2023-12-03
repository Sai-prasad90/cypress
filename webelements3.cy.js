// Describe block is used to group tests together and provides a description for the test suite.
describe('Locating elements', function () {

                                                    // The 'it' block represents an individual test case.
    it('find a single element', function () {
        // Visiting the specified URL.
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // Locating an h2 element with name attribute equal to 'contactme' and verifying its existence.
        cy.get('h2[name= "contactme"]').should('exist')
    })

    it('find the multiple elements', function () {
        // to visit specific url
        
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // Locating input elements with type attribute equal to 'text' and verifying the count is 3.
          cy.get('input[type="text"]').should('have.length', 3)
        // Locating input elements with type attribute equal to 'submit' and verifying the count is greater than 0.
        cy.get('input[type="submit"]').should('have.length.greaterThan', 0)
    })

    it('find element by className', function () {
        // Visiting the specified URL.
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // Locating elements with the class 'text-center' and verifying the count is 2.
        cy.get('.text-center').should('have.length', 2)
    })

    it('find element by css Selector', function () {
        // input[attribute="value"]
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // Locating an h2 element with name attribute equal to 'contactme' and verifying its text content.
        cy.get('h2[name="contactme"]').should('have.text', 'CONTACT US')
    })

    it('find element by id', function () {
        // Visiting the specified URL.
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
                                                         // Locating an element with the id 'contact_form' and verifying its existence.
        cy.get('#contact_form').should('exist')
    })

    it('find element by link text', function () {
        // Visiting the specified URL.
        cy.visit('https://webdriveruniversity.com/')
        // Locating an element containing the text 'CONTACT US' and verifying its existence.
        cy.contains('CONTACT US').should('exist')
    })

    it('find element by name attribute', function () {
        // Visiting the specified URL.
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // Locating an element with the name attribute equal to 'first_name' and verifying its existence.
        cy.get('[name="first_name"]').should('exist')
    })

    it('find element by tagName', function () {
        // Visiting the specified URL.
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // Locating h2 elements and verifying their existence and text content.
        cy.get('h2').should('exist').should('have.text', 'CONTACT US')
    })
})
