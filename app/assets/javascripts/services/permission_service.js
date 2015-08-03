angular.module('HH')
  .factory('permissionFactory', ['$http', function($http) {

  var urlBase = '/permissions';
  var permissionFactory = {};

  permissionFactory.getPermissions = function () {
    return $http.get(urlBase);
  }

  permissionFactory.createPermission = function (permission) {
    return $http.post(urlBase, permission);
  }

  permissionFactory.updatePermission = function (id, permission) {
    return $http.put(urlBase + '/' + id, permission);
  }

  permissionFactory.deletePermission = function (id) {
    return $http.delete(urlBase + '/' + id);
  }

}]);