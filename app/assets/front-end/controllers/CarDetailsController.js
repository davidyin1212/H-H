angular.module('H&H')
.controller('CarDetailsController', ['$scope', 'userFactory', 'carFactory',
  function($scope, userFactory, carFactory) {
  $scope.car

  function getCar(id) {
  	carFactory.getCar(id)
  	.success(function (data) {
  		$scope.car = data
  	})
  	.error(function (error) {

  	})
  }

  function purchaseCar (id) {
  	carFactory.addCarToUser(id)
  	.success(function (data) {

  	})
  	.error(function (error) {

  	})
  }

  function cancelPurchaseCar (id) {
  	carFactory.removeFromUser(id)
  	.success(function (data) {

  	})
  	.error(function (error) {

  	})
  }
  
}]);