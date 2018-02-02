angular.module('invoicr').controller('InvoicesCtrl', ['$scope', '$rootScope', '$http', '$location', '$routeParams', '$window', function($scope, $rootScope, $http, $location, $routeParams, $window) {

   // Init invoice list
   $scope.getInvoices = function() {
      $http.get('/api/invoices')
      .then(function(invoices) {
         $scope.invoices = invoices.data;
      });
   };

   // Init with requested invoice
   $scope.getInvoice = function() {
      $http.get('/api/invoices/' + $routeParams.id)
      .then(function(invoice) {
         $scope.invoice = invoice.data;
      });
   };

   // Init customers list
   $scope.getCustomers = function() {
      $http.get('/api/customers')
      .then(function(customers) {
         $scope.customers = customers.data;
      });
   };

   // Insert a new invoice
   $scope.addInvoice = function() {
      $scope.invoice.customer = this.invoice.customer._id;
      $http.post('/api/invoices/', $scope.invoice)
      .then(function(customer) {
         $location.path('invoices');
      })
      .catch(function(reason) {
         console.log(reason);
      });
   };

   // Update a single invoice
   $scope.updateInvoice = function() {
      $http.put('/api/invoices/' + $routeParams.id, $scope.invoice)
      .then(function(invoice) {
         $location.path('invoices');
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
