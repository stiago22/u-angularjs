(function () {
    'use strict';

    angular
        .module('angularApp')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                views:{
                    'index@':{
                        templateUrl: 'app/states/home/home.html',
                        controller: 'HomeController',
                        controllerAs: 'homeCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    }

})();
