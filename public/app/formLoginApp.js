angular.module('formLoginApp', ['ngCookies'])
  .controller('formLoginController', ['$scope', '$cookies', ($scope, $cookies) => {
    $scope.email = '';
    $scope.password = '';
    $scope.update = (user) => {
      const req = new XMLHttpRequest();
      req.open('POST', 'http://localhost:4002/login', true);
      req.onload = (serverResponse) => {
        if (req.readyState === 4) {
          if (req.status === 200) {
            $cookies.put("user", req.response);
          } else {
            console.log('no response');
          }
        } else {
          console.log('no response');
        }
      };
      req.setRequestHeader("Authorization", "Negotiate");
      req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      req.send(JSON.stringify(user));
    };
  }]);