This is an extension of Brad's Angular + Karma testing demo.

The primary source of change is in package.json, where the dependency versions being used
for Karma and Babel determine whether the test suite breaks or not. As far as I can tell, the new
version of Babel doesn't play nice out of the box with Karma.

Additions:
- Babel transpiling to Javascript
- Handling version conflicts
- Bundling app scripts and vendor scripts separately

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