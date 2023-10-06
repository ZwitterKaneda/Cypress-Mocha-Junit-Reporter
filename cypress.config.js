import { defineConfig } from "cypress";

export default defineConfig({
  reporter:"mocha-junit-reporter",
  reporterOptions:{
    "mochaFile": "reports/test-[hash].xml",
		"toConsole": false,
		"outputs": true,
		"testCaseSwitchClassnameAndName": true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
