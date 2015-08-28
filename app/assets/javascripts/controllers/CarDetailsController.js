angular.module('HH')
.controller('CarDetailsController', ['$scope', '$routeParams', '$location', 'userFactory', 'carFactory', 
  function($scope, $routeParams, $location, userFactory, carFactory) {
  $scope.car;
  $scope.tax = 0.05;
  var id = $routeParams.id;

  getCar();

  $scope.purchaseCar = function() {
    buyCar();
  };
  $scope.cancelPurchaseCar = function() {
    removeCar();
  }

  $scope.editButtonClicked = function () {
    $location.path("/car/edit/" + id);
  }

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
      window.location = "/#/index";
  	})
  	.error(function (error) {

  	});
  }

  function removeCar () {
  	carFactory.removeFromUser(id)
  	.success(function (data) {
      window.location = "/#/index";
  	})
  	.error(function (error) {

  	});
  } 
  
}]);