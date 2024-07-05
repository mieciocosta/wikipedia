describe('Wikipedia Search', () => {
    it('Search for Cypress', () => {
      cy.visit('https://www.wikipedia.org/');
      cy.get('input[name="search"]').type('Cypress{enter}');
      cy.percySnapshot('Wikipedia Search');
      cy.contains('Cypress').should('be.visible');
    });
  });
  