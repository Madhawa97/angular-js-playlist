var myAppHoldingVar = angular.module("myApp", []);  // pass dependencies in a array
// module is like a container for all components, such as controllers.
// likewise the config and run method


myAppHoldingVar.controller("formController", ['$scope', function($scope){ // a controller and $scope as MODEL to pass data between
  $scope.message = "Greetings";
  $scope.weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
}]);
