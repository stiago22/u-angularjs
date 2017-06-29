(function() {
  'use strict';

  describe('directive card', function() {
   
    beforeEach(module('angularApp'));

    beforeEach(inject(function ($injector) {
	  /* ... */
	}));

  });
})();

(function() {
  'use strict';

  describe('card directive', function() {
    var $compile, $rootScope, scope;

    beforeEach(module('angularApp'));

    beforeEach(inject(function ($injector, $templateCache) {

    	var template = $templateCache.get('app/components/card/card.html');
	  	$templateCache.put('app/components/card/card.html', template);
	  	
	  	$rootScope = $injector.get('$rootScope');
	  	$compile = $injector.get('$compile');
	  	scope = $rootScope.$new();

	}));

	function getElement() {
		return '<card title="card.title"'+ 
		    	'description="card.description"'+
	            'background="card.background"'+
	            'text-color="card.textColor"'+
	            'reserved-by="{{card.reservedBy}}"'+
	            'cb-favorite="card.favorite(title)"'+
	            'icon="{{card.icon}}">'+
      			'</card>';
	}

	it('card with empty params', function () {
		
		$rootScope.card = {
	  		icon: '',
	  		title: '',
			description: '',
			background: '',
			textColor: '',
			reservedBy: '© Talos Business Card',
			favorite : function(){
				return true;
			}
	  	};
		var element = getElement();
      	element = $compile(element)(scope);
      	scope.$digest();
      	expect(element.find('.reservedBy').text()).toEqual($rootScope.card.reservedBy);
	});

	it('card with fields', function () {
		
		$rootScope.card = {
			icon: 'alarm',
	  		title: 'Prueba directiva',
			description: 'Esta es una prueba',
			background: '',
			textColor: '',
			reservedBy: '© Talos Business Card',
			favorite : function(title){
				return title;
			}
		};
		var element = getElement();
	    element = $compile(element)(scope);
      	scope.$digest();

	    spyOn($rootScope.card, 'favorite');

	    expect(element.find('.icon').text()).toEqual($rootScope.card.icon);
	    expect(element.find('.title').text()).toEqual($rootScope.card.title);
	    expect(element.find('.description').text()).toEqual($rootScope.card.description);
	    element.find('.favorite').click();	
	    expect($rootScope.card.favorite).toHaveBeenCalledWith($rootScope.card.title);
	});

  });
})();