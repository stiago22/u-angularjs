(function () {
  'use strict';

  angular
    .module('angularApp')
    .component('userList', {
      controller    : 'UserListController',
      templateUrl   : 'app/states/dashboard/user-list/user-list.html',
      controllerAs  : 'userListCtrl',
      bindings      : {
                        users: '<'
                    }
    });

})();