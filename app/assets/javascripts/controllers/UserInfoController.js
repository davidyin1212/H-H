angular.module('HH')
.controller('UserInfoController', ['$scope', '$routeParams', 'userFactory',
  function($scope, $routeParams, userFactory) {
  $scope.userInfo
  $scope.userCars
  var user_id = $routeParams.id;
  
  getUser(); 
  getUserCars();

  function getUser() {
  	userFactory.getUser(user_id)
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
  	userFactory.getUserCars(user_id)
  	.success(function (data) {
  		$scope.userCars = data
  	})
  	.error(function (error) {
  		
  	})
  }

}]);