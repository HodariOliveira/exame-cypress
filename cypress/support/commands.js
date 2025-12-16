// cypress/support/commands.js


Cypress.Commands.add('openLoginPage', () => {
    cy.viewport(1440, 900)
    cy.visit('https://www.automationexercise.com/login')
})


Cypress.Commands.add('submitLoginForm', (email, senha) => {
    // garante que estamos na seção correta e submete o formulário dentro dela
    cy.get('.login-form')
        .within(() => {
            cy.get('input[name="email"]')
                .clear()
                .type(email)
            cy.get('input[name="password"]')
                .clear()
                .type(senha)
            cy.contains('button', 'Login')
                .click()
        })
})

// comando de alto nível para login usando fixture
Cypress.Commands.add('login', (email, senha) => {
    // se email/senha não foram enviados, tenta usar fixture padrão
    if (!email || !senha) {
        cy.fixture('credentials').then((c) => {
            cy.submitLoginForm(c.valid.email, c.valid.password)
        })
    } else {
        cy.submitLoginForm(email, senha)
    }
})

Cypress.Commands.add('searchProduct', (productName) => {
    // digita e busca
    cy.get('#search_product')
        .clear()
        .type(productName)
    cy.get('#submit_search')
        .click()
    // garante que a busca carregou
    cy.get('.title.text-center')
        .should('contain.text', 'Searched Products')
})

Cypress.Commands.add('addProductToCartByName', (productName) => {
    // garante que a lista de produtos carregou
    cy.get('.product-image-wrapper', { timeout: 5000 })
        .should('exist')

    // localiza o card do produto
    cy.contains('.productinfo p', productName)
        .parents('.product-image-wrapper')
        .as('card')

    // primeiro clique
    cy.get('@card')
        .find('a.add-to-cart')
        .first()
        .click({ force: true })

    // espera overlay aparecer
    cy.get('@card')
        .within(() => {
            cy.get('.product-overlay, .overlay-content, .modal', { timeout: 5000 })
                .should('be.visible')
        })

    // segundo clique (overlay)
    cy.get('@card')
        .find('.product-overlay .add-to-cart, .overlay-content .add-to-cart')
        .first()
        .click({ force: true })
})

Cypress.Commands.add('addProductBySearch', (productName, action = 'continue') => {
    cy.searchProduct(productName)
    cy.addProductToCartByName(productName)

    cy.get('#cartModal', { timeout: 5000 })
        .should('be.visible')

    if (action === 'continue') {
        cy.contains('button, a', 'Continue Shopping').click()
    }

    if (action === 'viewCart') {
        cy.contains('button, a', 'View Cart').click()
    }
})

Cypress.Commands.add('closeCartModal', () => {
    cy.get('#cartModal', { timeout: 5000 })
        .should('be.visible')

    cy.contains('button, a', 'Continue Shopping')
        .click()

    cy.get('#cartModal')
        .should('not.be.visible')
})

