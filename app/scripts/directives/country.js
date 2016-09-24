'use strict';

/**
 * @ngdoc directive
 * @name graceApp.directive:country
 * @description
 * # country
 */
angular.module('graceApp')
  .directive('country', ['$rootScope', 'config', 'countryData',
    function ($rootScope, config, countryData) {
    return {
      restrict: 'C',
      link: function postLink(scope, element, attrs) {
        element.on('click', function(e){
          $('.country').removeClass('selected');
          var parent = e.target.ownerSVGElement;
          parent.removeChild(this);
          parent.appendChild(this);

          $('<div>').addClass('floater').text(config.countryReward).css({
            top: e.pageY,
            left: e.pageX
          }).appendTo(window.document.body).on("webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationEnd", function(){
            $(this).remove();
          });

          $rootScope.$broadcast('country-selected', {
            name: $(this).attr('data-name'),
            id: $(this).attr('id'),
            path: $(this).clone(),
            bbox: this.getBBox()
          });
        });


        function setColor(){
          var data = countryData.mapData[element.attr('id')];

          if(scope.selectedCountry && scope.selectedCountry.id == element.attr('id')){
            var parent = element[0].ownerSVGElement;
            parent.removeChild(element[0]);
            parent.appendChild(element[0]);
            element.addClass('selected')
          }
          element.css({
            fill: $rootScope.levelColors[data.level % $rootScope.levelColors.length]
          });
        }

        scope.$watch('countryData', setColor);
        scope.$on('country-level-up', setColor);
      }
    };
  }])
