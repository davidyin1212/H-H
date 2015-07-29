angular.module('H&H')
.controller('CarFormController', ['$scope', 'carFactory',
  function($scope, carFactory) {
  $scope.car;

  function startup(id) {
    if (id >= 0) {
      getCar(id);
  	}
  }

  function commit(id) {
  	if (id >= 0) {
  	  updateCar(id);
  	} else {
  	  createCar();
  	}
  }

  function getCar(id) {
  	carFactory.getCar(id)
    .success(function (data) {
    	$scope.car = data;
    })
    .error(function (error) {

    })
  }

  function createCar() {
    carFactory.createCar($scope.car)
    .success(function (data) {
    	$scope.cars.push(data);
    })
    .error(function (error) {

    })
  }

  function updateCar(id) {
  	carFactory.updateCar(id, $scope.car)
    .success(function (data) {

    })
    .error(function (error) {

    })
  }
}])