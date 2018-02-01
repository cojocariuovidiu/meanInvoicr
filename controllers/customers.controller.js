var Customer = require('../models/customer');

exports.getCustomers = function(callback) {
   Customer.find({}, callback);
};
