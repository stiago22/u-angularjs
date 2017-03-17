(function() {
    'use strict';

    angular
        .module('angularEx1')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($stateParams ) {
        var vm = this;
        vm.userName = $stateParams.userName;
    }
})();
