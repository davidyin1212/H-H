angular.module('HH')
.controller('DashboardController', ['$scope', 'userFactory', 'carFactory', 
  function($scope, userFactory, carFactory) {
  $scope.users;
  $scope.radioModel = "All";
  queryParam = 0;

  setup();

  $scope.query = function(val) {
    queryParam = val;
    setup();
  }

  function setup() {
    getUsers();
  }

  $scope.setStatus = function (status, id) {
    $scope.users.car[id].status = status;
  }

  $scope.removeUser = function (id) {
    deleteUser(id);
  }

  function commit() {

  }

  function getUsers() {
  	userFactory.getUsers()
  	.success(function (data) {
  	  $scope.users = data;
      $scope.users.cars = new Array();
      for (var i = 0; i < $scope.users.length; i++) {
        getUserCars($scope.users[i].id);
      }
  	})
  	.error(function (error) {

  	});
  }

  function deleteUser(id) {
    userFactory.deleteUser(id)
    .success(function (data) {
      for (var i = 0; i < $scope.users.length; i++) {
        if ($scope.users[i].id == id) {
          $scope.users.splice(i, 1);
        }
      }
    })
    .error(function (error) {

    });
  }

  function getUserCars(id) {
  	userFactory.getUserCars(id)
  	.success(function (data) {
  	  for (var i = 0; i < $scope.users.length; i++) {
  	  	var user = $scope.users[i]
  	  	if (user.id == id) {
          if (queryParam != 0) {
            $scope.users[i].cars = new Array();
            for (var j = 0; j < data.length; j++) {
              if (data[j].status == queryParam) {
                $scope.users[i].cars.push(data[j]);
              }
            }
          } else {
            $scope.users[i].cars = data;
          }    
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