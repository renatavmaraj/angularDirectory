var myApp = angular.module('myApp', []);

//Create controller, recevies variable called $scope
//With $scope, you can pass things from JS to controller

myApp.controller('MyController', function MyController($scope){

  //Create model manually and place inside scope variable
  $scope.author = {
    'name' : 'Bjork',
    'title': 'Artist',
    'company': 'Iceland'
  }
});