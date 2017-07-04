(function () {
    'use strict';

    angular
        .module('angularApp')
        .component('dashboard', {
    		templateUrl 	: 'app/states/dashboard/main-dashboard/dashboard.html',
            controller 		: 'DashboardController',
            controllerAs 	: 'dasCtrl'
    	});

})();