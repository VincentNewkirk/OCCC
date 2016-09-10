angular.module('CalendarTest')
  .config(function($routeProvider){
    $routeProvider.when('/signup', {
      templateUrl: '/signup.html',
      controller: 'FormSignupController'
    })
    $routeProvider.when('/login', {
      templateUrl: '/login.html',
      controller: 'FormLoginController',
      controllerAs: 'form'
    })
    $routeProvider.when('/visitform', {
      templateUrl: '/visitform.html',
      controller: 'VisitFormController'
    })
  });
