// Karma configuration
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    reporters: ['dots'],
    browsers: ['Chrome'],
    singleRun: true,

    files: [
        './app/vendor.bundle.js',
        './app/bundle.js',
        './tests/tests.bundle.js'
    ], 

    preprocessors: {
        './tests/tests.bundle.js': ['webpack', 'sourcemap']
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
    }
  });
}