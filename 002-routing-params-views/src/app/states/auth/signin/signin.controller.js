(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('AuthSigninController', AuthSigninController);

  /** @ngInject */
  function AuthSigninController($log, $timeout, $state, Auth) {
    var vm = this;

    vm.newUser = {};

    vm.signInUser = signInUser;
    
    function signInUser() {
      vm.alert = Auth.registerUser(vm.newUser);
      //vm.newUser = {};
  		redirect();
    }

    function redirect() {
  		$timeout(function(){
  			$state.go('login', {currentUser:vm.newUser});
  		}, 2000);
    }

  }
})();
