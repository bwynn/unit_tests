angular.module('AppRoutes', [])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $routeProvider.when('/', {
            templateUrl: 'views/calculator.html',
            controller: 'mainController'
        });
    }]);
