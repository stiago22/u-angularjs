(function() {
  'use strict';

  describe('service weatherFactory', function() {
    var weatherFactory, weatherApiUrl, uvApiUrl, WEATHER_API, $httpBackend, $q;

    beforeEach(module('angularApp'));
    beforeEach(module('ngResource'));
    beforeEach(inject(function($injector) {
      weatherFactory = $injector.get('WeatherFactory');
      $httpBackend = $injector.get('$httpBackend');
      WEATHER_API = $injector.get('WEATHER_API');
      $q = $injector.get('$q');

      $httpBackend.when('GET', /(.*)\.json/).respond();
      $httpBackend.when('GET', /(.*)\.html/).respond();
      uvApiUrl = 'http://api.openweathermap.org/v3/uvi/';
      weatherApiUrl = 'http://api.openweathermap.org';
    }));


    it('should be registered', function() {
      expect(weatherFactory).not.toEqual(null);
    });

    describe('getWeather function', function() {
      it('should exist', function() {
        expect(weatherFactory.getWeather).not.toEqual(null);
      });

      it('should return the Weather', function() {

        var lat = 38.8225909761771;
        var lng = -96.5478515625;
        var url = weatherApiUrl + '/data/2.5/weather' + '?APPID=' + WEATHER_API + '&lat=' + lat + '&lon='+lng;

        $httpBackend.expectGET(url)
        .respond({ data: '100'});
        
        weatherFactory.getWeather().query()
        .$promise.then(function(response) {
          expect(response.data).toBe('100');
          $httpBackend.flush();
        });

      });

    });

    describe('getUV function', function() {
      it('should exist', function() {
        expect(weatherFactory.getUV).not.toEqual(null);
      });

      it('should return UV', function() {

        var lat = 38.8225909761771;
        var lng = -96.5478515625;
        var url = uvApiUrl +  lat + ',' + lng + '/current.json?appid='+ WEATHER_API;

        $httpBackend.expectGET(url)
        .respond({ data: '100'});
        
        weatherFactory.getUV().query()
        .$promise.then(function(response) {
          expect(response.data).toBe('100');
          $httpBackend.flush();
        });

      });

    });

  });
})();