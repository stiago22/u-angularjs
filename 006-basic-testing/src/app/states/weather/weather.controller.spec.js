describe('WeatherController', function () {
  beforeEach(module('angularApp'));

  var suite = {};

  beforeEach(inject(function ($injector) {
    suite.$controller = $injector.get('$controller');
    suite.$rootScope = $injector.get('$rootScope');
    suite.$q = $injector.get('$q');
    suite.$mdDialog =  $injector.get('$mdDialog');
    suite.$log =  $injector.get('$log');

    suite.weatherFactoryMock = {
    	getWeather: function(lat, lon){
    		return {
    			query: function(params, body, callback, errCallback){
    				suite.queryDeferred = suite.$q.defer();
       				return { $promise: suite.queryDeferred.promise };
				}
    		};
    	},
		getUV: function(lat, lon){
    		return {
    			query: function(params, body, callback, errCallback){
    				suite.queryDeferred = suite.$q.defer();
       				return { $promise: suite.queryDeferred.promise };
				}
    		};
    	},
    };

    suite.mockArg = {
    	args:{
    		leafletEvent:{
    			latlng:{
    				lat: 40.245991504199026,
    				lng: -111.181640625
    			}
    		}
    	}
    };
	
    suite.vm = suite.$controller('WeatherController', {
      WeatherFactory : suite.weatherFactoryMock,
      $scope: suite.$rootScope,
      $mdDialog: suite.$mdDialog,
      $log: suite.$log
    });

  }));

  afterEach(function () {
    suite = {};
  });

  afterAll(function () {
    suite = null;
  });

  function resolveAndRefresh(data){
  	suite.queryDeferred.resolve(data);
	suite.$rootScope.$apply();
  }

  function rejectAndRefresh(data){
  	suite.queryDeferred.reject(data);
	suite.$rootScope.$apply();
  }

  describe('triggerClick function', function () {

    it('if call getWeather and is Successfull', function () {
      suite.vm.kind = 0;
      spyOn(suite.weatherFactoryMock, 'getWeather').and.callThrough();
      spyOn(suite.vm, 'openModal').and.callThrough();
      suite.vm.triggerClick(null, suite.mockArg.args);
   	  resolveAndRefresh({
	    	name: 'Place',
	    	weather: [{ description:'Cloudy' }],
	    	main: { temp: 30 }
	    });
      expect(suite.weatherFactoryMock.getWeather).toHaveBeenCalled();
      expect(suite.vm.response.success).toBe(true);
      expect(suite.vm.openModal).toHaveBeenCalled();
    });

    it('if call getWeather and is Empty', function () {
      suite.vm.kind = 0;
      spyOn(suite.weatherFactoryMock, 'getWeather').and.callThrough();
      spyOn(suite.vm, 'openModal').and.callThrough();
      suite.vm.triggerClick(null, suite.mockArg.args);
      resolveAndRefresh({});
      expect(suite.weatherFactoryMock.getWeather).toHaveBeenCalled();
      expect(suite.vm.response.success).toBe(false);
      expect(suite.vm.openModal).toHaveBeenCalled();
    });

    it('if should call getWeather and is an Error', function () {
      suite.vm.kind = 0;
      spyOn(suite.weatherFactoryMock, 'getWeather').and.callThrough();
      spyOn(suite.$log, 'debug').and.callThrough();
      suite.vm.triggerClick(null, suite.mockArg.args);
      rejectAndRefresh("Can not reach API");
      expect(suite.weatherFactoryMock.getWeather).toHaveBeenCalled();
      expect(suite.$log.debug).toHaveBeenCalled();
    });

    it('if call getUV and is Successfull', function () {
      suite.vm.kind = 1;
      spyOn(suite.weatherFactoryMock, 'getUV').and.callThrough();
      spyOn(suite.vm, 'openModal').and.callThrough();
      suite.vm.triggerClick(null, suite.mockArg.args);
   	  resolveAndRefresh({data:30});
      expect(suite.weatherFactoryMock.getUV).toHaveBeenCalled();
      expect(suite.vm.response.success).toBe(true);
      expect(suite.vm.openModal).toHaveBeenCalled();
    });

    it('if call getUV and is Empty', function () {
      suite.vm.kind = 1;
      spyOn(suite.weatherFactoryMock, 'getUV').and.callThrough();
      spyOn(suite.vm, 'openModal').and.callThrough();
      suite.vm.triggerClick(null, suite.mockArg.args);
      resolveAndRefresh({});
      expect(suite.weatherFactoryMock.getUV).toHaveBeenCalled();
      expect(suite.vm.response.success).toBe(false);
      expect(suite.vm.openModal).toHaveBeenCalled();
    });

    it('if should call getUV and is an Error', function () {
      suite.vm.kind = 1;
      spyOn(suite.weatherFactoryMock, 'getUV').and.callThrough();
      spyOn(suite.$log, 'debug').and.callThrough();
      suite.vm.triggerClick(null, suite.mockArg.args);
      rejectAndRefresh("Can not reach API");
      expect(suite.weatherFactoryMock.getUV).toHaveBeenCalled();
      expect(suite.$log.debug).toHaveBeenCalled();
    });


  });

});