(function() {
  'use strict';

  describe('service weatherFactory', function() {
    var weatherFactory, $httpBackend, weatherApi, WEATHER_API;

    beforeEach(module('angularApp'));
    beforeEach(module('ngResource'));
    beforeEach(inject(function($injector) {
      weatherFactory = $injector.get('WeatherFactory');
      $httpBackend = $injector.get('$httpBackend');
      $httpBackend.when('GET', /(.*)\.json/).respond();
      $httpBackend.when('GET', /(.*)\.html/).respond();
      WEATHER_API = $injector.get('WEATHER_API');
      weatherApi = 'http://api.openweathermap.org/data/2.5/weather';
    }));

    afterEach(function() {
	    $httpBackend.verifyNoOutstandingExpectation();
	    $httpBackend.verifyNoOutstandingRequest();
	});

    it('should be registered', function() {
      expect(weatherFactory).not.toEqual(null);
    });

    describe('getWeather function', function() {
      it('should exist', function() {
        expect(weatherFactory.getWeather).not.toEqual(null);
      });

      it('should return array of object', function() {
      	//Wasatch County
      	var lat = 40.245991504199026, lon = -111.181640625;

      	$httpBackend.expectGET( weatherApi + '?APPID='+WEATHER_API+'&lat='+lat+'&lon='+lon ).respond({data:'Weather on'});
      	
      	var promise = weatherFactory.getWeather(lat,lon);

      	promise.query({},{},function(response){
      		expect(response.data).toBe('Weather on');
      	});

      	$httpBackend.flush();

      });
    });
  });
})();