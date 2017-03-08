(function() {
    'use strict';

    angular
        .module('angularEx1')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController(SITE_NAME, $stateParams ) {
        var vm = this;
        vm.mainTitle = SITE_NAME;
        vm.userName = $stateParams.userName;
    }
})();
