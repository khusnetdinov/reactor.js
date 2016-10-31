// See http://brunch.io for documentation.
module.exports = {
  config: {
    server: {
      port: 4000
    },

    files: {
      javascripts: {joinTo: 'javascript/application.js'},
      stylesheets: {joinTo: 'stylesheets/application.css'},
    },

    plugins: {
      eslint: {
        pattern: /^app\/.*\.js?$/,
        warnOnly: true,
        config: {
          rules: {
            'array-callback-return': 'warn'
          }
        }
      },

      sass: {
        mode: 'native'
      },

      babel: {
        presets: ['es2015', 'es2016', 'react']
      }
    }
  }
};
