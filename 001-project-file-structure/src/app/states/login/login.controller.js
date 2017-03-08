(function () {
    'use strict';

    angular
        .module('angularEx1')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController(SITE_NAME, $state) {
        var vm = this;
        vm.mainTitle = SITE_NAME;
        vm.login = {userName: ""};
        vm.submit = function () {
            $state.go('dashboard',{userName: vm.login.userName});
        }
    }
})();
