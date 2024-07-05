Feature: GraphQL API Test

Scenario: Fetch user data
  Given I send a GraphQL query to get user details
  Then the response should have the user details
