(function () {
    'use strict';

    angular
        .module('angularApp')
        .component('navBar', {
    		templateUrl: 'app/components/navbar/navbar.html',
            controller: 'NavbarController',
            controllerAs: 'navCtrl'
    	});

})();