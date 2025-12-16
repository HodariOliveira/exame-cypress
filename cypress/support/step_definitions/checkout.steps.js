import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

const products = [
    'Summer White Top',
    'Madame Top For Women',
    'Premium Polo T-Shirts'
]

Given('que estou logado no site', () => {
    cy.openLoginPage()
    cy.login()
})

Given('que não estou logado no site', () => {
    cy.openLoginPage()
})

When('adiciono os produtos ao carrinho e acesso o checkout', () => {
    cy.contains('a', 'Products').click()

    products.forEach((product, index) => {
        const action = index === products.length - 1 ? 'viewCart' : 'continue'
        cy.addProductBySearch(product, action)

        if (action === 'continue') {
            cy.closeCartModal()
        }
    })

    cy.contains('a', 'Proceed To Checkout').click()
})

When('adiciono os produtos ao carrinho e tento acessar o checkout', () => {
    cy.contains('a', 'Products').click()

    products.forEach((product, index) => {
        const action = index === products.length - 1 ? 'viewCart' : 'continue'
        cy.addProductBySearch(product, action)

        if (action === 'continue') {
            cy.closeCartModal()
        }
    })

    cy.contains('a', 'Proceed To Checkout').click()
})

Then('devo ser direcionado para o login', () => {
    cy.get('#checkoutModal')
        .should('be.visible')

    cy.contains('button, a', 'Register / Login')
        .click()
})

Then('após logar devo ver todos os produtos adicionados na página de pagamento', () => {
    cy.login()

    cy.contains('a', 'Cart').click()
    cy.contains('a', 'Proceed To Checkout').click()

    products.forEach(product => {
        cy.get('.cart_description')
            .should('contain.text', product)
    })
})

Then('devo ver todos os produtos adicionados na página de pagamento', () => {
    products.forEach(product => {
        cy.get('.cart_description')
            .should('contain.text', product)
    })
})
