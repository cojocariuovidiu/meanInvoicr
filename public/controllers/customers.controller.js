angular.module('invoicr').controller('CustomersCtrl', ['$scope', '$rootScope', '$http', '$location', '$routeParams', '$window', function($scope, $rootScope, $http, $location, $routeParams, $window) {

   // Init customers list
   $scope.getCustomers = function() {
      $http.get('/api/customers')
      .then(function(customers) {
         $scope.customers = customers.data;
      });
   };

   // Init with requested customer
   $scope.getCustomer = function() {
      $http.get('/api/customers/' + $routeParams.id)
      .then(function(customer) {
         $scope.customer = customer.data;
      });
   };

   // Invoices per customer
   $scope.getCustomerInvoices = function() {
      $http.get('/api/invoices/customer/' + $routeParams.id)
      .then(function(invoices) {
         $scope.invoices = invoices.data;
      });
   };

   // Insert a new customer
   $scope.addCustomer = function() {
      $http.post('/api/customers/', $scope.customer)
      .then(function(customer) {
         $location.path('customers');
      })
      .catch(function(reason) {
         console.log(reason);
      });
   };

   // Update a single customer
   $scope.updateCustomer = function() {
      $http.put('/api/customers/' + $routeParams.id, $scope.customer)
      .then(function(customer) {
         $location.path('customers');
      })
      .catch(function(reason) {
         console.log(reason);
      });
   };

   // Delete a single customer
   $scope.deleteCustomer = function(customer) {
      $http.delete('/api/customers/' + customer._id)
      .then(function(customer) {
         $window.location.reload();
      })
      .catch(function(reason) {
         console.log(reason);
      });
   };

   // Delete a single invoice
   $rootScope.deleteInvoice = function(invoice) {
      $http.delete('/api/invoices/' + invoice._id)
      .then(function(invoice) {
         $window.location.reload();
      })
      .catch(function(reason) {
         console.log(reason);
      });
   };

}]);
