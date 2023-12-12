/// <reference types="cypress" />

// Test suite for traversal methods
describe('transversal method', function(){

    // Test case: To get children of DOM elements using .children() command
    it('To get children of DOM elements, use the .children() command.', function(){
        // Visit the specified webpage
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
        
        // Select an element with class 'traversal-button-states'
        cy.get('.traversal-button-states')
        
            // Use .children() to get the children of the selected element
            .children()
            
            // Assert that the number of children should be 4
            .should('have.length', 4)
    })

    // Test case: To get the previous sibling DOM element using .prev() command
    it('To get the previous sibling DOM element within elements, use the .prev() command.', function(){
        // Visit the specified webpage
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
        
        // Select an element with id 'veggie'
        cy.get("#veggie")
        
            // Use .prev() to get the previous sibling element
            .prev()
            
            // Assert that the text content of the previous sibling should be 'Figs'
            .should('have.text', 'Figs')
    })

    // Test case: To get all of the next sibling DOM elements using .nextAll() command
    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.', function(){
        // Visit the specified webpage
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
        
        // Select an element with id 'veggie'
        cy.get("#veggie")
        
            // Use .nextAll() to get all the next sibling elements
            .nextAll()
            
            // Assert that the number of next sibling elements should be 4
            .should('have.length', 4)
            
            // Assert that the number of next sibling elements should be greater than 2
            .should('have.length.greaterThan', 2);
    })

    // Test case: To get all previous sibling DOM elements using .prevAll() command
    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.', function(){
        // Visit the specified webpage
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
        
        // Select an element with id 'veggie'
        cy.get("#veggie")
        
            // Use .prevAll() to get all previous sibling elements
            .prevAll()
            
            // Assert that the number of previous sibling elements should be 6
            .should('have.length', 6)
            
            // Assert that the number of previous sibling elements should be greater than 5
            .should('have.length.greaterThan', 5);
    })

    // Test case: To get all sibling DOM elements using .siblings() command
    it('To get all sibling DOM elements of elements, use the .siblings() command.', function(){
        // Visit the specified webpage
        cy.visit("https://webdriveruniversity.com/Data-Table/index.html")
        
        // Select an element with id 'veggie'
        cy.get("#veggie")
        
            // Use .siblings() to get all sibling elements
            .siblings()
            
            // Assert that the number of sibling elements should be 10
            .should('have.length', 10)
    })
})
