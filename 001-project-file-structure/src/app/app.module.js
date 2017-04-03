(function() {
  'use strict';

  angular
    .module('angularEx1', [
      'ngAnimate', 
      'ngCookies', 
      'ngResource',
      'app.config', 
			'app.constants',
      'app.layout',
			'app.states',
			'app.route',
			'app.run'
    ]);
})();