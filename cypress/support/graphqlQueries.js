export const getUserQuery = `
  query {
    user(id: ${Cypress.env('USER_ID')}) {
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
