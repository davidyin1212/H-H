angular.module('HH')
.controller('CarFormController', ['$scope', '$location', 'carFactory','$routeParams',
  function($scope, $location, carFactory, $routeParams) {
  $scope.car;
  $scope.status;
  $scope.disableForm;
  var isNew = false;
  var id = $routeParams.id;

  $scope.commit = function(car) {
    commit(car);
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
    $scope.disableForm = true;

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
      $scope.disableForm = false;
    })
    .error(function (error) {
      isNew = true;
      // $scope.car = 
    })
  }

  function createCar() {
    carFactory.createCar($scope.car)
    .success(function (data) {
      $location.path("/index");
    })
    .error(function (error) {
      // $scope.status = error.message;
      $scope.disableForm = false;
    })
  }

  function updateCar() {
  	carFactory.updateCar(id, $scope.car)
    .success(function (data) {
      $location.path("/index");
    })
    .error(function (error) {
      $scope.disableForm = false;
    })
  }
}])