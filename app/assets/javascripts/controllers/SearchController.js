angular.module('HH')
.controller('SearchController', ['$scope', 'carFactory',
  function($scope, carFactory) {
  $scope.carsTemplate;
  $scope.cars;
  $scope.radioModel = "Avaliable";

  $scope.query = function () {
    setup();
  }

  $scope.searchCars = function (val) {
    $scope.cars = $scope.carsTemplate;
    for (var i = 0; i < $scope.cars.length; i++) {
      var queryString = $scope.cars[i].name + $scope.cars[i].make + 
      $scope.cars[i].model + $scope.cars[i].stock_num;
      var queryArgs = val.split(" ");
      for (var j = 0; j < queryArgs.length; j++) {
        if ($scope.cars[i].name.indexOf(queryArgs[j] < 0) &&
            $scope.cars[i].make.indexOf(queryArgs[j] < 0) &&
            $scope.cars[i].model.indexOf(queryArgs[j] < 0) &&
            $scope.cars[i].stock_num.indexOf(queryArgs[j] < 0)) {
          $scope.cars.splice(i, 1);
        }
      }
    }
  }

  $scope.removeCar = function (id) {
    removeCar(id);
  }

  setup();

  function setup() {
    if ($scope.radioModel === "Ordered") {
      getCarsOrdered();
    } else if ($scope.radioModel === "InProgress") {
      getCarsInProgress();
    } else if ($scope.radioModel === "Shipped") {
      getCarsShipped();
    } else if ($scope.radioModel === "All") {
      getCarsAll();
    } else {
      getCars();
    }
  }

  function getUserPermissions() {
    userFactory.getUserPermissions(user_id)
    .success(function (data) {
      $scope.userPermissions = data;
    })
    .error(function (error) {

    })
  }

  function getCars() {
    carFactory.getAvaliableCars()
    .success(function (data) {
    	$scope.cars = data;
      $scope.carsTemplate = data;
    })
    .error(function (error) {

    })
  }

  function getCarsOrdered() {
    carFactory.carsOrdered()
    .success(function (data) {
    	$scope.cars = data;
      $scope.carsTemplate = data;
    })
    .error(function (error) {

    })
  }

  function getCarsInProgress() {
    carFactory.carsInProgress()
    .success(function (data) {
    	$scope.cars = data;
      $scope.carsTemplate = data;
    })
    .error(function (error) {

    })
  }

  function getCarsShipped() {
    carFactory.carsShipped()
    .success(function (data) {
    	$scope.cars = data;
      $scope.carsTemplate = data;
    })
    .error(function (error) {

    })
  }

  function getCarsAll() {
    carFactory.carsAll()
    .success(function (data) {
    	$scope.cars = data;
      $scope.carsTemplate = data;
    })
    .error(function (error) {

    })
  }

  function removeCar(id) {
  	carFactory.deleteCar(id)
    .success(function (data) {
      // $scope.status = 'Deleted Customer! Refreshing customer list.';
      for (var i = 0; i < $scope.cars.length; i++) {
        var car = $scope.cars[i];
        if (car.id === id) {
          $scope.cars.splice(i, 1);
          break;
        }
      }
      $scope.carsTemplate = $scope.cars;
    })
    .error(function (error) {

    })
  }
}]);
