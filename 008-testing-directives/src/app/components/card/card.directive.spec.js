(function() {
  'use strict';

  describe('directive card', function() {
    var $compile,
    $rootScope,
    $timeout,
    suite = {};

    beforeEach(module('angularApp'));

    beforeEach(inject(function ($injector, $templateCache) {
	  $compile = $injector.get('$compile');
	  $rootScope = $injector.get('$rootScope');
	  $timeout = $injector.get('$timeout');
	  var template = $templateCache.get('app/components/card/card.html');
	  $templateCache.put('app/components/card/card.html', template);

	  $rootScope.card = {
	  	title : '',
		description : '',
		background : '',
		textColor : '',
		icon : '',
		favorite : function(){
			return true;
		},
		reservedBy : '© Talos Business Card'
	  };

	  suite.template = 
	    	'<card title="card.title"'+ 
		    	'description="card.description"'+
	            'background="card.background"'+
	            'text-color="card.textColor"'+
	            'reserved-by="{{card.reservedBy}}"'+
	            'cb-favorite="card.favorite(title)"'+
	            'icon="{{card.icon}}">'+
      		'</card>';

	}));

	afterEach(function () {
	    suite.element.remove();
	    suite = {};
	});

	afterAll(function () {
	    suite = null;
	});

	it('when render without parameters, it has to show only the reservedBy', function () {
	    suite.element = $compile(angular.element(suite.template))($rootScope);
	    $rootScope.$digest();
	    expect(suite.element.find('.reservedBy').text()).toEqual($rootScope.card.reservedBy);
	});

	it('when render, no errors has to show', function () {
		$rootScope.card = {
		  	title : 'Test Title',
			description : 'Test Description',
			background : 'rgb(0, 0, 0)',
			textColor : 'rgb(255, 255, 55)',
			icon : 'home',
			favorite : function(title){
				return title;
			},
			reservedBy : '© Talos Business Card'
		};
	    suite.element = $compile(angular.element(suite.template))($rootScope);
	    $rootScope.$digest();

	    spyOn($rootScope.card, 'favorite');

	    expect(suite.element.find('.title').text()).toEqual($rootScope.card.title);
	    expect(suite.element.find('.description').text()).toEqual($rootScope.card.description);
	    expect(suite.element.find('.icon').text()).toEqual($rootScope.card.icon);
	    //Wait until the style is set
	    $timeout(function(){
	        expect(suite.element.find('.card').css('background-color')).toEqual($rootScope.card.background);
	        expect(suite.element.find('.card').css('color')).toEqual($rootScope.card.textColor);
	    },100);
	    suite.element.find('.favorite').click();	
	    expect($rootScope.card.favorite).toHaveBeenCalledWith($rootScope.card.title);
	});

  });
})();