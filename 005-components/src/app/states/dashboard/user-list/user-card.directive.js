(function () {
  'use strict';

  angular
    .module('angularApp')
    .directive('userCard', userCard);

  function userCard () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        user: '=',
        onUserSelected: '&',
        onUserLeft: '&'
      },
      templateUrl: 'app/states/dashboard/user-list/user-card.html'

    }
  }
})();

