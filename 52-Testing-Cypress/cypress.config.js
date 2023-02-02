const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1500,
  viewportWidth: 1200,
  videoCompression: 0,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://127.0.0.1:5500/52-Testing-Cypress',
  },
})
