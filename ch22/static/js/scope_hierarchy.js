angular.module('myApp', []).
  controller('LevelA', function($scope) {
    $scope.title = "Level A"
    $scope.valueA = 1;
    $scope.inc = function() {
      $scope.valueA++;
    };
  }).
  controller('LevelB', function($scope) {
    $scope.title = "Level B"
    $scope.valueB = 1;
    $scope.inc = function() {
      $scope.valueB++;
    };
  }).
  controller('LevelC', function($scope) {
    $scope.title = "Level C"
    $scope.valueC = 1;
    $scope.inc = function() {
      $scope.valueC++;
    };
  });