import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:4200',
    specPattern: 'e2e/src/e2e/**/*.cy.ts',
    supportFile: 'e2e/src/support/e2e.ts',
    fixturesFolder: 'e2e/src/fixtures',
    videosFolder: 'dist/cypress/videos',
    screenshotsFolder: 'dist/cypress/screenshots',
    chromeWebSecurity: false,
    video: true
  }
});
