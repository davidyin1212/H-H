angular.module('HH')
.controller('PermissionController', ['$scope', 'permissionFactory', 'userFactory', '$routeParams',
  function($scope, permissionFactory, userFactory, $routeParams) {
  $scope.user;
  $scope.userPermissions;
  $scope.permissions;
  $scope.user_id = $routeParams.id

  startUp();

  function startUp() {

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