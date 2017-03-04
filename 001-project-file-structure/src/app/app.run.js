(function() {
  'use strict';

  angular
    .module('angularEx1')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock AppRuning');
  }

})();
