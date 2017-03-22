(function () {
    'use strict';

    angular
        .module('app.route',[])
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/states/home/home.html',
                controller: 'HomeController',
                controllerAs: 'homeCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/states/auth/login/login.html',
                controller: 'LoginController',
                controllerAs: 'loginCtrl'
            })
            .state('dashboard', {
                url: '/dashboard',
                params: {userName:{}},
                templateUrl: 'app/states/dashboard/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'dashboardCtrl',
                onEnter: function($state, $stateParams){
                    if (!angular.isString($stateParams.userName) || !$stateParams.userName.length) {
                        $state.go('login');
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    }

})();
