angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode({enabled:true});

  $routeProvider.when('/jobs', {
    templateUrl: 'jobs.html',
    controller: 'JobsController'
  });

  $routeProvider.otherwise({ redirectTo: '/login' });

});
