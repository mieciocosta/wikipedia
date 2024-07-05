class WikipediaPage {
    visit() {
      cy.visit('/');
    }
  
    search(term) {
      cy.get('input[name="search"]').type(term + '{enter}');
    }
  
    verifyContent(content) {
      cy.contains(content).should('be.visible');
    }
  }
  
  export default WikipediaPage;
  