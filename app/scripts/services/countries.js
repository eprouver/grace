'use strict';

/**
 * @ngdoc service
 * @name graceApp.countries
 * @description
 * # countries
 * Service in the graceApp.
 */
angular.module('graceApp')
  .service('countryData', ['$rootScope', function ($rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var empty = {"Aegypten":{"name":"Egypt","level":0,"nextLevel":10},"Aequatorialguinea":{"name":"Equatorial Guinea","level":0,"nextLevel":10},"Aethopien":{"name":"Ethiopia","level":0,"nextLevel":10},"Algeria":{"name":"Algeria","level":0,"nextLevel":10},"Angola":{"name":"Angola","level":0,"nextLevel":10},"Benin":{"name":"Benin","level":0,"nextLevel":10},"Botsuana":{"name":"Botswana","level":0,"nextLevel":10},"Burundi":{"name":"Burundi","level":0,"nextLevel":10},"Burkina_Faso":{"name":"Burkina Faso","level":0,"nextLevel":10},"Demokratische_Republik_Kongo":{"name":"Democratic Republic of Congo","level":0,"nextLevel":10},"Dschibuti":{"name":"Djibouti","level":0,"nextLevel":10},"Elfenbeinkueste":{"name":"Cote d'Ivoire","level":0,"nextLevel":10},"Eritrea":{"name":"Eritrea","level":0,"nextLevel":10},"Gabun":{"name":"Gabon","level":0,"nextLevel":10},"Gambia":{"name":"Gambia","level":0,"nextLevel":10},"Ghana":{"name":"Ghana","level":0,"nextLevel":10},"Guinea":{"name":"Guinea","level":0,"nextLevel":10},"Guinea-Bissau":{"name":"Guinea Bissau","level":0,"nextLevel":10},"Kamerun":{"name":"Cameroon","level":0,"nextLevel":10},"Kenia":{"name":"Kenya","level":0,"nextLevel":10},"Libyen":{"name":"Libya","level":0,"nextLevel":10},"Liberia":{"name":"Liberia","level":0,"nextLevel":10},"Madagaskar":{"name":"Madagascar","level":0,"nextLevel":10},"Mali":{"name":"Mali","level":0,"nextLevel":10},"Malawi":{"name":"Malawi","level":0,"nextLevel":10},"Marokko":{"name":"Morocco","level":0,"nextLevel":10},"Mauretanien":{"name":"Mauritania","level":0,"nextLevel":10},"Mosambik":{"name":"Mosambique","level":0,"nextLevel":10},"Namibia":{"name":"Namibia","level":0,"nextLevel":10},"Niger":{"name":"Niger","level":0,"nextLevel":10},"Nigeria":{"name":"Nigeria","level":0,"nextLevel":10},"Republik_Kongo":{"name":"Congo","level":0,"nextLevel":10},"Ruanda":{"name":"Rwanda","level":0,"nextLevel":10},"Sambia":{"name":"Zambia","level":0,"nextLevel":10},"Senegal":{"name":"Senegal","level":0,"nextLevel":10},"Sierra_Leone":{"name":"Sierra Leone","level":0,"nextLevel":10},"Simbabwe":{"name":"Zimbabwe","level":0,"nextLevel":10},"Somalia":{"name":"Somalia","level":0,"nextLevel":10},"ssudan":{"name":"South Sudan","level":0,"nextLevel":10},"Sudan":{"name":"Sudan","level":0,"nextLevel":10},"Suedafrika":{"name":"South Africa","level":0,"nextLevel":10},"Swasiland":{"name":"Swaziland","level":0,"nextLevel":10},"Tasania":{"name":"Tanzania","level":0,"nextLevel":10},"Togo":{"name":"Togo","level":0,"nextLevel":10},"Tunesien":{"name":"Tunisia","level":0,"nextLevel":10},"Tschad":{"name":"Chad","level":0,"nextLevel":10},"Uganda":{"name":"Uganda","level":0,"nextLevel":10},"Westsahara":{"name":"Western Sahara","level":0,"nextLevel":10},"Zentralafrikanische_Republik":{"name":"Central African Republic","level":0,"nextLevel":10},"Lesotho":{"name":"Lesotho","level":0,"nextLevel":10}};

    $rootScope.$on('country-level-up', function(s, i){
      empty[i.id].level += 1;
      empty[i.id].nextLevel *= 2;
    });

    return {
      mapData: empty
    }
  }]);
