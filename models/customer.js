var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
   first_name: {
      type: String,
      required: true
   },
   last_name: {
      type: String,
      required: true
   },
   company: String,
   logo_url: String,
   email: {
      type: String,
      required: true
   },
   phone: String,
   address: {
      street: String,
      city: String,
      state: String,
      zip: String
   },
   createdAt: {
      type: Date,
      default: Date.now
   }
});

var Customer = module.exports = mongoose.model('Customer', CustomerSchema);
