angular.module('HH')
.controller('UserInfoController', ['$scope', '$routeParams', '$interval', 'userFactory',
  function($scope, $routeParams, $interval, userFactory) {
  $scope.userInfo
  $scope.userCars
  $scope.determinateValue = new Array();
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
      $scope.userCars = new Array();
      for (var i = 3; i > 0; i--) {
        for (var j = 0; j < data.length; j++) {
          if (data[j].status == i) {
            $scope.userCars.push(data[j]);
          }
        }
      }
      for (var i = 0; i < data.length; i++) {
        if (data[i].status == 4) {
          $scope.userCars.push(data[i]);
        }
      }
  	})
  	.error(function (error) {
  		
  	})
  }

}]);