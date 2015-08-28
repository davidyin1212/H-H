angular.module('HH')
.controller('CarFormController', ['$scope', '$location', 'carFactory','$routeParams',
  function($scope, $location, carFactory, $routeParams) {
  $scope.car;
  $scope.status;
  var isNew = false;
  var id = $routeParams.id;

  $scope.commit = function(car) {
    commit(car);
    $location.path("/index");
  }
  $scope.reset = function() {
    startup();
  }

  startup();


  function startup() {
    if (id > 0) {
      getCar(id);
  	} else {
      isNew = true;
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
      window.location = "/#/index";
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