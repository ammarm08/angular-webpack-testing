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
    preLoaders: [
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'ng-annotate'
      }
    ],
    loaders: [
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new Webpack.optimize.CommonsChunkPlugin(chunkName='vendor', filename='vendor.bundle.js')
  ],
  devtool: 'source-map'
}