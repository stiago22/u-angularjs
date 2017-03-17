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
                url: '/dashboard',
                views:{
                    "site@":{
                        template: '<section class="dashboard" ui-view="main"></section>'
                    }
                }

            })
            .state('detail', {
                parent: 'dashboard',
                url: '/detail',
                views:{
                    "main@":{
                        templateUrl: 'app/states/dashboard/detail/detail.html',
                        controller: 'DashboardDetailController',
                        controllerAs: 'dasDetailCtrl'
                    }
                }
            })
            .state('mainDashboard', {
                parent: 'dashboard',
                url: '/main-dashboard',
                params: {
                    currentUser: {}
                },
                views:{
                    "main":{
                        templateUrl: 'app/states/dashboard/main-dashboard/dashboard.html',
                        controller: 'DashboardController',
                        controllerAs: 'dasCtrl'
                    }
                }
            })
            .state('config', {
                parent: 'dashboard',
                url: '/config',
                views:{
                    "main@":{
                        templateUrl: 'app/states/dashboard/dashboard/config.html',
                        controller: 'DashboardConfigController',
                        controllerAs: 'dasConfigCtrl'
                    }
                }
            });
    }

})();
