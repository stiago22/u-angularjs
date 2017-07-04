(function () {
    'use strict';

    angular
        .module('angularApp')
        .component('main', {
    		templateUrl		: 'app/states/home/home.html',
        	controller 		: 'HomeController',
        	controllerAs	: 'homeCtrl'
    	});

})();