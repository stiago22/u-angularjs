(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('DetailsController', DetailsController);

  /** @ngInject */
  function DetailsController($log, $stateParams) {
    var vm        = this;
    vm.details    = $stateParams.details; 
  }
})();