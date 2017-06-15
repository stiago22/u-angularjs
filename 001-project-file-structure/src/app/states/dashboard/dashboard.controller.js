(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($log, $stateParams) {
    
    var vm          = this;
    vm.username     = $stateParams.username || 'Prueba';

  }
})();