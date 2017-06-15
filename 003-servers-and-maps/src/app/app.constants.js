(function() {
  'use strict';

  angular
    .module('angularApp')
    .constant('SITE_NAME', 'Talos University')
    .constant('WEATHER_URL', 'http://api.openweathermap.org/data/2.5')
    .constant('WEATHER_API_KEY', '534eccb946ce639dbb41f82b8be15dcc')
    .constant('UV_API_URL', "http://api.openweathermap.org/v3/uvi/");
})();
