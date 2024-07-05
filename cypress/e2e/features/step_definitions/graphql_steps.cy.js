import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import { getUserQuery } from '../../../support/graphqlQueries';

Given('I send a GraphQL query to get user details', () => {
  cy.request({
    method: 'POST',
    url: Cypress.env('graphqlUrl'),
    body: {
      query: getUserQuery,
    },
  }).as('graphqlResponse');
  cy.percySnapshot('GraphQL Query Sent');
});

Then('the response should have the user details', () => {
  cy.get('@graphqlResponse').then((response) => {
    expect(response.status).to.eq(200);
    const user = response.body.data.user;
    expect(user).to.have.property('id', Cypress.env('USER_ID'));
    expect(user).to.have.property('username', Cypress.env('USERNAME'));
    expect(user).to.have.property('email', Cypress.env('EMAIL'));
    expect(user.address.geo).to.have.property('lat', Cypress.env('LATITUDE'));
    expect(user.address.geo).to.have.property('lng', Cypress.env('LONGITUDE'));
    cy.percySnapshot('GraphQL Response with User Details');
  });
});
