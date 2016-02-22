// Karma configuration
module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['mocha', 'chai'],

    files: [
        './app/vendor.bundle.js',
        './app/bundle.js',
        './tests/tests.bundle.js'
    ], 

    preprocessors: {
        './tests/tests.bundle.js': ['webpack']
    },

    webpack: { 
        devtool: 'inline-source-map',
        module: {
            loaders: [
                {   test: /\.js$/, 
                    loader: 'babel-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['', '.js']
        }
    },


    reporters: ['progress'],
    browsers: ['Chrome'],
    singleRun: true,
    logLevel: config.LOG_INFO
  });
}