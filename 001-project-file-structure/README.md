# Project File Structure

The Purpose of this example it's to understand how to set up a robust file structure for an Angular Project, [LIFT][1] principles:

* Locating our code is easy
* Identify code at a glance
* Flat structure as long as we can
* Try to stay DRY (Don’t Repeat Yourself)

For More information about Applications Structure [here][2]

# To Do
Perform the following in the current example:
* Create a login page.
* Create a Dashboard page after sign in up.

# Solution

### Folder structure

* First of all, create proper folders for states, their controllers and stylesheets.

#### Before: 
![alt text](https://github.com/alejandroGranada/u-angularjs/blob/develop/001-project-file-structure/src/assets/images/folders-before.png "folders before")

#### After:
![alt text](https://github.com/alejandroGranada/u-angularjs/blob/develop/001-project-file-structure/src/assets/images/folders.png "folders now")

### Files inside folders:

* Inside those folders create the view, controller and its corresponding stylesheet, This is for having reusable views totally independent of each other.


![alt text](https://github.com/alejandroGranada/u-angularjs/blob/develop/001-project-file-structure/src/assets/images/image.png "files inside folder")
![alt text](https://github.com/alejandroGranada/u-angularjs/blob/develop/001-project-file-structure/src/assets/images/login-files.png "files inside folder")
![alt text](https://github.com/alejandroGranada/u-angularjs/blob/develop/001-project-file-structure/src/assets/images/home-files.png "files inside folder")


### States:

* In this example we used UI-Router which introduces a state machine design pattern abstraction on top of a traditional router. Routes are referred to as states and the URL becomes simply a property of the state.
```javascript
function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/states/home/home.html',
                controller: 'HomeController',
                controllerAs: 'homeCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/states/login/login.html',
                controller: 'LoginController',
                controllerAs: 'loginCtrl'
            })
            .state('dashboard', {
                url: '/dashboard',
                params: {userName:{}},
                templateUrl: 'app/states/dashboard/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'dashboardCtrl',
                onEnter: function($state, $stateParams){
                    if (!angular.isString($stateParams.userName) || !$stateParams.userName.length) {
                        $state.go('login');
                    }
                }
            });
```

### Navigation:

* This example uses "ui-sref" for navigation between views where parameters are not required:

##### From home to login view:
```html
<a class="btn btn-lg btn-success" ui-sref="login">Sign up today</a>
```
##### From dashboard to home:
```html
<a class="btn btn-lg btn-success" ui-sref="home">Home</a>
```
##### Navigation with parameters:

* This example uses a different approach for navigation with parameters :

* Using ng-submit directive, call a function inside login controller that handles the transition of views with parameter included:

##### JS:
```javascript
(function () {
    'use strict';

    angular
        .module('angularEx1')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($state) {
        var vm = this;
        vm.login = {userName: ""};
        vm.submit = function () {
            $state.go('dashboard',{userName: vm.login.userName});
        }
    }
})();
```

##### HTML:
```html
<form ng-submit="loginCtrl.submit()" name="Login_Form" class="form-signin" novalidate>
```
##### Get parameters:

* Inside dashboard controller, use $stateParams object to get parameters inside the url sent from login view:

##### JS:
```javascript
function DashboardController($stateParams ) {
        var vm = this;
        vm.userName = $stateParams.userName;
    }
```

### Printing variable in html:

* To print the paremeter sent from login intro dashboard view, use angular expression {{dashboardCtrl.userName"}}

##### HTML:
```html
<h1 class="display-3">Dashboard, welcome {{dashboardCtrl.userName}}</h1>
```

