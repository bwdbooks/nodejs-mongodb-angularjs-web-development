angular.module('myApp', []).
  controller('Characters', function($scope) {
    $scope.names = ['Frodo', 'Aragorn', 'Legolas', 'Gimli'];
    $scope.currentName = $scope.names[0];
    $scope.changeName = function() {
      $scope.currentName = this.name;
      $scope.$broadcast('CharacterChanged', this.name);
    };
    $scope.$on('CharacterDeleted', function(event, removeName){
      var i = $scope.names.indexOf(removeName);
      $scope.names.splice(i, 1);
      $scope.currentName = $scope.names[0];
      $scope.$broadcast('CharacterChanged', $scope.currentName);
    });
  }).
  controller('Character', function($scope) {
    $scope.info = {'Frodo':{weapon:'Sting', race:'Hobbit'},
                   'Aragorn':{weapon:'Sword', race:'Man'},
                   'Legolas':{weapon:'Bow', race:'Elf'},
                   'Gimli':{weapon:'Axe', race:'Dwarf'}};
    $scope.currentInfo = $scope.info['Frodo']; 
    $scope.$on('CharacterChanged', function(event, newCharacter){
      $scope.currentInfo = $scope.info[newCharacter];
    }); 
    $scope.deleteChar = function() {
      delete $scope.info[$scope.currentName];
      $scope.$emit('CharacterDeleted', $scope.currentName);
    };
  });