(function() {
  'use strict';

  angular
    .module('home.controller', [])
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($log, SITE_NAME) {
    var vm = this;
    vm.mainTitle = SITE_NAME;
    vm.signUpToday = signUpToday;

    function signUpToday(){
      $log.debug('signUpToday clicked!');
    }

  }
})();
