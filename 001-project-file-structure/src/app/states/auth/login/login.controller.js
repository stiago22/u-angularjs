(function () {
    'use strict';

    angular
        .module('login.controller', [])
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($state) {
        var vm = this;
        vm.login = {userName: ""};
        vm.submit = submitFunction;
        function submitFunction() {
            if (vm.login.userName !='') {
                $state.go('dashboard', {userName: vm.login.userName});                
            }
        }
    }
})();
