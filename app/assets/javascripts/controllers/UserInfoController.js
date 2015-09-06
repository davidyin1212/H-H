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
      for (var a = 0; a < data.length; a++) {
        $scope.userCars[a] = new Array();
        for (var i = 3; i > 0; i--) {
          for (var j = 0; j < data[a].length; j++) {
            if (data[a][j].status == i) {
              $scope.userCars[a].push(data[a][j]);
            }
          }
        }
        for (var i = 0; i < data[a].length; i++) {
          if (data[a][i].status == 4) {
            $scope.userCars[a].push(data[a][i]);
          }
        }
      }
  	})
  	.error(function (error) {
  		
  	})
  }

}]);