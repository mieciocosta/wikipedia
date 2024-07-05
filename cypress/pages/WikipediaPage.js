// cypress/pages/WikipediaPage.js
class WikipediaPage {
  visit() {
    cy.visit('/');
  }

  search(term) {
    cy.get('input[name="search"]').type(term + '{enter}');
  }

  verifyMainContent(term) {
    cy.get('span.mw-page-title-main').should('contain', term);
  }

  verifyMainSections() {
    cy.get('#content').should('be.visible');
    cy.get('#firstHeading').should('be.visible');
    cy.get('.infobox').should('be.visible');
  }
}

export default WikipediaPage;
