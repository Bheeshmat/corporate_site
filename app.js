var App = angular.module("computer", ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/main', {
    templateUrl: 'main.html',
    controller: 'mainController'
  })
  .when('/about', {
    templateUrl: 'about.html',
    controller: 'mainController'
  })
  .when('/services', {
    templateUrl: 'services.html',
    controller: 'servicesController'
  })
  .when('/contact', {
    templateUrl: 'contact.html',
    controller: 'contactController'
  })
  .otherwise({ redirectTo: '/main'})
}])
.controller('mainController', ['$scope', '$http', function($scope, $http){
  console.log('main controller');
  $http.get('').then(function(response){
    $scope.services = response.data;
  });
}])
.controller('servicesController', ['$scope', '$http', function($scope, $http){
  $http.get('services.json').then(function(response){
    $scope.services = response.data;
  });
}])
.controller('contactController', ['$scope', '$http', function($scope, $http){
  $http.get('locations.json').then(function(response){
    $scope.locations = response.data;
  });
}]);
