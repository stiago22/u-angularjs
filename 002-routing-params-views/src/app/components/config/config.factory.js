(function() {
  'use strict';

  angular
    .module('angularApp')
    .factory('Conf', ConfFactory);

  /** @ngInject */
  function ConfFactory() {
    var factory = {
    	readConfig: readConfig,
    };

    function readConfig(){
      var config = {
        language:'es',
        isValid: true,
        country: 'Colombia',
        region: 'South'
      };
      return config;
    }

    return factory;

  }
})();