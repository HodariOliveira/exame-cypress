describe('Exame - search (Automation Exercise)', () => {

  it('Deve encontrar produto', () => {
    cy.openLoginPage()
    cy.searchProduct('Summer White Top')
    // valida o produto
    cy.contains('.productinfo p', 'Summer White Top', { timeout: 10000 })
      .should('be.visible')
  })

})
