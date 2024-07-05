// cypress/e2e/graphql.cy.js
import { getUserQuery } from '../support/graphqlQueries';

describe('GraphQL API Tests', () => {
  it('should fetch user data', () => {
    cy.request({
      url: 'https://graphqlzero.almansi.me/api',
      method: 'POST',
      body: {
        query: getUserQuery,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      const user = response.body.data.user;
      expect(user).to.have.property('id', '1');
      expect(user).to.have.property('username', 'Bret');
      expect(user).to.have.property('email', 'Sincere@april.biz');
      expect(user.address.geo).to.have.property('lat', '-37.3159');
      expect(user.address.geo).to.have.property('lng', '81.1496');
    });
  });
});
