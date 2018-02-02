angular.module('invoicr', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
   $routeProvider
     /*----------  DASHBOARD ROUTES  ----------*/
     .when('/dashboard', {
        templateUrl: 'views/dashboard.view.html',
        controller: 'DashboardCtrl'
     })
     /*----------  CUSTOMER ROUTES  ----------*/
     .when('/customers', {
        templateUrl: 'views/customers.view.html',
        controller: 'CustomersCtrl'
     })
     .when('/customers/details/:id', {
        templateUrl: 'views/customers-details.view.html',
        controller: 'CustomersCtrl'
     })
     .when('/customers/add', {
        templateUrl: 'views/customers-add.view.html',
        controller: 'CustomersCtrl'
     })
     .when('/customers/details/:id/edit', {
        templateUrl: 'views/customers-edit.view.html',
        controller: 'CustomersCtrl'
     })
     /*----------  INVOICES ROUTES  ----------*/
     .when('/invoices', {
        templateUrl: 'views/invoices.view.html',
        controller: 'InvoicesCtrl'
     })
     .when('/invoices/details/:id', {
        templateUrl: 'views/invoices-details.view.html',
        controller: 'InvoicesCtrl'
     })
     .when('/invoices/add', {
        templateUrl: 'views/invoices-add.view.html',
        controller: 'InvoicesCtrl'
     })
     .when('/invoices/details/:id/edit', {
        templateUrl: 'views/invoices-edit.view.html',
        controller: 'InvoicesCtrl'
     })
     .otherwise({
        redirectTo: '/dashboard'
     });
}]);

