// cypress/support/graphqlQueries.js
export const getUserQuery = `
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
`;
