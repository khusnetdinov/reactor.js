module.exports = {
  config: {
    server: {
      port: 4000
    },

    paths: {
      public: 'build',
      watched: ['app']
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
    },

    modules: {
      autoRequire: {
        'javascript/application.js': ['javascript/application']
      }
    },

    overrides: {
      production: {
      },

      test: {
      }
    }
  }
};
