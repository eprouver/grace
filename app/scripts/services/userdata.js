'use strict';

/**
 * @ngdoc service
 * @name graceApp.userData
 * @description
 * # userData
 * Service in the graceApp.
 */
angular.module('graceApp')
  .service('userData', ['$interval', 'config', '$rootScope', 'countryData',
  function ($interval, config, $rootScope, countryData) {

    var coinRate = config.countryReward * 10;

    var userData = {
      points: 0,
      checkPoints: function(){
        $('.country').each(function(i, v){

          var countryArray = _(countryData.mapData).toArray();
          var time = countryArray.filter(function(v){ return v.level > 0}).length * 100;

          coinRate = countryArray.reduce(function(c, n){return c + n.level; }, 0);
            var id = $(v).attr('id');
          if(countryData.mapData[id].level > 0){
            setTimeout(function(){
              var target = $('#' + id);
              target.addClass('highlight');
              var bbox = target[0].getBoundingClientRect();
              $('<div>').addClass('floater').text(countryData.mapData[id].level).css({
                left: bbox.left + (bbox.width/2),
                top: bbox.top + (bbox.height/2)
              }).appendTo(window.document.body).on("webkitAnimationEnd mozAnimationEnd msAnimationEnd oAnimationEnd animationEnd", function(){
                $(this).remove();
                target.removeClass('highlight');
              });
            }, Math.random() * time);
          }
        })
        return this.points + coinRate;
      }
    };

    $rootScope.$on('country-selected', function(s, data){
      userData.points += config.countryReward;
    });

    return userData;
  }]);
