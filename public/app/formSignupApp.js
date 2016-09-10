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

    // $scope.accountInfo = [
    //   {
    //     model: '',
    //     placeholder: 'Full Name',
    //     fa: 'fa-user',
    //   },
    //   {
    //     model: '',
    //     placeholder: 'Email Address',
    //     fa: 'fa-envelope',
    //   },
    //   {
    //     model: '',
    //     placeholder: 'Password',
    //     fa: 'fa-key',
    //   },
    //   {
    //     model: '',
    //     placeholder: 'Phone Number',
    //     fa: 'fa-phone',
    //   },
    // ];


    $scope.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    $scope.update = (user) => {
      const req = new XMLHttpRequest();
      req.open('POST', 'http://localhost:4002/signup');
      req.setRequestHeader("Authorization", "Negotiate");
      req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      req.send(JSON.stringify(user));
    };
  }]);