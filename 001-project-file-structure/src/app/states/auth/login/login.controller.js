(function () {
    'use strict';

    angular
        .module('angularEx1')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($state) {
        var vm = this;
        vm.login = {userName: ""};
        vm.submit = submitFunction;
        function submitFunction() {
            $state.go('dashboard', {userName: vm.login.userName});
        }
    }
})();
