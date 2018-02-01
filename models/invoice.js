var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InvoiceSchema = new Schema({
   customer: {
      type: Schema.Types.ObjectId,
      ref: 'Customer'
   },
   service: {
      type: String,
      required: true
   },
   price: String,
   due: String,
   status: String,
   createdAt: {
      type: Date,
      default: Date.now
   }
});

var Invoice = module.exports = mongoose.model('Invoice', InvoiceSchema);
