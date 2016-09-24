'use strict';

/**
 * @ngdoc directive
 * @name graceApp.directive:gameHolder
 * @description
 * # gameHolder
 */
angular.module('graceApp')
  .directive('gameHolder', ['$rootScope', 'countryData', 'userData',
  function($rootScope, countryData, userData) {
    return {
      templateUrl: 'views/gameholder.html',
      replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.tab = 'map';
        scope.countryView = 'map';

        scope.countryData = countryData;
        scope.levelUp = function(country, e) {
          e.stopPropagation();
          if(userData.points < countryData.mapData[country.id].nextLevel){
            // $('#instructions').addClass('animated tada')
            // _.delay(function() {
            //   $('#instructions').removeClass('animated tada')
            // }, 1000);
            return;
          }

          //TODO ANIMATION FOR LEVEL UP
          // $('.country').removeClass('animated jello');
          // $('#' + country.id).addClass('animated jello');
          $rootScope.$broadcast('country-level-up', country);
        };

        scope.selectMap = function() {
          if (!scope.selectedCountry) {

            $('#instructions').addClass('animated tada')
            _.delay(function() {
              $('#instructions').removeClass('animated tada')
            }, 1000);
            return;
          }
          if (scope.tab == 'cur') {
            scope.selectedCountry = undefined
          }
          scope.tab = (scope.tab == 'map' ? 'cur' : 'map');
        }

        scope.$on('country-selected', function(s, i) {
          $('#' + i.id).addClass('selected');
          scope.selectedCountry = i;

          var shape = document.createElementNS("http://www.w3.org/2000/svg", "path");
          var margin = 10;
          shape.setAttribute("d", i.path.attr('d'));
          shape.setAttribute('class', 'animated slideInRight')
          $('#goto-country').empty().attr('viewBox', (i.bbox.x - margin) + ' ' + (i.bbox.y - margin) + ' ' + (i.bbox.width + margin* 2) + ' ' + (i.bbox.height + margin * 2)).append(shape);
        });
      }
    };
  }]);
