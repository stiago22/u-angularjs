(function(){
  'use strict';

  angular
    .module('app.layout')
    .directive('footer', footerComponent);

  function footerComponent(){
    var directive = {
        templateUrl: 'app/layout/footer/footer.layout.html'
    };
    return directive;
  }
})();