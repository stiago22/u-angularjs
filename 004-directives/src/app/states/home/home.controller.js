(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(RESERVED_BY) {
    var vm            = this;
    vm.RESERVED_BY    = RESERVED_BY;
    vm.icons          = ['account_circle', 'home', 'alarm'];
    vm.card           = {};
    vm.favoriteCards  = [];
    vm.setIcon        = setIcon;
    vm.addToFavorites = addToFavorites;

    function setIcon(iconClass) {
      vm.card.icon = iconClass;
    }

    function addToFavorites(title) {
      if(title){
        vm.favoriteCards.push(title);
      }
    }

  }

})();
