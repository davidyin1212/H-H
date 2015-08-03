angular.module('HH')
.controller('CarFormController', ['$scope', 'carFactory','$routeParams',
  function($scope, carFactory, $routeParams) {
  $scope.car;
  $scope.status;
  var isNew = false;
  var id = $routeParams.id;

  function startup() {
    if (id >= 0) {
      getCar(id);
  	}
  }

  function commit(car) {
    $scope.car = angular.copy(car);
  	if (!isNew) {
  	  updateCar(id);
  	} else {
  	  createCar();
  	}
  }

  function getCar() {
  	carFactory.getCar(id)
    .success(function (data) {
    	$scope.car = data;
    })
    .error(function (error) {
      isNew = true;
      // $scope.car = 
    })
  }

  function createCar() {
    carFactory.createCar($scope.car)
    .success(function (data) {
    	$scope.cars.push(data);
    })
    .error(function (error) {
      // $scope.status = error.message;
    })
  }

  function updateCar() {
  	carFactory.updateCar(id, $scope.car)
    .success(function (data) {

    })
    .error(function (error) {

    })
  }
}])