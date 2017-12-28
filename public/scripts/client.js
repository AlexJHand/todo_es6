// Create angular app in js
const myApp = angular.module('myApp', ['ngRoute']);

// Create basic routing config
myApp.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('');
    $routeProvider.when('/', {
        templateUrl: '../views/index.html',
        controller: 'IndexController as ic'
    }).otherwise('/');
    // Added for the removal of '#' characters in url
    $locationProvider.html5mode(true);
})