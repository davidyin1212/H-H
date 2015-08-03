angular.module('HH')
.controller('CarDetailsController', ['$scope', 'userFactory', 'carFactory', '$routeParams',
  function($scope, $routeParams, userFactory, carFactory) {
  $scope.car
  $scope.tax

  getCar();

  function getCar() {
  	carFactory.getCar($routeParams.id)
  	.success(function (data) {
  		$scope.car = data
  	})
  	.error(function (error) {

  	})
  }

  function purchaseCar () {
  	carFactory.addCarToUser($routeParams.id)
  	.success(function (data) {

  	})
  	.error(function (error) {

  	})
  }

  function cancelPurchaseCar () {
  	carFactory.removeFromUser($routeParams.id)
  	.success(function (data) {

  	})
  	.error(function (error) {

  	})
  } 
  
}]);