angular.module('H&H')
  .factory('carFactory', ['$http', function($http) {

  var urlBase = '/cars';
  var carFactory = {};

  carFactory.getAvaliableCars = function () {
    return $http.get(urlBase);
  }

  carFactory.createCar = function (car) {
    return $http.post(urlBase, car);
  }

  carFactory.getCar = function (id) {
    return $http.get(urlBase + '/' + id);
  }
  
  carFactory.updateCar = function (id, car) {
    return $http.put(urlBase + '/' + id, car);
  }

  carFactory.deleteCar = function (id) {
    return $http.delete(urlBase + '/' + id);
  }

  carFactory.carsOrdered = function () {
    return $http.get(urlBase + '/orders');
  }

  carFactory.carsInProgress = function () {
    return $http.get(urlBase + '/progress');
  }

  carFactory.carsShipped = function () {
    return $http.get(urlBase + '/shipped');
  }

  carFactory.carsAll = function () {
    return $http.get(urlBase + '/all');
  }

  carFactory.addCarToUser = function (car_id) {
    return $http.get(urlBase + '/' + car_id + '/addToUser', "");
  }

  return carFactory;
}]);