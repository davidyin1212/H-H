angular.module('HH')
.controller('PermissionController', ['$scope', '$routeParams', 'permissionFactory', 'userFactory', 
  function($scope, $routeParams, permissionFactory, userFactory) {
  $scope.user;
  $scope.userPermissions;
  $scope.permissions;
  var user_id = $routeParams.id;

  startUp();

  function startUp() {
    getUserPermissions();
  }

  function commit() {
    updatePermissionUser($scope.userPermissions);
  }

  function getUserPermissions() {
  	userFactory.getUserPermissions(user_id)
  	.success(function (data) {
  	  $scope.userPermissions = data;
  	})
  	.error(function (error) {

    })
  } 

  function getPermissions() {
  	permissionFactory.getPermissions()
  	.success(function (data) {
  	  $scope.permissions = data;
  	})
  	.error(function (error) {

  	})
  }

  function updatePermissionUser(permissions) {
  	userFactory.addPermissionToUser(user_id, permissions)
  	.success(function (data) {
  	  getUserPermissions();
  	}) 
  	.error(function (error) {

  	})
  }
}])