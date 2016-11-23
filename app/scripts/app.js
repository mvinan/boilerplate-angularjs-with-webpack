/**
 * Module Dependencies
 */
'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
import ngMessages from 'angular-messages';
import ngTouch from 'angular-touch';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import ngCookies from 'angular-cookies';
import ngAria from 'angular-aria';


angular.module('angularApp', [
  ngAnimate,
  ngAria,
  ngCookies,
  ngMessages,
  ngResource,
  ngRoute,
  ngSanitize,
  ngTouch,
]).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
