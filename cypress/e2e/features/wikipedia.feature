Feature: Wikipedia Search

Scenario: Search Wikipedia
  Given I open the Wikipedia home page
  When I search for "Brasil"
  Then the main content should contain "Brasil"
  And the main sections should be visible
