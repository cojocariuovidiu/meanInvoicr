var Invoice = require('../models/invoice');

exports.getInvoices = function(callback) {
   Invoice.find({}, callback);
};
