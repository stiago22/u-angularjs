(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('NavbarController', NavbarController);

    /** @ngInject */
    function NavbarController($state, Auth, $timeout) {
        
      var vm              = this;
        
      vm.user             = Auth.currentUser();
      vm.state            = "main";
        
      vm.goToDetails      = goToDetails;
      vm.goToConfig       = goToConfig;
      vm.goToMain         = goToMain;
      vm.logOut           = logOut;

      function goToDetails() {
        vm.state  = "details";
        $state.go('details',{details: "Prueba" });
      }

      function goToConfig() {
        vm.state  = "config";
        $state.go('config');
      }

      function goToMain() {
        vm.state  = "main";
        $state.go('main');
      }

      function logOut() {
        Auth.logOut();
        $state.go('home');
      }
    }
})();