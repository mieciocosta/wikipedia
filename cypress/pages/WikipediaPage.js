class WikipediaPage {
  visit() {
    cy.visit('/');
  }

  search(term) {
    cy.get('input[name="search"]').type(term + '{enter}');
  }



  verifyMainSections() {
    cy.get('body', { timeout: 20000 }).should('be.visible');
    cy.get('#content', { timeout: 20000 }).should('be.visible');
    cy.get('#firstHeading', { timeout: 20000 }).should('be.visible');
    cy.get('.infobox', { timeout: 20000 }).should('be.visible');
    cy.percySnapshot('Main Sections');
  }
}

export default WikipediaPage;
