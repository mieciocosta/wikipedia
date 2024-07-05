Feature: Wikipedia Search

Scenario: Search Wikipedia
  Given I open the Wikipedia home page
  When I search for "Cypress"
  Then I should see the main content for "Cypress"
