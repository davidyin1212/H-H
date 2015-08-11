angular.module('HH')
.controller('UserFormController', ['$scope', 'userFactory',
  function($scope, userFactory) {
  $scope.user;
  
  $scope.createUser = function(user) {
  	userFactory.createUser(user)
  	.success(function(data) {

  	})
  	.error(function (error) {

    })
  }
}])