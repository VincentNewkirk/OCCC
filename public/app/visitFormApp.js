angular.module('visitFormApp', [])
  .controller('visitFormController', ['$scope', ($scope) => {
    $scope.formFields = [
      {
        name: 'test1',
        fa: 'fa fa-key',
      },
      {
        name: 'test2',
        fa: 'fa fa-user',
      },
    ];


/*    $scope.update = (user) => {
      const req = new XMLHttpRequest();
      req.open('POST', 'http://localhost:4002/visitForm');
      req.setRequestHeader("Authorization", "Negotiate");
      req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      req.send(JSON.stringify(user));
    };*/
  }]);