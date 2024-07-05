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
    cy.get('#firstHeading').should('exist'); // Verifica a existência do título
    cy.get('.mw-parser-output > p').first().should('exist'); // Verifica a existência da introdução
    cy.get('.infobox').should('exist'); // Verifica a existência da tabela de informações
    cy.get('.mw-headline').each((headline) => {
      cy.wrap(headline).should('exist'); // Verifica a existência das seções principais
    });
  }
}

export default WikipediaPage;
