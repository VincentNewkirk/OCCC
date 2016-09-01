angular.module('formSignupApp', [])
  .controller('formSignupController', ['$scope', function($scope) {
    $scope.email = '';
    $scope.password = '';
    $scope.update = function(user) {
      var req = new XMLHttpRequest();
      req.open('POST', 'http://localhost:4002/testFBEmailSignup');
      req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      req.send(JSON.stringify(user));
    };
  }]);