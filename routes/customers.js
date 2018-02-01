var express = require('express');
var router = express.Router();
var Customer = require('../controllers/customers.controller');

/* GET customer listing. */
router.get('/', function(req, res) {
  Customer.getCustomers(function(err, customers) {
    if (err) {
      return console.error(err);
    }
    res.json(customers);
    });
});

module.exports = router;
