// in cypress/support/index.ts
// load type definitions that come with Cypress module
// <reference types="cypress" />

export {}; // make the file a module, to get rid of the warning

declare global {
    namespace Cypress {
      interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        // tiap tambahin di function.js, tambahin lagi disini
         getElementByTestId(value: string): Chainable<Element>
         findElementByTestId(value: string): Chainable<Element>
         checkURL(value: string): Chainable<Element>
         getDataButtonName(value: string): Chainable<Element>
         findDataButtonName(value: string): Chainable<Element>
      }
    }
  }