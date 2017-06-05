(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($stateParams, $state) {
        var vm          = this;
        vm.currentUser  = $stateParams.currentUser;
    }
})();