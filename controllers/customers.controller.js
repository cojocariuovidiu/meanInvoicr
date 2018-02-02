var Customer = require('../models/customer');

/* GET customers listing. */
exports.getCustomers = function(callback) {
   Customer.find({}, callback);
};

/* GET a single customer */
exports.getCustomerById = function(id, callback) {
   Customer.findById(id, callback);
};

/* POST a single customer */
exports.createCustomer = function(customer, callback) {
   Customer.create(customer, callback);
};

/* PUT a single customer */
exports.updateCustomer = function(id, customer, callback) {
   Customer.findByIdAndUpdate(id, customer, callback);
};

/* DELETE a single customer */
exports.deleteCustomerById = function(id, callback) {
   Customer.findByIdAndRemove(id, callback);
};

