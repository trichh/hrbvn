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
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    })
    .otherwise('/')
}]);

angular.module('hrbvn').controller('ContactCtrl', ["$scope", function($scope) {
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

    window.location.reload(true);
  }
}]);

angular.module('hrbvn').controller('HomeCtrl', ["$scope", function($scope) {
  console.log("TESTING ANGULAR");
}]);
