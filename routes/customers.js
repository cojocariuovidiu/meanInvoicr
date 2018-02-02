var express = require('express');
var router = express.Router();
var Customer = require('../controllers/customers.controller');

/* GET customers listing. */
router.get('/', function(req, res) {
  Customer.getCustomers(function(err, customers) {
    if (err) {
      return console.error(err);
    }
    res.json(customers);
    });
});

/* GET a single customer */
router.get('/:id', function(req, res) {
  Customer.getCustomerById(req.params.id, function(err, customer) {
    if (err) {
      return console.error(err);
    }
    res.json(customer);
    });
});

/* POST a single customer */
router.post('/', function(req, res) {
  Customer.createCustomer(req.body, function(err, customer) {
    if (err) {
      return console.error(err);
    }
    res.json(customer);
    });
});

/* PUT a single customer */
router.put('/:id', function(req, res) {
  Customer.updateCustomer(req.params.id, req.body, function(err, customer) {
    if (err) {
      return console.error(err);
    }
    res.json(customer);
    });
});

/* DELETE a single customer */
router.delete('/:id', function(req, res) {
  Customer.deleteCustomerById(req.params.id, function(err, customer) {
    if (err) {
      return console.error(err);
    }
    res.json(customer);
    });
});

module.exports = router;
