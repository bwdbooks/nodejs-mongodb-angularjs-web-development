angular.module('myApp', []).
  controller('myController', function($scope) {
    $scope.colors=['red','green','blue'];
    $scope.myStyle = { "background-color": 'blue' };
    $scope.days=['Monday', 'Tuesday', 'Wednesday',
                 'Thursday', 'Friday'];
    $scope.msg="Message from the model";
  });