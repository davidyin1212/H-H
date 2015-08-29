angular.module('HH')
.controller('ToastController', ['$scope', '$rootScope',
  function($scope, $rootScope) {
  $scope.messages;
  $rootScope.$on("update_parent_controller", function(event, messages) {
    $scope.messages = messages;
  });
}]);