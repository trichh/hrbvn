angular.module('hrbvn').controller('ContactCtrl', function($scope, $http, $location) {
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
});
