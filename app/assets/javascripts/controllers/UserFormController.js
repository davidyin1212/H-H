angular.module('HH')
.controller('UserFormController', ['$scope', 'userFactory',
  function($scope, userFactory) {
  $scope.user;
  $scope.permissions;
  $scope.userGroups;
  
  getUserGroups();

  $scope.createUser = function(user) {
    user.permissions = $scope.permissions;
  	userFactory.createUser(user)
  	.success(function(data) {

  	})
  	.error(function (error) {

    })
  }
  
  $scope.addUserGroup = function(userGroup) {
    if ($scope.permissions == null) {
      $scope.permissions = new Array();
    }
    for (var i = 0; i < userGroup.permissions.length; i++) {
      if ($scope.permissions.indexOf(userGroup.permissions[i]) == -1) {
        $scope.permissions.push(userGroup.permissions[i]);
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