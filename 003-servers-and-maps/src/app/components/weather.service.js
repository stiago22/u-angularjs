(function() {
  'use strict';

  angular
    .module('angularApp')
    .factory('weatherService', WeatherFactory);

  /** @ngInject */
  function WeatherFactory($http, WEATHER_API_KEY, WEATHER_URL, UV_API_URL) {
    
    var factory = {
    	getWeather : getWeather,
        getUV      : getUV 
    };

    function getWeather(lat, lng) {
        var url =  WEATHER_URL + '/weather?APPID=' + WEATHER_API_KEY + '&lat=' + lat + '&lon=' + lng;
        return $http(
            {
                method: 'GET',
                url: url
            }
        ).then(successCallback, errorCallback);
    }

    function getUV(lat, lng) {
        var url = UV_API_URL + lat.toFixed(0) + "," + lng.toFixed(0) + "/2017Z.json?appid=" + WEATHER_API_KEY;
        return $http(
            {
                method: 'GET',
                url: url
            }
        ).then(successCallback, errorCallback);
    }

    function successCallback(response) {
        var data = response;
        return data;
    }

    function errorCallback(error) {
        return error;
    }

    return factory;

  }
})();