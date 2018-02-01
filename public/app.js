angular.module('invoicr', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
   $routeProvider
     .when('/dashboard', {
        templateUrl: 'views/dashboard.view.html',
        controller: 'DashboardCtrl'
     })
     .when('/customers', {
        templateUrl: 'views/customers.view.html',
        controller: 'CustomersCtrl'
     })
     .when('/invoices', {
        templateUrl: 'views/invoices.view.html',
        controller: 'InvoicesCtrl'
     })
     .otherwise({
        redirectTo: '/dashboard'
     });
}]);

