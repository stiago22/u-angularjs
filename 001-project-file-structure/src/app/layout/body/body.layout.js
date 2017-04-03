(function(){
  'use strict';

  angular
    .module('app.layout')
    .directive('appBody', bodyComponent);

  function bodyComponent(){
    var directive = {
        controller: bodyController,
        controllerAs: 'bodyCtrl',
        templateUrl: 'app/layout/body/body.layout.html'
    };
    return directive;    
  }

  /** @ngInject */
  function bodyController(){
      var bodyCtrl = this;
  }
})();