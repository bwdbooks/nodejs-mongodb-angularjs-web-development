var app = angular.module('richApp', []);
app.controller('tableController', function($scope, $http) {
  $scope.words = [];
  $scope.contains = '';
  $scope.limit = 5;
  $scope.skip = 0;
  $scope.skipEnd = 0;
  $scope.sortFields = ['Word', 'First', 'Last', 'Length', 
                       'Vowels', 'Consonants'];
  $scope.sortField ="Word";
  $scope.direction = "asc";
  $scope.getWords = function(){
    $http({url: '/words', method: "GET", 
           params:{ limit:$scope.limit, 
                    skip:$scope.skip,
                    sort:$scope.sortField, 
                    direction:$scope.direction,
                    contains:$scope.contains }})
    .success(function(data, status, headers, config) {
       $scope.words = data;
       $scope.skipEnd = $scope.skip + $scope.words.length;
     })
     .error(function(data, status, headers, config) {
       $scope.words = [];
       $scope.skipEnd = $scope.skip + $scope.words.length;
     });
  };
  $scope.find = function(){
    $scope.skip = 0;
    $scope.getWords();
  };
  $scope.next = function(){
    if($scope.words.length == $scope.limit){
      $scope.skip += parseInt($scope.limit);
      $scope.getWords();
    }
  };
  $scope.prev = function(){
    if($scope.skip > 0){
      if($scope.skip >= parseInt($scope.limit)){
        $scope.skip -= parseInt($scope.limit);
      } else{
        $scope.skip = 0;
      }
      $scope.getWords();
    }
  };
  $scope.getWords();
});
app.controller('weatherController', function($scope, $http) {
  $scope.cities = ['London', 'Paris', 'New York', 
                   'Rome', 'Los Angeles'];
  $scope.location = $scope.cities[0];
  $scope.locationIn = '';
  $scope.getWeather = function(){
    $http({url: '/weather', method: "GET", 
           params:{city:$scope.location}})
    .success(function(data, status, headers, config) {
       $scope.weather = data;
     })
     .error(function(data, status, headers, config) {
       $scope.weather = data;
     });
  };
  $scope.addCity = function(){
    if ($scope.cities.indexOf($scope.locationIn) != 0){
      $scope.cities.push($scope.locationIn);
    }
    $scope.location = $scope.locationIn;
    $scope.getWeather();
  };
  $scope.setLocation = function(city){
    $scope.location = city;
    $scope.getWeather();
  };
  $scope.getWeather('London');
});
app.directive('richTabs', function() {
  return { restrict: 'E', transclude: true,
    scope: {},
    controller: function($scope) {
      var panes = $scope.panes = [];
      $scope.select = function(pane) {
        angular.forEach(panes, function(pane) {
          pane.selected = false;
        });
        pane.selected = true;
      };
      this.addPane = function(pane) {
        if (panes.length == 0) {
          $scope.select(pane);
        }
        panes.push(pane);
      };
    },
    templateUrl: '/static/rich_tabs.html'
  };
});
app.directive('richPane', function() {
  return { require: '^richTabs', restrict: 'E',
    templateUrl: '/static/rich_pane.html', 
    transclude: true, scope: { title: '@' },
    link: function(scope, element, attrs, tabsCtrl) {
      tabsCtrl.addPane(scope);
    }
  };
});
app.directive('richDraggable', function($document, $window) {
  return function(scope, element, attr) {
    var startX = 0, startY = 0;
    var x = Math.floor((Math.random()*500)+40);
    var y = Math.floor((Math.random()*360)+40);
    element.css({ 
      position: 'absolute', 
      cursor: 'pointer',
      top: y + 'px',
      left: x + 'px'
    });
    element.on('mousedown', function(event) {
      event.preventDefault();
      startX = event.pageX - x;
      startY = event.pageY - y;
      $document.on('mousemove', mousemove);
      $document.on('mouseup', mouseup);
    });
    function mousemove(event) {
      y = event.pageY - startY;
      x = event.pageX - startX;
      element.css({
        top: y + 'px',
        left:  x + 'px'
      });
    }
    function mouseup() {
      $document.unbind('mousemove', mousemove);
      $document.unbind('mouseup', mouseup);
    }
  };
});