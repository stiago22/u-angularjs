(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($log, $state) {
    
    var vm          = this;
    vm.user         = { name: '', password: ''};
    vm.failureMsg   = "Username or password incorrect!";
    vm.showErrorMsg = false;
    
    vm.login  = login; 

    function login(){

      if( vm.user.name === 'sfg' && vm.user.password === '123'){
        $log.debug('login');
        vm.showErrorMsg = false;
        $state.go('dashboard', {username: vm.user.name});
      }else{
        vm.showErrorMsg = true;
        $log.debug(vm.failureMsg);
      }
      
    }

  }
})();