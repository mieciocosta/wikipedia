import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I send a GraphQL query to get user details', () => {
  cy.request({
    method: 'POST',
    url: 'https://graphqlzero.almansi.me/api',
    body: {
      query: `
        query {
          user(id: 1) {
            id
            username
            email
            address {
              geo {
                lat
                lng
              }
            }
          }
        }
      `
    }
  }).as('graphqlResponse');
});

Then('the response should have the user details', () => {
  cy.get('@graphqlResponse').then((response) => {
    expect(response.status).to.eq(200);
    const user = response.body.data.user;
    expect(user).to.have.property('id', '1');
    expect(user).to.have.property('username', 'Bret');
    expect(user).to.have.property('email', 'Sincere@april.biz');
    expect(user.address.geo).to.have.property('lat', -37.3159);
    expect(user.address.geo).to.have.property('lng', 81.1496);
  });
});
