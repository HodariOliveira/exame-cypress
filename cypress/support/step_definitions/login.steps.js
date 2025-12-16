/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import creds from '../../fixtures/credentials.json'

Given('que estou na página Login', () => {
  cy.openLoginPage()
  cy.get('.login-form', { timeout: 10000 })
    .should('be.visible')
})

When('informo email e senha válidos', () => {
  cy.submitLoginForm(
    creds.valid.email,
    creds.valid.password
  )
})

When('informo email e senha inválidos', () => {
  cy.submitLoginForm(
    creds.invalid.email,
    creds.invalid.password
  )
})

Then('devo ser direcionado à Homepage', () => {
  cy.contains('a', 'Home', { timeout: 10000 })
    .should('have.css', 'color', 'rgb(255, 165, 0)')
})

Then('devo ver o texto {string}', (text) => {
  cy.contains(text, { timeout: 10000 })
    .should('be.visible')
})

Then('devo ver a mensagem {string}', (message) => {
  cy.get('.login-form > form > p')
    .should('contain.text', message)
})
