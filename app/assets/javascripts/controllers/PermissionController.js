angular.module('HH')
.controller('PermissionController', ['$scope', '$routeParams', 'permissionFactory', 'userFactory', 
  function($scope, $routeParams, permissionFactory, userFactory) {
  $scope.user;
  $scope.userPermissions;
  $scope.permissions;
  var user_id = $routeParams.id;

  $scope.reset = function() {
    startUp();
  }

  $scope.update = function() {
    commit();
  }

  $scope.addPermissionToUser = function(id) {
    for (var i = 0; i < $scope.permissions.length; i++) {
      if ($scope.permissions[i].id == id) {
        $scope.userPermissions.push($scope.permissions[i]);
        $scope.permissions.splice(i, 1);
      }
    }
  }

  $scope.removePermissionFromUser = function(id) {
    for (var i = 0; i < $scope.userPermissions.length; i++) {
      if ($scope.userPermissions[i].id == id) {
        $scope.permissions.push($scope.userPermissions[i]);
        $scope.userPermissions.splice(i, 1);
      }
    }
  }

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
      getPermissions();
  	})
  	.error(function (error) {

    })
  } 

  function getPermissions() {
  	permissionFactory.getPermissions()
  	.success(function (data) {
      $scope.permissions = new Array();
      for (var i = 0; i < data.length; i++) {
        var unique = true;
        for (var j = 0; j < $scope.userPermissions.length; j++) {
          if (data[i].id == $scope.userPermissions[j].id) {
            unique = false;
            break;
          }
        }
        if (unique) {
          $scope.permissions.push(data[i]);
        }
      }
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