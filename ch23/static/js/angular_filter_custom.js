angular.module('myApp', []).
  filter('censor', function() {
    return function(input, replacement) {
      var cWords = ['bad', 'evil', 'dark'];
      var out = input;
      for(var i=0; i<cWords.length; i++){
        out = out.replace(cWords[i], replacement);
      }
      return out;
    };
  }).
  controller('myController', ['$scope', 'censorFilter', 
                              function($scope, censorFilter) {
    $scope.phrase="This is a bad phrase.";
    $scope.txt = "Click to filter out dark and evil.";
    $scope.filterText = function(){
      $scope.txt = censorFilter($scope.txt, '<<censored>>');
    };
  }]);