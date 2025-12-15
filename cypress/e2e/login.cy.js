/// <reference types="cypress" />
import creds from '../fixtures/credentials.json'

describe('Exame - Login (Automation Exercise)', () => {

  beforeEach(() => {
    // visita a página de login diretamente
    cy.openLoginPage()
    // garante que a seção está visível
    cy.get('.login-form', { timeout: 10000 })
      .should('be.visible')
  })

  it('login válido - deve entrar com credenciais corretas', () => {
    // usa fixture via import (creds.valid)
    cy.submitLoginForm(creds.valid.email, creds.valid.password)

    // validação clara de sucesso
    cy.contains('Logged in as', { timeout: 10000 })
      .should('be.visible')
    // valida HOME ativa após login
    cy.contains('a', 'Home')
      .should('have.css', 'color', 'rgb(255, 165, 0)')

  })

  it('login inválido - deve mostrar mensagem de erro', () => {
    cy.submitLoginForm(creds.invalid.email, creds.invalid.password)

    // exemplo de mensagem possível — ajuste se o site usar outro seletor/texto
    cy.get('.login-form > form > p')
      .should('contain.text', 'Your email or password is incorrect!')
  })

})
