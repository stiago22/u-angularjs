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
                    "index@":{
                        template: '<section ui-view="content"></section>'
                    },
                    "navbar@":{
                        templateUrl: 'app/states/dashboard/navbar/navbar.html',
                        controller: 'NavbarController',
                        controllerAs: 'navCtrl'
                    }
                }
            })
            .state('main', {
                parent: 'dashboard',
                url: '/main',
                params: {
                    currentUser: {}
                },
                views:{
                    "content":{
                        templateUrl: 'app/states/dashboard/main/main.html',
                        controller: 'MainController',
                        controllerAs: 'mainCtrl'
                    }
                }
            })
            .state('details', {
                parent: 'dashboard',
                url: '/details',
                params: {
                    details: {}
                },
                views:{
                    "content":{
                        templateUrl: 'app/states/dashboard/details/details.html',
                        controller: 'DetailsController',
                        controllerAs: 'detailsCtrl'
                    }
                }
            })
            .state('config', {
                parent: 'dashboard',
                url: '/config',
                views:{
                    "content":{
                        templateUrl: 'app/states/dashboard/config/config.html',
                        controller: 'ConfigController',
                        controllerAs: 'configCtrl'
                    }
                },
                resolve: {
                    config: function(Conf) {
                        return Conf.readConfig();
                    }
                }
            })
    }

})();