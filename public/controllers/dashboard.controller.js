angular.module('invoicr').controller('DashboardCtrl', ['$scope', '$rootScope', '$http', '$location', function($scope, $rootScope, $http, $location) {
   $rootScope.isActive = function(route) {
      return $location.path().indexOf(route) > -1;
   };
}]);
