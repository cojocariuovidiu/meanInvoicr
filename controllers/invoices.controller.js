var Invoice = require('../models/invoice');

exports.getInvoices = function(callback) {
   Invoice.find({}).populate('customer').exec(callback);
};

/* GET a single invoice */
exports.getInvoiceById = function(id, callback) {
   Invoice.findById(id).populate('customer').exec(callback);
};

/* GET a list of invoices by costumer id */
exports.getInvoicesByCustomerId = function(id, callback) {
   Invoice.find({customer: id}).populate('customer').exec(callback);
};

/* POST a single invoice */
exports.createInvoice = function(invoice, callback) {
   Invoice.create(invoice, callback);
};

/* PUT a single invoice */
exports.updateInvoice = function(id, invoice, callback) {
   Invoice.findByIdAndUpdate(id, invoice, callback);
};

/* DELETE a single invoice */
exports.deleteInvoiceById = function(id, callback) {
   Invoice.findByIdAndRemove(id, callback);
};

