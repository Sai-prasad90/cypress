                                     // Describe block is used to group tests together and provides a description for the test suite.
describe('verify the contact us form', function () {

                                                                        // The 'it' block represents an individual test case.
    it('verify the contact us form with valid data', function () {
                                                                       // Arrangement: Visits the specified URL.
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

                                                                         // Action: Fills in the contact us form with valid data.
        cy.get('input[name="first_name"]').type('sai')
        cy.get('input[name="last_name"]').type('prasad')
        cy.get('input[name="email"]').type("01saiprasad@gmai.com")
        cy.get('textarea[name="message"]').type('Why am I learning this')
        cy.get('input[type="submit"]').click()

                                          // Assertion: Verifies that an h1 element is visible after form submission.
        cy.get('h1').should('be.visible')
    })

    it('verify the functionality of reset button', function () {
                                               // Arrangement: Visits the specified URL.
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

                                                                // Action: Fills in the contact us form and clicks the reset button.
        cy.get('input[name="first_name"]').type('sai')
        cy.get('input[name="last_name"]').type('prasad')
        cy.get('input[name="email"]').type("01saiprasad0@gmai.com")
        cy.get('textarea[name="message"]').type('I am learning javascript')
        cy.get('input[type="reset"]').click()

                                            // Assertion: Verifies that the 'first_name' input is empty after clicking the reset button.
        cy.get('input[name="first_name"]').should('have.text', "")
    })

    it.only('verify the functionality of contact us form with invalid data', function () {
                                                // Arrangement: Visits the specified URL.
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

                                                // Arrangement and Action: Fills in the contact us form with invalid data and clicks the submit button.
        cy.get('input[name="first_name"]').type('sai')
        cy.get('input[name="last_name"]').type('prasad')
        cy.get('input[name="email"]').type("01saiprasad@gmai.com")
        cy.get('textarea[name="message"]').type('I am learning javascript')
        cy.get('input[type="submit"]').click()

                                                // Assertion: Verifies that the body contains the error message 'Error: Invalid email address'.
        cy.get('body').should('contain', 'Error: Invalid email address')
    })
})
