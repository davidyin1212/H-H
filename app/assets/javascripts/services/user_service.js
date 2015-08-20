angular.module('HH')
  .factory('userFactory', ['$http', function($http) {

  var urlBase = '/api/users';
  var userFactory = {};

  userFactory.getUsers = function () {
    return $http.get(urlBase + '.json');
  }

  userFactory.getUserGroups =function () {
    return $http.get("/api/user_group.json")
  }

  userFactory.getUserGroup =function (id) {
    return $http.get("/api/user_group/" + id + ".json")
  }

  userFactory.createUser = function (user) {
    return $http.post(urlBase + '.json', user);
  }

  userFactory.getUser = function (id) {
    return $http.get(urlBase + '/' + id + '.json');
  }

  userFactory.updateUser = function (id, user) {
    return $http.put(urlBase + '/' + id + '.json', user);
  }

  userFactory.deleteUser = function (id) {
    return $http.delete(urlBase + '/' + id + '.json');
  }

  userFactory.getUserCars = function (user_id) {
    return $http.get(urlBase + '/' + user_id + '/cars' + '.json');
  }

  userFactory.getUserPermissions = function (user_id) {
    return $http.get(urlBase + '/' + user_id + '/permissions' + '.json');
  }

  userFactory.addPermissionToUser = function (user_id, permission_id) {
    return $http.post(urlBase + '/' + user_id + '/permissions/' + permission_id + '.json', "");
  }

  userFactory.removePermissionFromUser = function (user_id, permission_id) {
    return $http.delete(urlBase + '/' + user_id + '/permissions/' + permission_id + '.json');
  }

  userFactory.updateUserPermissions = function (user_id, permissions) {
    return $http.post(urlBase + '/' + user_id + '/permissions' + '.json', permissions);
  }

  return userFactory;
  
}]);