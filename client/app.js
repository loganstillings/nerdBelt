var myApp = angular.module('app', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
    .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'sessionController'
    })
    .when('/dashboard', {
        templateUrl: 'partials/dash.html',
        controller: 'sessionController'
    })
    .when('/add', {
        templateUrl: 'partials/add.html',
        controller: 'sessionController'
    })
    .otherwise({
        redirectTo: '/login'
    })
})