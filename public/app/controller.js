angular.module('formSignupApp', [])
  .controller('formSignupController', ['$scope', function($scope) {
    $scope.email = '';
    $scope.password = '';
    $scope.update = function(user) {

      var req = new XMLHttpRequest();
      req.open('POST', 'http://localhost:4002/testFBEmailSignup');
      req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      var obj = {hello:'world'};
      req.send(JSON.stringify(obj));

    };
/*    $scope.update = function(user) {
      var request = new XMLHttpRequest();
      request.open('POST', 'http://localhost:4002/testFBEmailSignup', true);
      xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      console.log(JSON.stringify(user));
      request.send(JSON.stringify(user));

      if (request.status === "200") {
        console.log(request.responseText);
      }
    };*/
  }]);