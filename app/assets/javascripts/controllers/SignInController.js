angular.module('HH')
.controller('SignInController', ['$scope', '$location', 'Auth',
  function($scope, $location, Auth) {
  $scope.user;
  $scope.messages;
  var config = {
    headers: {
      'X-HTTP-Method-Override': 'POST'
    }
  };
  $scope.status;
  $scope.signIn = function() {
    Auth.login($scope.user, config).then(function(data){
      window.location = '/#/';
    }, function(error) {
	  $scope.messages = "Invalid email and password combination";
    });
  }
}]);