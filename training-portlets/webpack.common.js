const path = require('path');

let config = {
  context: path.resolve(__dirname, '.'),
  // set the entry point of the application
  // can use multiple entry
  entry: {
    training: './src/main/webapp/vue-app/Training/main.js',
<<<<<<< HEAD
    second: './src/main/webapp/vue-app/Training/secondemain.js',

=======
    second: './src/main/webapp/vue-app/Training/seconde.js',
>>>>>>> 82979cb2da45a7d0a64126bf7c69e2cb0d892743
  },
  output: {
    filename: 'js/[name].bundle.js',
    libraryTarget: 'amd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.vue$/,
        use: [
          'vue-loader',
          'eslint-loader'
        ]
      }
    ]
  },
  externals: {
    vue: 'Vue',
    vuetify: 'Vuetify',
    jquery: '$',
  },
};

module.exports = config;
