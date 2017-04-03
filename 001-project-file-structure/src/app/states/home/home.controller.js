(function() {
  'use strict';

  angular
    .module('app.states')
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
