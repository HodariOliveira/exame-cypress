import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given('que estou na página produtos', () => {
    cy.openLoginPage()
    cy.contains('a', 'Products').click()
})

When('adiciono o produto {string} ao carrinho pelo overlay', (productName) => {
    cy.searchProduct(productName)
    cy.addProductToCartByName(productName)

    cy.get('.modal-content', { timeout: 5000 })
        .should('be.visible')

    cy.contains('View Cart').click()
})

When('adiciono o produto {string} ao carrinho via View Product', (productName) => {
    cy.searchProduct(productName)

    cy.contains('.productinfo p', productName)
        .parents('.product-image-wrapper')
        .within(() => {
            cy.contains('a', 'View Product').click({ force: true })
        })

    cy.url().should('include', '/product_details')

    cy.contains('button', 'Add to cart').click()

    cy.get('.modal-content', { timeout: 5000 })
        .should('be.visible')

    cy.contains('View Cart').click()
})

Then('devo ver o produto {string} no carrinho', (productName) => {
    cy.get('.cart_description')
        .should('contain.text', productName)
})
