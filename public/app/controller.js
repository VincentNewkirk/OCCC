angular.module('formSignupApp', [])
  .controller('formSignupController', ['$scope', function($scope) {
    $scope.email = '';
    $scope.password = '';
    $scope.update = function(user) {
      var request = new XMLHttpRequest();
      request.open('POST', 'http://localhost:4002/testFBEmailSignup', true);
      request.send(user);

      if (request.status === "200") {
        console.log(request.responseText);
      }
    };
  }]);