var myAppHoldingVar = angular.module("myApp", []);  // pass dependencies in a array
// module is like a container for all components, such as controllers.
// likewise the config and run method


myAppHoldingVar.controller("productController", ['$scope', function($scope){ // a controller and $scope as MODEL to pass data between
  $scope.products = [
    {
      name: "MacBook Air 2020",
      price: "1000 USD",
    },
    {
      name: "MacBook Air 2022",
      price: "1200 USD",
    },
    {
      name: "MacBook Pro 13'",
      price: "1400 USD",
    },
    {
      name: "MacBook Pro 14'",
      price: "1900 USD",
    },
    {
      name: "MacBook Air 16'",
      price: "2400 USD",
    },
    {
      name: "Apple Watch",
      price: "400 USD",
    },
    {
      name: "iPad Air",
      price: "800 USD",
    },
    {
      name: "iPad Pro",
      price: "1100 USD",
    },
  ];
}]);
