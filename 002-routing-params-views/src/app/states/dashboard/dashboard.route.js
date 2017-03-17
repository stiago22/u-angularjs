(function() {
    'use strict';

    angular
        .module('angularApp')
        .config(routerDashboard);

    /** @ngInject */
    function routerDashboard($stateProvider) {
        $stateProvider
            .state('dashboard', {
                abstract: true,
                templateUrl: 'app/states/dashboard/main/dashboard.html',
                url: '/main',
            })
            .state('detail', {
                parent: 'dashboard',
                url: '/detail',

                templateUrl: 'app/states/dashboard/detail/detail.html',
                controller: 'DashboardDetailController',
                controllerAs: 'dasDetailCtrl'
            })
            .state('config', {
                parent: 'dashboard',
                url: '/config',
                templateUrl: 'app/states/dashboard/dashboard/config.html',
                controller: 'DashboardConfigController',
                controllerAs: 'dasConfigCtrl'
            });
    }

})();
