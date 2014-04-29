var app = angular.module('myApp', ['ngAnimate']);
app.controller('myController', function($scope ) {
  $scope.myImgClass = 'start-class';
  });
app.animation('.fadeOut', function() {
  return {
    enter : function(element, parentElement, afterElement, doneCallback) {},
    leave : function(element, doneCallback) {},
    move : function(element, parentElement, afterElement, doneCallback) {},
    addClass : function(element, className, done) {
      jQuery(element).animate({ opacity: 0}, 3000);
    },
    removeClass : function(element, className, done) {
      jQuery(element).animate({ opacity: 1}, 3000);
    }
  };
});
