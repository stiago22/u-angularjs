(function() {
    'use strict';

    angular
        .module('app.states')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($stateParams) {
        var vm = this;
        vm.userName = $stateParams.userName;
    }
})();
