describe('Exame - checkout (Automation Exercise)', () => {

    it('Deve validar produtos incluídos na tela de pagamento - login', () => {
        cy.openLoginPage()
        cy.login()
        cy.contains('a', 'Products')
            .click()
        cy.get('.title.text-center')
            .should('contain.text', 'All Products')

        cy.addProductBySearch('Summer White Top')
        cy.addProductBySearch('Madame Top For Women')
        cy.addProductBySearch('Premium Polo T-Shirts', 'viewCart')

        cy.contains('a', 'Proceed To Checkout')
            .click()


        const products = [
            'Summer White Top',
            'Madame Top For Women',
            'Premium Polo T-Shirts'
        ]

        products.forEach(product => {
            cy.get('.cart_description')
                .should('contain.text', product)
        })
    })

    it('Deve validar produtos incluídos na tela de pagamento - sem login', () => {
        cy.openLoginPage()
        cy.contains('a', 'Products')
            .click()
        cy.get('.title.text-center')
            .should('contain.text', 'All Products')

        cy.addProductBySearch('Summer White Top')
        cy.addProductBySearch('Madame Top For Women')
        cy.addProductBySearch('Premium Polo T-Shirts', 'viewCart')

        cy.contains('a', 'Proceed To Checkout')
            .click()

        cy.get('#checkoutModal')
            .should('be.visible')
        cy.contains('button, a', 'Register / Login')
            .click()

        cy.login()

        cy.contains('a', 'Cart')
            .click()

        cy.contains('a', 'Proceed To Checkout')
            .click()

        const products = [
            'Summer White Top',
            'Madame Top For Women',
            'Premium Polo T-Shirts'
        ]

        products.forEach(product => {
            cy.get('.cart_description')
                .should('contain.text', product)
        })

    })

})