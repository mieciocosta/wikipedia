import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import WikipediaPage from '../../../pages/WikipediaPage';

const wikipediaPage = new WikipediaPage();

Given('I open the Wikipedia home page', () => {
  wikipediaPage.visit();
});

When('I search for {string}', (term) => {
  wikipediaPage.search(term);
});

Then('I should see the main content for {string}', (term) => {
  wikipediaPage.verifyMainContent(term);
});
