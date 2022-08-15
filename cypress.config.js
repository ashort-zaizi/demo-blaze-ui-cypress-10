const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      config.baseUrl = "https://www.demoblaze.com/index.html"
      
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"]
  },
});
