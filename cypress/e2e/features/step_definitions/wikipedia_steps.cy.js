import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import WikipediaPage from '../../../pages/WikipediaPage';

const wikipediaPage = new WikipediaPage();

Given('I open the Wikipedia home page', () => {
  wikipediaPage.visit();
  cy.percySnapshot('Wikipedia Home Page');
});

When('I search for {string}', (term) => {
  wikipediaPage.search(term);
  cy.percySnapshot('Search Results');
});

Then('the main content should contain {string}', (term) => {
  wikipediaPage.verifyMainContent(term);
  cy.percySnapshot('Main Content');
});

Then('the main sections should be visible', () => {
  wikipediaPage.verifyMainSections();
  cy.percySnapshot('Main Sections');
});
