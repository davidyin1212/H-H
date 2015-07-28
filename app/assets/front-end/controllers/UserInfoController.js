angular.module('H&H')
.controller('UserInfoController', ['$scope', 'userFactory',
  function($scope, userFactory) {
  $scope.userInfo
  $scope.userCars

  function getUser() {
  	userFactory.getUser()
  	.success(function (data) {
  		$scope.userInfo = data
  	})
  	.error(function (error) {

  	})
  }

  function updateUser() {
  	userFactory.User()
  	.success(function (data) {
  		$scope.userInfo = data
  	})
  	.error(function (error) {
  		
  	})
  }

  function getUserCars() {
  	userFactory.getUserCars(0)
  	.success(function (data) {
  		$scope.userCars = data
  	})
  	.error(function (error) {
  		
  	})
  }

}]);