(function() {
  'use strict';

  angular
    .module('angularEx1', [
      'ngAnimate', 
      'ngCookies', 
      'ngTouch', 
      'ngSanitize', 
      'ngAria', 
      'ngResource', 
      'ui.router',
      'app.config', 
			'app.constants',
			'app.controllers',
			'app.route',
			'app.run'
    ]);
})();