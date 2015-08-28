angular.module('HH')
.controller('PermissionController', ['$scope', '$routeParams', '$location', 'permissionFactory', 'userFactory', 
  function($scope, $routeParams, $location, permissionFactory, userFactory) {
  $scope.user;
  $scope.userPermissions;
  $scope.permissions;
  $scope.userGroups;
  var user_id = $routeParams.id;

  $scope.reset = function() {
    startUp();
  }

  $scope.update = function() {
    commit();
    $location.path("/dashboard");
  }

  $scope.addPermissionToUserEvent = function(id) {
    addPermissionToUser(id);
  }

  $scope.removePermissionFromUserEvent = function(id) {
    removePermissionFromUser(id);
  }

  $scope.addUserGroup = function(userGroup) {

    for (var i = 0; i < userGroup.permissions.length; i++) {
      addPermissionToUser(userGroup.permissions[i].id);
    }
    userGroup.status = 1;
  }

  $scope.removeUserGroup = function(userGroup) {
    for (var i = 0; i < userGroup.permissions.length; i++) {
      removePermissionFromUser(userGroup.permissions[i].id);
    }
    userGroup.status = 0; 
  }

  function addPermissionToUser(id) {
    for (var i = 0; i < $scope.permissions.length; i++) {
      if ($scope.permissions[i].id == id) {
        $scope.userPermissions.push($scope.permissions[i]);
        $scope.permissions.splice(i, 1);
      }
    }
  }

  function removePermissionFromUser(id) {
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
    getUserGroups();
  }

  function commit() {
    updatePermissionUser($scope.userPermissions);
  }

  function getUserGroups() {
    userFactory.getUserGroups()
    .success(function (data) {
      $scope.userGroups = data;
      for (var i = 0; i < $scope.userGroups.length; i++) {
        getUserGroupPermissions($scope.userGroups[i].id);
      }
    })
    .error(function (error) {

    })
  }

  function getUserGroupPermissions(id) {
    userFactory.getUserGroup(id)
    .success(function (data) {
      for (var i = 0; i < $scope.userGroups.length; i++) {
        if ($scope.userGroups[i].id == id) {
          $scope.userGroups[i].permissions = data;
        }
      }
    })
    .error(function (error) {

    })
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
  	userFactory.updateUserPermissions(user_id, permissions)
  	.success(function (data) {
  	  getUserPermissions();
  	}) 
  	.error(function (error) {

  	})
  }
}])