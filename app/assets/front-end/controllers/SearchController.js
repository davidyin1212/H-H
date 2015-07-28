angular.module('H&H')
.controller('SearchController', ['$scope', 'carFactory',
  function($scope, carFactory) {
  $scope.cars;
  function getCars() {
    carFactory.getAvaliableCars()
    .success(function (data) {
    	$scope.cars = data;
    })
    .error(function (error) {

    })
  }
}]);
