angular.module('HH')
.controller('CarDetailsController', ['$scope', '$routeParams', 'userFactory', 'carFactory', 
  function($scope, $routeParams, userFactory, carFactory) {
  $scope.car;
  $scope.tax;
  var id = $routeParams.id;

  getCar();

  $scope.purchaseCar = buyCar();
  $scope.cancelPurchaseCar = removeCar();

  function getCar() {
  	carFactory.getCar(id)
  	.success(function (data) {
  		$scope.car = data;
  	})
  	.error(function (error) {

  	});
  }

  function buyCar () {
  	carFactory.addCarToUser(id)
  	.success(function (data) {

  	})
  	.error(function (error) {

  	});
  }

  function removeCar () {
  	carFactory.removeFromUser(id)
  	.success(function (data) {

  	})
  	.error(function (error) {

  	});
  } 
  
}]);