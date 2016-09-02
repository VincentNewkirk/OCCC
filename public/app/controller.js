angular.module('formSignupApp', [])
  .controller('formSignupController', ['$scope', ($scope) => {
    $scope.email = '';
    $scope.password = '';
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.phone = '';
    $scope.username = '';
    $scope.update = (user) => {
      console.log(user);
      const req = new XMLHttpRequest();
      req.open('POST', 'http://localhost:4002/signup');
      req.setRequestHeader("Authorization", "Negotiate");
      req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      req.send(JSON.stringify(user));
    };
  }]);

angular.module('formLoginApp', [])
  .controller('formLoginController', ['$scope', ($scope) => {
    $scope.email = '';
    $scope.password = '';
    $scope.update = (user) => {
      const req = new XMLHttpRequest();
      req.open('POST', 'http://localhost:4002/login');
      req.setRequestHeader("Authorization", "Negotiate");
      req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      req.send(JSON.stringify(user));
    };
  }]);