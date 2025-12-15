describe('Exame - add to cart (Automation Exercise)', () => {

    it.only('Deve adicionar produto ao carrinho via modal "Overlay"', () => {
        cy.openLoginPage()
        cy.searchProduct('Summer White Top')  // já clica em Products e faz tudo
        cy.addProductToCartByName('Summer White Top')
        cy.get('.modal-content', { timeout: 5000 })
            .should('be.visible')
        cy.get('.modal-content')
            .contains('View Cart')
            .click()
        cy.get('.cart_description')
            .should('contain.text', 'Summer White Top')
    })

    it('Deve adicionar produto ao carrinho via View Product', () => {
        
        const productName = 'Summer White Top'

        cy.openLoginPage()
        cy.searchProduct('Summer White Top')  // já faz tudo
        cy.contains('.productinfo p', productName)
            .should('be.visible')
        // clicar em View Product
        cy.contains('.productinfo p', productName)
            .parents('.product-image-wrapper')
            .within(() => {
                cy.contains('a', 'View Product').click({ force: true })
            })
        cy.url().should('include', '/product_details')
        cy.contains('button', 'Add to cart').click()

        // garante que o modal apareceu
        cy.get('.modal-content', { timeout: 5000 })
            .should('be.visible')
        cy.get('.modal-content')
            .contains('View Cart')
            .click()

        cy.get('.cart_description')
            .should('contain.text', 'Summer White Top')
    })

})