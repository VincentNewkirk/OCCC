angular.module('CalendarTest')
  .controller('VisitFormController', ['$scope', function($scope) {
    $scope.formFields = [
      {
        name: 'Name',
        fa: 'fa fa-key',
      },
      {
        name: 'Specify Relationship',
        fa: 'fa fa-user',
      },
      {
        name: 'Home Address',
        fa: 'fa fa-key',
      },
      {
        name: 'City',
        fa: 'fa fa-user',
      },
      {
        name: 'Inmate Name',
        fa: 'fa fa-user',
      },
      {
        name: 'Applicant Social Security Number',
        fa: 'fa fa-key',
      },
      {
        name: 'Date',
        fa: 'fa fa-user',
      },
    ];


    // $scope.update = (user) => {
    //   const req = new XMLHttpRequest();
    //   req.open('POST', 'http://localhost:4002/visitForm');
    //   req.setRequestHeader("Authorization", "Negotiate");
    //   req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    //   req.send(JSON.stringify(user));
    // };
  }]);