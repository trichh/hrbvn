var hrbvn = angular.module('hrbvn', ['ngRoute', 'ngAnimate'])

angular.module('hrbvn').config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  // Takes '#' out of url
  $locationProvider.html5Mode(true);

  // Specifying what controllers and views to use on what route
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    })
    .otherwise('/')
}]);

angular.module('hrbvn').controller('ContactCtrl', ["$scope", "$http", "$location", function($scope, $http, $location) {
  $scope.sendEmail = function() {
    var email = $scope.email;
    var recipient = "shotbyhrbvn@gmail.com";
    var subject = $scope.subject;
    var message = $scope.message + "\n\nFrom: " + email;

    $http.post('/email', {
      email: email,
      recipient: recipient,
      subject: subject,
      message: message
    })
    .then(function(data) {

    });

    $location.path('/');
  }
}]);
