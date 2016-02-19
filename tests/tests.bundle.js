// Set your own context. The code below searches the 'tests' directory for all files with 
// '.test' in their name and adds each of them to the current context.
// Karma + Webpack testing magic (https://webpack.github.io/docs/context.html#require-context)
let context = require.context(".", true, /\.test$/);
context.keys().forEach(context);