(function () {
    'use strict';

    angular
        .module('angularApp')
        .config(routerAuth);

    /** @ngInject */
    function routerAuth($stateProvider) {
        $stateProvider
            .state('auth', {
                abstract: true,
                url: '/auth',
                views: {
                    "index@": {
                        template: '<section class="general-section" ui-view></section>'
                    }
                },
                onEnter: function(Auth, $state){
                    if(Auth.currentUser()){
                        $state.go('main');
                    }
                }
            })
            .state('login', {
                parent: 'auth',
                url: '/login',
                params: {
                    currentUser: {}
                },
                templateUrl: 'app/states/auth/login/login.html',
                controller: 'AuthLoginController',
                controllerAs: 'auLoginCtrl'
            })
            .state('signin', {
                parent: 'auth',
                url: '/signin',
                templateUrl: 'app/states/auth/signin/signin.html',
                controller: 'SignInController',
                controllerAs: 'signInCtrl'
            });
    }

})();
