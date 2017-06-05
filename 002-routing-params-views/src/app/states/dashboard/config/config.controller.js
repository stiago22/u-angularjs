(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('ConfigController', ConfigController);

  /** @ngInject */
  function ConfigController($log, config) {
    var vm          = this;
    vm.config 		= config;

  }
})();