angular.module('HH')
.controller('SearchController', ['$scope', '$location', 'carFactory',
  function($scope, $location, carFactory) {
  $scope.carsTemplate;
  $scope.cars;
  $scope.radioModel = "Avaliable";
  $scope.asyncSelected = "";
  $scope.tax = 0.05;

  $scope.query = function (val) {
    $scope.radioModel = val;
    setup();
  }

  $scope.searchCars = function (val) {
    $scope.cars = $scope.carsTemplate.slice(0);
    for (var i = 0; i < $scope.cars.length; i++) {
      var queryArgs = val.split(" ");
      for (var j = 0; j < queryArgs.length; j++) {
        var queryVal = queryArgs[j].toLowerCase();
        if ($scope.cars[i].name.toLowerCase().indexOf(queryVal) < 0 &&
            $scope.cars[i].make.toLowerCase().indexOf(queryVal) < 0 &&
            $scope.cars[i].model.toLowerCase().indexOf(queryVal) < 0 &&
            $scope.cars[i].stock_num.toLowerCase().indexOf(queryVal) < 0) {
          $scope.cars.splice(i, 1);
          i--;
          break;
        }
      }
    }
  }

  $scope.isEmpty = function() {
    if ($scope.asyncSelected == "") {
      $scope.searchCars("");
    }
  }

  $scope.removeCar = function (id) {
    removeCar(id);
  }

  $scope.detailsButtonClicked = function (id) {
    $location.path("/car/" + id);
  }

  $scope.editButtonClicked = function (id) {
    $location.path("/car/edit/" + id);
  }

  setup();

  function setup() {
    $scope.asyncSelected = "";
    if ($scope.radioModel === "Ordered") {
      getCarsOrdered();
    } else if ($scope.radioModel === "InProgress") {
      getCarsInProgress();
    } else if ($scope.radioModel === "Shipped") {
      getCarsShipped();
    } else if ($scope.radioModel === "All") {
      getCarsAll();
    } else if ($scope.radioModel === "Ready"){
      getCarsReady();
    } else if ($scope.radioModel === "Avaliable"){
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
      $scope.carsTemplate = data;
      $scope.cars = $scope.carsTemplate.slice(0);
    })
    .error(function (error) {

    })
  }

  function getCarsOrdered() {
    carFactory.carsOrdered()
    .success(function (data) {
      $scope.carsTemplate = data;
      $scope.cars = $scope.carsTemplate.slice(0);
    })
    .error(function (error) {

    })
  }

  function getCarsInProgress() {
    carFactory.carsInProgress()
    .success(function (data) {
      $scope.carsTemplate = data;
      $scope.cars = $scope.carsTemplate.slice(0);
    })
    .error(function (error) {

    })
  }

  function getCarsReady() {
    carFactory.carsReady()
    .success(function (data) {
      $scope.carsTemplate = data;
      $scope.cars = $scope.carsTemplate.slice(0);
    })
    .error(function (error) {

    })
  }

  function getCarsShipped() {
    carFactory.carsShipped()
    .success(function (data) {
      $scope.carsTemplate = data;
      $scope.cars = $scope.carsTemplate.slice(0);
    })
    .error(function (error) {

    })
  }

  function getCarsAll() {
    carFactory.carsAll()
    .success(function (data) {
      $scope.carsTemplate = data;
      $scope.cars = $scope.carsTemplate.slice(0);
    })
    .error(function (error) {

    })
  }

  function removeCar(id) {
  	carFactory.deleteCar(id)
    .success(function (data) {
      // $scope.status = 'Deleted Customer! Refreshing customer list.';
      for (var i = 0; i < $scope.carsTemplate.length; i++) {
        var car = $scope.carsTemplate[i];
        if (car.id == id) {
          $scope.carsTemplate.splice(i, 1);
          break;
        }
      }
      $scope.cars = $scope.carsTemplate.slice(0);
    })
    .error(function (error) {

    })
  }
}]);
