var myApp = angular.module('myApp', []);

//Create controller, recevies variable called $scope
//With $scope, you can pass things from JS to controller

myApp.controller('MyController', ['$scope', '$http', function ($scope, $http){
  $http.get('js/data.json').success(function(data) {
    //Assign the data received from json file to $scope.artists
    $scope.artists = data;
    $scope.artistOrder = 'name';
  });

}]);