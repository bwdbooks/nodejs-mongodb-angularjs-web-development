var app = angular.module('myApp', []);
app.value('censorWords', ['bad','mad','sad']);
app.constant('repString', "****");
app.factory('censorF', ['censorWords', 'repString', 
                        function (cWords, repString) {
  return function(inString) { 
    var outString = inString;
    for(i in cWords){
      outString = outString.replace(cWords[i], repString);
    }
    return outString;
  };
}]);
function CensorObj(cWords, repString) {
  this.censor = function(inString){
    var outString = inString;
    for(i in cWords){
      outString = outString.replace(cWords[i], repString);
    }
    return outString;
  };
}
app.service('censorS', ['censorWords', 'repString', CensorObj]);
app.controller('myController', ['$scope', 'censorF', 'censorS', 
                                function($scope, censorF, censorS) {
    $scope.censoredByFactory = censorF("mad text");
    $scope.censoredByService = censorS.censor("bad text");
  }]);
