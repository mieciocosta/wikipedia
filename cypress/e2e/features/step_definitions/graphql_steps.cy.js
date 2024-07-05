import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import { getUserQuery } from '../../../support/graphqlQueries';
import {
  USER_ID,
  USERNAME,
  EMAIL,
  LATITUDE,
  LONGITUDE,
} from '../../../support/constants';

Given('I send a GraphQL query to get user details', () => {
  cy.request({
    method: 'POST',
    url: Cypress.env('graphqlUrl'),
    body: {
      query: getUserQuery,
    },
  }).as('graphqlResponse');
});

Then('the response should have the user details', () => {
  cy.get('@graphqlResponse').then((response) => {
    expect(response.status).to.eq(200);
    const user = response.body.data.user;
    expect(user).to.have.property('id', USER_ID);
    expect(user).to.have.property('username', USERNAME);
    expect(user).to.have.property('email', EMAIL);
    expect(user.address.geo).to.have.property('lat', LATITUDE);
    expect(user.address.geo).to.have.property('lng', LONGITUDE);
  });
});
