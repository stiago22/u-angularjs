# 008 - Testing Directives

Using `$templateCache.put('app/components/card/card.html', template);` we are able to store the template used by angular when compiling the directive `suite.element = $compile(angular.element(suite.template))($rootScope);` in this way we create the element in which we are going to search for fields and data.