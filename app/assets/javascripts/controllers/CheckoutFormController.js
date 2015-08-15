angular.module('HH')
.controller('CheckoutFormController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
  $scope.car_id = $routeParams.id
}]);