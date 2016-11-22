/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(3);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * @ngdoc overview
	 * @name todoAngularApp
	 * @description
	 * # todoAngularApp
	 *
	 * Main module of the application.
	 */

	angular.module('todoAngularApp', ['ngAnimate', 'ngAria', 'ngCookies', 'ngMessages', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch']).config(function ($routeProvider) {
	  $routeProvider.when('/', {
	    templateUrl: 'views/main.html',
	    controller: 'MainCtrl',
	    controllerAs: 'main'
	  }).when('/about', {
	    templateUrl: 'views/about.html',
	    controller: 'AboutCtrl',
	    controllerAs: 'about'
	  }).otherwise({
	    redirectTo: '/'
	  });
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * @ngdoc function
	 * @name todoAngularApp.controller:AboutCtrl
	 * @description
	 * # AboutCtrl
	 * Controller of the todoAngularApp
	 */

	angular.module('todoAngularApp').controller('AboutCtrl', function () {
	  this.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * @ngdoc function
	 * @name todoAngularApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the todoAngularApp
	 */

	angular.module('todoAngularApp').controller('MainCtrl', function () {
	  this.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
	});

/***/ }
/******/ ]);