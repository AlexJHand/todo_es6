// Create angular app in js
let myApp = angular.module('myApp', ['ngRoute']);

// Create basic routing config
myApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when('/', {
        templateUrl: '../views/home.html',
        controller: 'IndexController as ic',
    }).otherwise({
        redirectTo: '/'
    });
    // Added for the removal of '#' characters in url
    $locationProvider.html5Mode(true);
});