var hrbvn = angular.module('hrbvn', ['ngRoute', 'ngAnimate'])

angular.module('hrbvn').config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  // Takes '#' out of url
  $locationProvider.html5Mode(true);

  // Specifying what controllers and views to use on what route
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .otherwise('/')
}]);

angular.module('hrbvn').controller('HomeCtrl', ["$scope", function($scope) {
  console.log("TESTING ANGULAR");
}]);
