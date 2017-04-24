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
      weatherApi = 'http://api.openweathermap.org';
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

      it('should return weather of lat lng', function() {
      	//Wasatch County
      	var lat = 40.245991504199026, lon = -111.181640625;

      	$httpBackend.expectGET( weatherApi + '/data/2.5/weather' + '?APPID='+WEATHER_API+'&lat='+lat+'&lon='+lon ).respond({data:'Weather on'});
      	
      	var promise = weatherFactory.getWeather(lat,lon);

      	promise.query().$promise.then(function(response){
      		expect(response.data).toBe('Weather on');
      	});

      	$httpBackend.flush();

      });
    });

    describe('getUV function', function() {
      it('should exist', function() {
        expect(weatherFactory.getUV).not.toEqual(null);
      });

      it('should return UV of lat lng', function() {
        //Wasatch County
        var lat = 40.24, lon = -111.18;

        $httpBackend.expectGET( weatherApi + '/v3/uvi/'+  [lat, lon] + '/current.json?appid='+WEATHER_API ).respond({data:'UV on'});
        
        var promise = weatherFactory.getUV();

        promise.query({latlng: [lat, lon]}).$promise.then(function(response) {
          expect(response.data).toBe('UV on');
        });

        $httpBackend.flush();

      });
    });

  });
})();