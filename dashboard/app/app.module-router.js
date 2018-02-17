var routeProvider, app = angular.module('dashboard', ['ngResource', 'ngMaterial', 'ngRoute', 'ngStorage'])
    .config(function($routeProvider) {
        routeProvider = $routeProvider;
        $routeProvider
            .when('/dashboard', {
                templateUrl: 'app/dashboard.html',
                controller: 'DashboardController'
            })
            .when('/dashboard/:timeFrame', {
                templateUrl: 'app/dashboard.html',
                controller: 'DashboardController'
            })
            .when('/login', {
                templateUrl: 'app/login.html',
                controller: 'DashboardController'
            })
            .otherwise({
                redirectTo: '/login'
            });
    });