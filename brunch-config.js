// See http://brunch.io for documentation.
module.exports = {
  config: {
    server: {
      port: 4000
    },

    files: {
      javascripts: {joinTo: 'javascript/application.js'},
      stylesheets: {joinTo: 'stylesheets/application.css'},
    }
  }
};
