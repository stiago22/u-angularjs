(function() {
    'use strict';

    angular
        .module('dashboard.controller', [])
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($stateParams ) {
        var vm = this;
        vm.userName = $stateParams.userName;
    }
})();
