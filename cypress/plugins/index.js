const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
};


module.exports = (on, config) => {
  require('@percy/cypress/task')(on, config);
  return config;
};
