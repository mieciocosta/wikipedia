const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome-report",
    overwrite: false,
    html: true,
    json: true,
    timestamp: "dd-mm-yyyy_HHMMss",
    charts: true,
    reportPageTitle: "Relatório de testes",
  },
  env: {
    graphqlUrl: "https://graphqlzero.almansi.me/api",
    USER_ID: '1',
    USERNAME: 'Bret',
    EMAIL: 'Sincere@april.biz',
    LATITUDE: -37.3159,
    LONGITUDE: 81.1496
  },
  e2e: {
    baseUrl: "https://www.wikipedia.org",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    specPattern: 'cypress/e2e/features/*.feature',
    supportFile: 'cypress/support/e2e.js',
  },
  video: true,
});
