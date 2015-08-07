angular.module('HH')
.controller('SearchController', ['$scope', 'carFactory',
  function($scope, carFactory) {
  $scope.cars;
  $scope.radioModel = "Avaliable";

  $scope.query = function () {
    setup();
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
    })
    .error(function (error) {

    })
  }

  function getCarsOrdered() {
    carFactory.carsOrdered()
    .success(function (data) {
    	$scope.cars = data;
    })
    .error(function (error) {

    })
  }

  function getCarsInProgress() {
    carFactory.carsInProgress()
    .success(function (data) {
    	$scope.cars = data;
    })
    .error(function (error) {

    })
  }

  function getCarsShipped() {
    carFactory.carsShipped()
    .success(function (data) {
    	$scope.cars = data;
    })
    .error(function (error) {

    })
  }

  function getCarsAll() {
    carFactory.carsAll()
    .success(function (data) {
    	$scope.cars = data;
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
        if (car.ID === id) {
          $scope.cars.splice(i, 1);
          break;
        }
      }
    })
    .error(function (error) {

    })
  }
}]);
