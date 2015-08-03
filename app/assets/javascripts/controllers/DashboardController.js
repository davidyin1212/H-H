angular.module('HH')
.controller('DashboardController', ['$scope', 'userFactory', 'carFactory', 
  function($scope, userFactory, carFactory) {
  $scope.users;

  setup();

  function setup() {
    getUsers();
  }

  function getUsers() {
  	userFactory.getUsers()
  	.success(function (data) {
  	  $scope.users = data;
  	})
  	.error(function (error) {

  	});
  }

  function getUserCars(id) {
  	userFactory.getUserCars(id)
  	.success(function (data) {
  	  for (var i = 0; i < $scope.users.length; i++) {
  	  	var user = $scope.users[i]
  	  	if (user.ID = id) {
  	  	  $scope.users[i].cars = data
  	  	}
  	  }
  	})
  	.error(function (data) {

  	});
  }

  function getUserOfCar(id) {
  	carFactory.getUserOfCar(id)
  	.success(function (data) {
  	  $scope.user.push(data);
  	})
  	.error(function (error) {

  	});
  }

  function getCarsOrdered() {
    carFactory.carsOrdered()
    .success(function (data) {
    	$scope.cars = data;
    })
    .error(function (error) {

    });
  }

  function getCarsInProgress() {
    carFactory.carsInProgress()
    .success(function (data) {
    	$scope.cars = data;
    })
    .error(function (error) {

    });
  }

  function getCarsShipped() {
    carFactory.carsShipped()
    .success(function (data) {
    	$scope.cars = data;
    })
    .error(function (error) {

    });
  }

  function setCarToAvaliable (id) {
  	carFactory.setCarToAvaliable(id)
  	.success(function (data) {

  	})
  	.error(function (error) {

  	});
  }

  function setCarToOrdered (id) {
  	carFactory.setCarToOrdered(id)
  	.success(function (data) {

  	})
  	.error(function (error) {
  		
  	});
  }

  function setCarToInProgress (id) {
  	carFactory.setCarToInProgress(id)
  	.success(function (data) {

  	})
  	.error(function (error) {
  		
  	});
  }

  function setCarToShipped (id) {
  	carFactory.setCarToShipped(id)
  	.success(function (data) {

  	})
  	.error(function (error) {
  		
  	});
  }
}])