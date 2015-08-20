angular.module('HH')
.controller('UserFormController', ['$scope', 'userFactory',
  function($scope, userFactory) {
  $scope.user;
  $scope.userGroups;
  
  getUserGroups();

  $scope.createUser = function(user) {
  	userFactory.createUser(user)
  	.success(function(data) {

  	})
  	.error(function (error) {

    })
  }
  
  $scope.addUserGroup = function(userGroup) {
    if (user.permissions == null) {
      user.permissions = new Array();
    }
    user.permissions.push(userGroup.permissions);
  }

  function getUserGroups() {
    userFactory.getUserGroups()
    .success(function(data) {
      $scope.userGroups = data;
    })
    .error(function (error) {

    })
  }

}])