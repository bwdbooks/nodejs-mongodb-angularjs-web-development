var myMod = angular.module('myMod', []);
myMod.value('modMsg', 'Hello from My Module');
myMod.controller('controllerB', ['$scope', 'modMsg', 
                                 function($scope, msg) {
  $scope.message = msg;
}]);
var myApp = angular.module('myApp', ['myMod']);
myApp.value('appMsg', 'Hello from My App');
myApp.controller('controllerA', ['$scope', 'appMsg', 
                                 function($scope, msg) {
  $scope.message = msg;
}]);
console.log(myApp.requires);
//var controller = function($scope, msg) {
//  $scope.message = msg;
//};
//controller['$inject'] = ['$scope', 'appMsg'];
//myApp.controller('controllerA', controller);