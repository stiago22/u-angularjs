(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($log, $state, SITE_NAME) {
    var vm          = this;
    vm.mainTitle    = SITE_NAME;
    vm.signIn       = signIn;

    function signIn(){
      $state.go('signin');
    }

  }
})();
