(function() {
  'use strict';

  describe('HomeController', function() {
    var vm, $controller, $rootScope, scope;

    beforeEach(module('angularApp'));

    beforeEach(inject(function($injector) {
      $controller = $injector.get('$controller');
      $rootScope = $injector.get('$rootScope');
      scope = $rootScope.$new();

      vm = $controller('HomeController', {
        $scope: scope
      });

    }));

    it('should be registered', function() {
      expect(vm).not.toEqual(null);
    });

    describe('setIcon function', function() {
      it('should exist', function() {
        expect(vm.setIcon).toBeDefined();
      });

      it('set new icon', function(){
        spyOn(vm, 'setIcon').and.callThrough();
        vm.setIcon('alarm');
        $rootScope.$digest();
        expect(vm.setIcon).toHaveBeenCalledWith('alarm');
        expect(vm.card.icon).toEqual('alarm');
      });

    });

    describe('setFavorite', function() {
      it('should exist', function() {
        expect(vm.card.setFavorite).toBeDefined();
      });

      it('add favorite', function(){
        spyOn(vm.card, 'setFavorite').and.callThrough();
        vm.card.setFavorite('Prueba');
        expect(vm.card.setFavorite).toHaveBeenCalledWith('Prueba');
        expect(vm.favoriteList).toEqual(['Prueba']);
      });

    });

  });
})();