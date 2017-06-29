describe('WeatherController', function () {
  
  beforeEach(module('angularApp'));
  beforeEach(module('ngResource'));

  var vm, $controller, $rootScope, $q, $mdDialog, weatherFactoryMock, dataMock, response;

  beforeEach(inject(function ($injector) {
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    $q = $injector.get('$q');
    $mdDialog =  $injector.get('$mdDialog');
    $log =  $injector.get('$log');

    weatherFactoryMock = {
    	getWeather: function(lat, lon){
        return {
          query: function(){
            response = $q.defer();
            return { $promise: response.promise };
          }
        };
      },
		  getUV: function(lat, lon){
    		return {
          query: function(){
            response = $q.defer();
            return { $promise: response.promise };
          }
        };
    	},
    };

    dataMock = {
    	args:{
    		leafletEvent:{
    			latlng:{
    				lat: 38.8225909761771,
    				lng: -96.5478515625
    			}
    		}
    	}
    };
	
    vm = $controller('WeatherController', {
      WeatherFactory : weatherFactoryMock,
      $scope: $rootScope,
      $mdDialog: $mdDialog,
      $log: $log
    });

  }));

  describe('triggerClick function', function () {

    it('getWeather successfull', function () {
      vm.kind = 0;
      spyOn(weatherFactoryMock, 'getWeather').and.callThrough();
      spyOn(vm, 'openModal').and.callThrough();
      vm.triggerClick(null, dataMock.args);
      response.resolve({
        name: 'London',
        weather: [{ description:'Nice weather' }],
        main: { temp: 10 }
      });
      $rootScope.$apply();
      expect(weatherFactoryMock.getWeather).toHaveBeenCalled();
      expect(vm.response.success).toBe(true);
      expect(vm.openModal).toHaveBeenCalled();
    });

    it('getWeather throws an error', function () {
      vm.kind = 0;
      spyOn(weatherFactoryMock, 'getWeather').and.callThrough();
      spyOn($log, 'debug').and.callThrough();
      vm.triggerClick(null, dataMock.args);
      response.reject("404 not found");
      $rootScope.$apply();
      expect(weatherFactoryMock.getWeather).toHaveBeenCalled();
      expect($log.debug).toHaveBeenCalled();
    });

    it('getWeather is empty', function () {
      vm.kind = 0;
      spyOn(weatherFactoryMock, 'getWeather').and.callThrough();
      spyOn(vm, 'openModal').and.callThrough();
      vm.triggerClick(null, dataMock.args);
      response.resolve({});
      $rootScope.$apply();
      expect(weatherFactoryMock.getWeather).toHaveBeenCalled();
      expect(vm.response.success).toBe(false);
      expect(vm.openModal).toHaveBeenCalled();
    });

    it('getUV successfull', function () {
      vm.kind = 1;
      spyOn(weatherFactoryMock, 'getUV').and.callThrough();
      spyOn(vm, 'openModal').and.callThrough();
      vm.triggerClick(null, dataMock.args);
      response.resolve({data:30});
      $rootScope.$apply();
      expect(weatherFactoryMock.getUV).toHaveBeenCalled();
      expect(vm.response.success).toBe(true);
      expect(vm.openModal).toHaveBeenCalled();
    });

    it('getUV throws an error', function () {
      vm.kind = 1;
      spyOn(weatherFactoryMock, 'getUV').and.callThrough();
      spyOn($log, 'debug').and.callThrough();
      vm.triggerClick(null, dataMock.args);
      response.reject("404 not found");
      $rootScope.$apply();
      expect(weatherFactoryMock.getUV).toHaveBeenCalled();
      expect($log.debug).toHaveBeenCalled();
    });

    it('getUV is empty', function () {
      vm.kind = 1;
      spyOn(weatherFactoryMock, 'getUV').and.callThrough();
      spyOn(vm, 'openModal').and.callThrough();
      vm.triggerClick(null, dataMock.args);
      response.resolve({});
      $rootScope.$apply();
      expect(weatherFactoryMock.getUV).toHaveBeenCalled();
      expect(vm.response.success).toBe(false);
      expect(vm.openModal).toHaveBeenCalled();
    });

  });

});