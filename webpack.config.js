var Webpack = require('webpack');

require('es6-promise').polyfill();

module.exports = {
  entry: {
    app: './app/app.js',
    vendor: [
      'angular',
      'angular-mocks'
    ]
  },
  output: {
    path: './app',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loaders: ['ng-annotate', 'babel-loader']
      }
    ]
  },
  plugins: [
    new Webpack.optimize.CommonsChunkPlugin(chunkName='vendor', filename='vendor.bundle.js')
  ],
  devtool: 'source-map'
}