angular.module('HH')
.controller('UserFormController', ['$scope', '$location', 'userFactory',
  function($scope, $location, userFactory) {
  $scope.user;
  $scope.permissions;
  $scope.selectedUserGroups;
  $scope.userGroups;
  $scope.status;
  
  getUserGroups();

  $scope.createUser = function(user) {
    user.permissions = $scope.permissions;
  	userFactory.createUser(user)
  	.success(function(data) {
      $location.path("/dashboard")
  	})
  	.error(function (error) {
      $scope.status = error;
    })
  }
  
  $scope.addUserGroup = function(userGroup) {
    $scope.selectedUserGroups[userGroup] = !$scope.selectedUserGroups[userGroup];
    updatePermission();
  }

  function updatePermission() {
    if ($scope.permissions == null) {
      $scope.permissions = new Array();
    }
    for (var j = 0; j < $scope.selectedUserGroups.length; j++) {
      if ($scope.selectedUserGroups[j] == true) {
        userGroup = $scope.userGroups[j];
        for (var i = 0; i < userGroup.permissions.length; i++) {
          if ($scope.permissions.indexOf(userGroup.permissions[i]) == -1) {
            $scope.permissions.push(userGroup.permissions[i]);
          }
        }
      } else {
        userGroup = $scope.userGroups[j];
        for (var i = 0; i < userGroup.permissions.length; i++) {
          var index = $scope.permissions.indexOf(userGroup.permissions[i]);
          while (index != -1) {
            $scope.permissions.splice(index, 1);
            index = $scope.permissions.indexOf(userGroup.permissions[i]);
          }
        }
      }
    }
  }

  function getUserGroups() {
    userFactory.getUserGroups()
    .success(function (data) {
      $scope.userGroups = data;
      for (var i = 0; i < $scope.userGroups.length; i++) {
        getUserGroupPermissions($scope.userGroups[i].id);
      }
      $scope.selectedUserGroups = [false, false, false, false];
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
}])