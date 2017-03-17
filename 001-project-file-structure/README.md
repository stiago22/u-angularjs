# Solution: 001 - Project File Structure

### Folder structure

* First of all, create proper folders for states, their controllers and stylesheets.

### Files inside folders:

* Inside those folders create the view, controller and its corresponding stylesheet, This is for having reusable views totally independent of each other.

### States:

* In this example we used UI-Router which introduces a state machine design pattern abstraction on top of a traditional router. Routes are referred to as states and the URL becomes simply a property of the state.


### Navigation:

* This example uses "ui-sref" for navigation between views where parameters are not required.

* This example uses a different approach for navigation with parameters.

* Using ng-submit directive, call a function inside login controller that handles the transition of views with parameter included.

##### Get parameters:

* Inside dashboard controller, use $stateParams object to get parameters inside the url sent from login view.


### Printing variable in html:

* To print the paremeter sent from login intro dashboard view, use angular expression {{dashboardCtrl.userName"}}.


[1]: http://bguiz.github.io/js-standards/angularjs/application-structure-lift-principle/
[2]: https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#style-y150
