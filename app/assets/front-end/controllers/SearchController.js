angular.module('H&H')
.controller('SearchController', ['$scope', 'carFactory', 
  function($scope, carFactory) {
  $scope.cars;
  function getCars() {
    carFactory.getCars
  }
}]);
