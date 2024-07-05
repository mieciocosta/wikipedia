import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import WikipediaPage from '../../../pages/WikipediaPage';

const wikipediaPage = new WikipediaPage();

Given('I open the Wikipedia home page', () => {
  wikipediaPage.visit();
});

When('I search for {string}', (term) => {
  wikipediaPage.search(term);
});

Then('the main content should contain {string}', (term) => {
  wikipediaPage.verifyMainContent(term);
});

Then('the main sections should be visible', () => {
  wikipediaPage.verifyMainSections();
});
