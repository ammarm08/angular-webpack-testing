This is an extension of Brad's Angular + Karma testing demo.

**Babel 6.0 Compatible Setup in branch "babel-6"**
- Babel 6.x (babel-core, babel-loader)
- Babel-preset-es2015
- Karma 0.13.xx

In webpack + karma's webpack config files, module loaders 
include a preset param that explicitly looks for es2015. 

```
...
query: {
  presets: ['es2015']
}
...
```

This is a Babel 6.x update as they move away from only transpiling
ES6-to-JS.

If you want the Babel 5.x compatible setup, see branch "babel-5".

Features:
- Karma + Mocha test framework
- Babel: transpiling app, vendor, and test scripts from ES6 to JS
- Babel (5.x or 6.x) and Karma 0.13.xx do not conflict with each other
- Bundling app scripts and vendor scripts into separate scripts

Original blog post here: [Getting started with Karma for AngularJS Testing](http://www.bradoncode.com/blog/2015/05/19/karma-angularjs-testing/)

Getting Started:

```
npm install
npm test
```

Whats Going On in "NPM TEST":

1. Builds 'bundle.js' and 'vendor.bundle.js' with Webpack (webpack.config.js)
	- Entrypoint #1: './app/app.js' -> ES6-to-JS transpile + write to bundle.js
	- Entrypoint #2: 'angular' & 'angular-mock' -> write both to vendor.bundle.js
2. Runs tests with Karma + Mocha (karma.conf.js)
	- Loads vendor.bundle.js and bundle.js into browser for Karma + Mocha to use in testing
	- Using Webpack's Require.Context pattern, bundles up all test files into tests/tests.bundle.js
	- ES6-toJS transpile of all test files, then run tests
		- Tests have access to everything in bundle.js and vendor.bundle.js (aka the Angular app and its dependencies)
		- This allows extendability of app + tests as product grows
			- After writing new controllers, make sure to import them into app.js
			- Tests for new controllers should exist as newController.controller.test.js in tests folder