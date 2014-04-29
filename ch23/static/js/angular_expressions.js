angular.module('myApp', []).
  controller('myController', function($scope) {
    $scope.first = 'Thorin';
    $scope.last = 'Oakenshield';
    $scope.newFirst = 'Gandalf';
    $scope.newLast = 'Greyhame';
    $scope.combine = function(fName, lName){
      return fName + ' ' + lName;
    };
    $scope.setName = function(fName, lName){
      $scope.first = fName;
      $scope.last = lName;
    };
  });