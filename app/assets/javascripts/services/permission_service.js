angular.module('HH')
  .factory('permissionFactory', ['$http', function($http) {

  var urlBase = '/api/permissions';
  var permissionFactory = {};

  permissionFactory.getPermissions = function () {
    return $http.get(urlBase + '.json');
  }

  permissionFactory.createPermission = function (permission) {
    return $http.post(urlBase + '.json', permission);
  }

  permissionFactory.updatePermission = function (id, permission) {
    return $http.put(urlBase + '/' + id + '.json', permission);
  }

  permissionFactory.deletePermission = function (id) {
    return $http.delete(urlBase + '/' + id + '.json');
  }

  return permissionFactory;
  
}]);