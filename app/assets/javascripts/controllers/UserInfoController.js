angular.module('HH')
.controller('UserInfoController', ['$scope', '$routeParams', 'userFactory',
  function($scope, $routeParams, userFactory) {
  $scope.userInfo
  $scope.userCars
  var user_id = $routeParams.id;
  
  getUser(user_id); 
  getUserCars();

  function getUser(id) {
  	userFactory.getUser(id)
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