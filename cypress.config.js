const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    "demoBlazeUrl": "https://www.demoblaze.com/index.html"
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.feature',
  },
});
