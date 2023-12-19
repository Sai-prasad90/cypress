describe('traverse day-3', function () {

    // Test case 1: To get DOM elements that match a specific selector, use the .filter() command.
    it.only('To get DOM elements that match a specific selector, use the .filter() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        // Get all 'button' elements and filter out those with the class '.btn-outline-info'
        cy.get('button').filter('.btn-outline-info').should('have.length', 2)
    })

    // Test case 2: To remove DOM element(s) from the set of elements, use the .not() command.
    it.only('To remove DOM element(s) from the set of elements, use the .not() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        // Get child elements of '.traversal-button-states' that do not have the class '.disabled'
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length', 3)
    })

    // Test case 3: To get descendant DOM elements of the selector, use the .find() command.
    it.only('To get descendant DOM elements of the selector, use the .find() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        // Get the last '.thumbnail' element and find the '#coffee' element within it
        cy.get('.thumbnail').last().find('#coffee').should('have.text', 'Coffee')
    })

    // Test case 4: To get the closest ancestor DOM element, use the .closest() command.
    it.only('To get the closest ancestor DOM element, use the .closest() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        // Get the closest ancestor 'div' element for '.traversal-drinks-list' and '.traversal-buttons'
        cy.get('.traversal-drinks-list').closest('div').should('have.class', 'thumbnail')
        cy.get('.traversal-buttons').closest('div').should('have.class', 'thumbnail')
    })

    // Test case 5: To get parents DOM element of elements until another element, use the .parentsUntil() command.
    it.only('To get parents DOM element of elements until other element, use the .parentsUntil() command.', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        // Get the parent elements of '#coffee' until the '.thumbnail' element
        cy.get('#coffee').parentsUntil('.thumbnail').should('have.length', 1)
    })
})
