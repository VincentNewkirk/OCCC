angular.module('formSignupApp', [])
  .controller('formSignupController', ['$scope', ($scope) => {
    $scope.email = '';
    $scope.password = '';
    $scope.phone = '';
    $scope.fullName = '';
    $scope.dobDay = '';
    $scope.dobMonth = '';
    $scope.dobYear = '';
    $scope.gender = '';
    $scope.id = '';
    $scope.pin = '';
    $scope.idMethod = '';

    $scope.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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

angular.module('testPage', [])
  .controller('testPageController', ['$scope', ($scope) => {
    $scope.testFunction = function () {
      const req = new XMLHttpRequest();
      req.open('GET', 'http://localhost:4002/testPage');
      req.setRequestHeader("Authorization", "Negotiate");
      req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      req.send();
    };
  }]);