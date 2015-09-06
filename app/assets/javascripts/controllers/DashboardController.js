angular.module('HH')
.controller('DashboardController', ['$scope', '$location', 'userFactory', 'carFactory', 
  function($scope, $location, userFactory, carFactory) {
  $scope.users;
  $scope.radioModel = "All";
  $scope.statusOptions = ["Ordered", "In Progress", "Ready", "Shipped"]
  queryParam = 0;
  var noMatchingQueryCars = new Array();

  setup();

  $scope.query = function(val) {
    if (val != -1) {
      queryParam = val;
    }
    // setup();
    queryCars(queryParam);
  }

  $scope.reset = function() {
    setup();
  }

  $scope.submit = function() {
    commit();
  }

  $scope.addUserClicked = function() {
    $location.path("/new_user");
  }

  $scope.permissionsButtonClicked = function(id) {
    $location.path("/permission/" + id);
  }

  $scope.detailsButtonClicked = function(id) {
    $location.path("/inventory/" + id);
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
    updateStatuses();
  }


  function getUsers() {
  	userFactory.getUsers()
  	.success(function (data) {
  	  $scope.users = data;
      $scope.users.cars = new Array();
      $scope.users.sort(function(a, b) {
        nameA = a.last_name + " " + a.first_name;
        nameB = b.last_name + " " + b.first_name;

        return nameA.localeCompare(nameB);
      });
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

  function queryCars(param) {
    for (var i = 0; i < $scope.users.length; i++) {
      for (var a = 0; a < $scope.users[i].cars.length; a++) {
        for (var j = 0; j < $scope.users[i].cars[a].length; j++) {
          var val = $scope.users[i].cars[a];
          if (param != 0) {
            if (param != val[j].status) {
              $scope.users[i].notMatchingCars[a].push(val[j]);
              $scope.users[i].cars[a].splice(j, 1);
              j--;
            }
          }
        }
        for (var j = 0; j < $scope.users[i].notMatchingCars[a].length; j++) {
          var val = $scope.users[i].notMatchingCars[a];
          if (param != 0) {
            if (param == val[j].status) {
              $scope.users[i].cars[a].push(val[j]);
              val.splice(j, 1);
              j--;
            }
          } else {
            $scope.users[i].cars[a].push(val[j]);
            val.splice(j, 1);
            j--;
          }
        }
      }
    }
  }

  function getUserCars(id) {
  	userFactory.getUserCars(id)
  	.success(function (data) {
      var user;
    	for (var i = 0; i < $scope.users.length; i++) {
        user = $scope.users[i];
        if (user.id == id) {
          break;
        }
      }
      user.cars = new Array();
      user.notMatchingCars = new Array();
      for (var a = 0; a < data.length; a++) {
        if (queryParam != 0) {
          user.cars[a] = new Array();
          user.notMatchingCars[a] = new Array();
          for (var j = 0; j < data[a].length; j++) {
            if (data[a][j].status == queryParam) {
              user.cars[a].push(data[a][j]);
            } else {
              user.notMatchingCars[a].push(data[a][j]);
            }
          }
        } else {
          user.cars[a] = data[a];
          user.notMatchingCars[a] = new Array();
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

  function updateStatuses() {
    for (var i = 0; i < $scope.users.length; i++) {
      for (var j = 0; j < $scope.users[i].cars.length; j++) {
        carFactory.updateCar($scope.users[i].cars[j].id, $scope.users[i].cars[j])
        .success(function (data) {
          setup();
        })
        .error(function (error) {

        });
      }
    }
  }
}])