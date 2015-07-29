angular.module('H&H')
.controller('PermissionController', ['$scope', 'permissionFactory', 'userFactory'
  function($scope, permissionFactory, userFactory) {
  $scope.user;
  $scope.userPermissions;
  $scope.permissions;

  function getUserPermissions(id) {
  	userFactory.getUserPermissions(id)
  	.success(function (data) {
  	  userPermissions = data;
  	})
  	.error(function (error) {

    })
  } 

  function getPermissions() {
  	permissionFactory.getPermissions()
  	.success(function (data) {
  	  permissions = data;
  	})
  	.error(function (error) {

  	})
  }

  function addPermissionToUser(user_id, permission_id) {
  	userFactory.addPermissionToUser(user_id, permission_id)
  	.success(function (data) {
  	  for (var i = 0; i < $scope.permissions.length; i++) {
  	  	var permission = $scope.permissions[i];
        if (permission.ID === permission_id) {
          $scope.userPermissions.push(data);
          break;
        }
  	  }
  	}) 
  	.error(function (error) {

  	})
  }
}])