'use strict';

/**
 * @ngdoc directive
 * @name graceApp.directive:currencyCounter
 * @description
 * # currencyCounter
 */
angular.module('graceApp')
  .directive('currencyCounter', ['userData', 'config', '$interval', 'countryData',
  function (userData, config, $interval, countryData) {

    return {
      templateUrl: 'views/currencycounter.html',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
        scope.userData = userData;
        scope.currentPoints = scope.userData.points;

        scope.nextRound = function(){
          return _(countryData.mapData).toArray().reduce(function(c,n){ return c + n.level },0);
        }

        scope.$watch('userData.points', function(n, o){
          if(n > o){
            $({point: scope.currentPoints}).animate({point: n}, {
              duration: Math.min(config.pointInterval * 0.25, n * 5),
              easing: 'linear',
              step: function(a){
                scope.currentPoints = Math.round(a);
                if(!scope.$$phase){
                  scope.$apply();
                }
              }
            })
          }else{
            scope.currentPoints = n;
          }
        });

        function nextCheck(){
          userData.points = userData.checkPoints();
        }

        scope.maxTime = scope.timeLeft = config.pointInterval;
        $interval(function(){
          scope.timeLeft -= 100;
          if(scope.timeLeft <= 0){
            nextCheck();
            scope.timeLeft = scope.maxTime;
          }
        }, 100);

      }
    };
  }]);
