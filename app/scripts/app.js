'use strict';

/**
 * @ngdoc overview
 * @name graceApp
 * @description
 * # graceApp
 *
 * Main module of the application.
 */
angular
  .module('graceApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize'
  ])
  .constant('config', {
    pointInterval: 30000,
    countryReward: 1
  })
  .config(function ($routeProvider) {
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
  })
  .run(function($rootScope){
    $rootScope.levelColors = ['#ccc','#aaa','#999','#777','#555','#333','#111'];
  })
