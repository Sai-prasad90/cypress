//day1



// Describe block is used to group tests together and provides a description for the test 
describe('working with webelements', function() {

  // The 'it' block represents an individual test case.
  it('visit the webpage', function() {

      // Visiting the specified URL.
      cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
      
      // Typing values into input elements using cy.get() and type().
      cy.get('input[name="first_name"]').type("sai")
      cy.get('input[name="last_name"]').type("prasad")
      cy.get('input[name="email"]').type("01saiprasad@gmail.com")
      cy.get('textarea[name="message"]').type('cypress is frustrating')
      
      // Note: The next line is commented out in the provided code. Uncomment it to click the submit button.
      // cy.get('input[type="submit"]').click()

      // Clearing the value in the 'first_name' input element.
      cy.get('input[name="first_name"]').clear()

      // Verifying the attribute of the 'first_name' input element using should() and have.attr().
      cy.get('input[name="first_name"]').should('have.attr', 'name', 'first_name')

      // Logging properties of the 'first_name' input element using then() and log().
      cy.get('input[name="first_name"]').then(function(el) {
          // Logging various properties of the element.
          cy.log(el.prop('name'))
          cy.log(el.prop('type'))
          cy.log(el.prop('class'))
          cy.log(el.prop('placeholder'))
      })

      // Invoking attribute and property using invoke() and log().
      cy.get('input[name="first_name"]').invoke('attr', 'name').then(function(str) {
          // Logging the 'name' attribute.
          cy.log(str)
      })
      cy.get('input[name="first_name"]').invoke('prop', 'name').then(function(str) {
          // Logging the 'name' property.
          cy.log(str)
      })
  })
})
