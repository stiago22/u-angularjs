(function() {
  'use strict';

  angular
    .module('app.run', [])
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock AppRuning');
  }

})();
