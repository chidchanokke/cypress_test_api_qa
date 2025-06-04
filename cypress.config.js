const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


// const { defineConfig } = require('cypress');
// const env = process.env.CYPRESS_ENV || 'dev' ; //default url => npx cypress open
// const envConfig = require(`./cypress/config/cypress.${env}.config`);
// //CYPRESS_ENV=staging npx cypress open


// module.exports = defineConfig({
//   reporter: 'cypress-mochawesome-reporter',
//   reporterOptions: {
//     charts: true,
//     reportPageTitle: 'custom-title',
//     embeddedScreenshots: true,
//     inlineAssets: true,
//     saveAllAttempts: false,
//   },
//   e2e: {
//     baseUrl: envConfig.env.apiUrl,
//     setupNodeEvents(on, config) {
//       require('cypress-mochawesome-reporter/plugin')(on);
//     },
//   },

//   env: envConfig.env
// });
