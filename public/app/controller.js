angular.module('formSignupApp')
  .controller('formSignupController', ['$scope', function($scope) {
    $scope.email = '';
    $scope.password = '';
  }]);