// cypress/support/e2e.js
// Se você não precisa do commands.js, comente ou remova esta linha
import './commands';
import '@percy/cypress';

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('input[name=email]').type(email);
  cy.get('input[name=password]').type(password);
  cy.get('button[type=submit]').click();
});
