// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />
// intellisense for "cypress-if" commands
/// <reference types="cypress-if" />
import 'cypress-if'

// TODO: modify this test to use "cypress-if" commands
// and only expand the section
// only if its attribute "aria-expanded" is "false"
// Tip: you can change the initial section by editing the "index.html" file
it('expands the element if needed', () => {
  cy.visit('index.html')
  cy.contains('h1', 'Test page').should('be.visible')
  // we don't know if the section is expanded or not
  // find the "Expand" button and click it
  // but only if the section is not expanded already
  // the section should be visible now
  cy.get('section').should('be.visible')
})
