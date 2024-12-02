const app = angular.module('myApp', ['ui.router']);
const API_URL = "http://127.0.0.1:3000/api/";
const UI_URL = "http://127.0.0.1:5500/frontend/views/";

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

    // $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'AboutController'
        });
});

app.filter('dateFormat', function() {
    return function(input) {
        if (input) {
            return input.split('T')[0];
        }
        return input;
    };
});
