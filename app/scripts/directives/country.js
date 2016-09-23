'use strict';

/**
 * @ngdoc directive
 * @name graceApp.directive:country
 * @description
 * # country
 */
angular.module('graceApp')
  .directive('country', function () {
    return {
      restrict: 'C',
      link: function postLink(scope, element, attrs) {
        element.on('click', function(){
          debugger;
        })
      }
    };
  });
