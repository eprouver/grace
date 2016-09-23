'use strict';

/**
 * @ngdoc directive
 * @name graceApp.directive:gameHolder
 * @description
 * # gameHolder
 */
angular.module('graceApp')
  .directive('gameHolder', function () {
    return {
      templateUrl: 'views/gameholder.html',
      replace:true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
