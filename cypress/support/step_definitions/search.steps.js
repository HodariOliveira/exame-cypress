import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given('que estou na página de produtos', () => {
  cy.openLoginPage()
  cy.contains('a', 'Products').click()
})

When('busco pelo produto {string}', (productName) => {
  cy.searchProduct(productName)
})

Then('devo ver o produto {string} nos resultados', (productName) => {
  cy.contains('.productinfo p', productName, { timeout: 10000 })
    .should('be.visible')
})
