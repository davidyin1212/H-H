angular.module('HH')
  .factory('carFactory', ['$http', function($http) {

  var urlBase = '/api/cars';
  var carFactory = {};

  carFactory.getAvaliableCars = function () {
    return $http.get(urlBase + '.json');
  }

  carFactory.createCar = function (car) {
    return $http.post(urlBase + '.json', car);
  }

  carFactory.getCar = function (id) {
    return $http.get(urlBase + '/' + id + '.json');
  }
  
  carFactory.updateCar = function (id, car) {
    return $http.put(urlBase + '/' + id + '.json', car);
  }

  carFactory.deleteCar = function (id) {
    return $http.delete(urlBase + '/' + id + '.json');
  }

  carFactory.carsOrdered = function () {
    return $http.get(urlBase + '/orders' + '.json');
  }

  carFactory.carsInProgress = function () {
    return $http.get(urlBase + '/progress' + '.json');
  }

  carFactory.carsShipped = function () {
    return $http.get(urlBase + '/shipped' + '.json');
  }

  carFactory.carsAll = function () {
    return $http.get(urlBase + '/all' + '.json');
  }

  carFactory.addCarToUser = function (car_id) {
    return $http.post(urlBase + '/' + car_id + '/addToUser' + '.json', "");
  }

  carFactory.removeFromUser = function (car_id) {
    return $http.delete(urlBase + '/' + car_id + '/removeFromUser' + '.json');
  }

  carFactory.getUserOfCar = function (car_id) {
    return $http.get(urlBase + '/' + car_id + '/getUser' + '.json');
  }

  carFactory.setCarToAvaliable = function (car_id) {
    return $http.post(urlBase + '/' + car_id + 'avaliable' + '.json', "");
  }

  carFactory.setCarToOrdered = function (car_id) {
    return $http.post(urlBase + '/' + car_id + 'orders' + '.json', "");
  }

  carFactory.setCarToInProgress = function (car_id) {
    return $http.post(urlBase + '/' + car_id + 'progress' + '.json', "");
  }

  carFactory.setCarToShipped = function (car_id) {
    return $http.post(urlBase + '/' + car_id + 'shipped' + '.json', "");
  }

  return carFactory;
  
}]);