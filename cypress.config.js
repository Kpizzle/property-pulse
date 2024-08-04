const { defineConfig } = require("cypress");
const { GoogleSocialLogin } = require("cypress-social-logins").plugins

module.exports = (on, config) => {
  on("task", {
    GoogleSocialLogin: GoogleSocialLogin,
  })
}

module.exports = defineConfig({
  e2e: {
    "baseUrl": "http://localhost:3000",
    "chromeWebSecurity": false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
