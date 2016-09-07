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
      const req = new XMLHttpRequest();
      req.open('POST', 'http://localhost:4002/signup');
      req.setRequestHeader("Authorization", "Negotiate");
      req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      req.send(JSON.stringify(user));
    };
  }]);

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

angular.module('visitForm', [])
  .controller('visitFormController', ['$scope', ($scope) => {
    $scope.formFields = [{name: 'test1'}, {name: 'test2'}];


/*    $scope.update = (user) => {
      const req = new XMLHttpRequest();
      req.open('POST', 'http://localhost:4002/visitForm');
      req.setRequestHeader("Authorization", "Negotiate");
      req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      req.send(JSON.stringify(user));
    };*/
  }]);

angular.module('testPage', ['ngCookies'])
  .controller('testPageController', ['$scope', '$cookies', ($scope, $cookies) => {
  }]);