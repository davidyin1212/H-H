angular.module('HH')
  .factory('userFactory', ['$http', function($http) {

  var urlBase = '/users';
  var userFactory = {};

  userFactory.getUsers = function () {
    return $http.get(urlBase);
  }

  userFactory.createUser = function (user) {
    return $http.post(urlBase, user);
  }

  userFactory.getUser = function (id) {
    return $http.get(urlBase + '/' + id);
  }

  userFactory.updateUser = function (id, user) {
    return $http.put(urlBase + '/' + id, user);
  }

  userFactory.deleteUser = function (id) {
    return $http.delete(urlBase + '/' + id);
  }

  userFactory.getUserCars = function (user_id) {
    return $http.get(urlBase + '/' + user_id + '/cars');
  }

  userFactory.getUserPermissions = function (user_id) {
    return $http.get(urlBase + '/' + user_id + '/permissions');
  }

  userFactory.addPermissionToUser = function (user_id, permission_id) {
    return $http.post(urlBase + '/' + user_id + '/permissions/' + permission_id, "");
  }

  userFactory.removePermissionFromUser = function (user_id, permission_id) {
    return $http.delete(urlBase + '/' + user_id + '/permissions/' + permission_id);
  }

}]);