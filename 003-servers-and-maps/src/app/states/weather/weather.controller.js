(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('WeatherController', WeatherController);

  /** @ngInject */
  function WeatherController($scope, weatherService, $mdDialog) {
    var vm          = this;

    vm.kind         = '0';

    //Should we extend or use vm?
    /* We are using the controllerAs syntax, therefore, the $scope is only used in specific cases, such as binding an specific event*/ 
    
    vm.mapOptions   = {
        center: {
            lat: 38.8225909761771,
            lng: -96.5478515625,
            zoom: 4
        },
        defaults: {
            scrollWheelZoom: true
        },
        events: {
            map: {
                enable: ['click'],
                logic: 'emit'
            }
        },
        markers: {}
    }

    vm.setMarker    = setMarker;
    vm.getWeather   = getWeather;
    vm.getUV        = getUV;
    vm.showAlert    = showAlert;

    $scope.$on('leafletDirectiveMap.map.click', mapOnClick);

    function mapOnClick(event, args) {
        var leafletEvent = args.leafletEvent;
        var lat = leafletEvent.latlng.lat,
        lng = leafletEvent.latlng.lng;
        
        vm.setMarker(lat, lng);
        
        if(vm.kind == '0'){
            vm.getWeather(lat, lng);            
        }else if(vm.kind == '1'){
            vm.getUV(lat, lng);
        }else if(vm.kind == '2'){
            //http://api.openweathermap.org/pollution/v1/co/{location}/current.json?appid={api_key}
        }
    }

    function getWeather(lat, lng) {
        weatherService.getWeather(lat, lng)
        .then(function(response){
            if(response && response.data){
                var data = response.data;
                vm.showAlert('The min temperature is ' + data.main.temp_min + ' and the maximun is ' + data.main.temp_max );
            }    
        });
    }

    function getUV(lat, lng) {
        weatherService.getUV(lat, lng)
        .then(function(response){
            if(response && response.data){
                var data = response.data;
                vm.showAlert('The UV is ' + data.data );
            }
        });
    }

    function showAlert(msg) {
        alert = $mdDialog.alert({
                title: 'Weather info',
                textContent: msg,
                ok: 'Close'
            });

        $mdDialog
        .show( alert )
        .finally(function() {
            alert = undefined;
        });
    }

    function setMarker(lat, lng) {
        vm.mapOptions.markers.marker = {lat: lat,lng: lng}
    }

  }

})();
