angular.module('H&H')
  .factory('carFactory', ['$http', function($http) {

  var urlBase = '/cars';
  var carFactory = {};

  carFactory.getAvaliableCars = function () {
    return $http.get(urlBase);
  }

  dataFactory.getCustomers = function () {
    return $http.get(urlBase);
  };

  dataFactory.getCustomer = function (id) {
    return $http.get(urlBase + '/' + id);
  };

  dataFactory.insertCustomer = function (cust) {
    return $http.post(urlBase, cust);
  };

  dataFactory.updateCustomer = function (cust) {
    return $http.put(urlBase + '/' + cust.ID, cust)
  };

  dataFactory.deleteCustomer = function (id) {
      return $http.delete(urlBase + '/' + id);
  };

  dataFactory.getOrders = function (id) {
      return $http.get(urlBase + '/' + id + '/orders');
  };

  return dataFactory;
}]);