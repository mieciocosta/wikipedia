class WikipediaPage {
  visit() {
    cy.visit('/');
  }

  search(term) {
    cy.get('input[name="search"]').type(term + '{enter}');
  }

  verifyMainContent(term) {
    cy.get('#firstHeading', { timeout: 30000 }).should('contain', term);
    cy.get('#content', { timeout: 30000 }).should('be.visible');
    cy.percySnapshot('Main Content');
  }

  verifyMainSections() {
    cy.get('body', { timeout: 30000 }).should('be.visible');
    cy.get('#content', { timeout: 30000 }).should('be.visible');
    cy.get('#firstHeading', { timeout: 30000 }).should('be.visible');
    cy.get('.infobox', { timeout: 30000 }).should('be.visible');
    cy.percySnapshot('Main Sections');
  }
}

export default WikipediaPage;
