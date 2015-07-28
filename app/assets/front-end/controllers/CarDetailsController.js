angular.module('H&H')
.controller('UserInfoController', ['$scope', 'userFactory', 'carFactory',
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

  function removeCar (id) {
  	carFactory.addCarToUser(id)
  	.success(function (data) {

  	})
  	.error(function (error) {

  	})
  }
  
}]);