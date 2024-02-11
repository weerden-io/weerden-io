import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1225,
  defaultCommandTimeout: 10000,
  viewportHeight: 800,
  watchForFileChanges: false,
  fixturesFolder: "mocks/sap/",
  video: false,
  numTestsKeptInMemory: 1,

  retries: {
    runMode: 2,
    openMode: 0,
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: [
      "cypress/e2e/**/*.cy.{js,ts}",
      "cypress/component/**/*.cy.{js,ts}",
    ],
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
