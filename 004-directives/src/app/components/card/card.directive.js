(function () {
  'use strict';

  angular
    .module('angularApp')
    .directive('card', cardDirective);

  /** @ngInject */
  function cardDirective() {
    return {
      scope             : {
                          icon            : '=',
                          background      : '=',
                          color           : '=',
                          title           : '=',
                          description     : '=',
                          message         : '=',
                          addToFavorites  : '&'
                        },
      controller        : 'CardController',
      controllerAs      : 'cardCtrl',
      bindToController  : true,
      templateUrl       : 'app/components/card/card.html'
    };
  }

})();
