import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
    browserPermissions: {
      notifications: 'allow',
      geolocation: "allow"
    },
    webUrl: 'https://oddbit210.biostar2.com/#/login',
  },
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 800,
  video: false,
  retries: {
    runMode: 2,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts')(on, config)
      
    },
  },
});
