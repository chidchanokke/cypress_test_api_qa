// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });


const { defineConfig } = require('cypress');
const env = process.env.CYPRESS_ENV || 'dev' ; //default url => npx cypress open
const envConfig = require(`./cypress/config/cypress.${env}.config.js`);
//CYPRESS_ENV=staging npx cypress open


module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: 'test-custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    html: false,
    json: true,
    
  },//mocha report
  e2e: {
    baseUrl: envConfig.env.apiUrl,
    setupNodeEvents(on, config) {
      try {
        require("cypress-mochawesome-reporter/plugin")(on);
      } catch (err) {
        console.error("Plugin error", err);
      }
      return config;
    }
    
  },

  env: envConfig.env
});
