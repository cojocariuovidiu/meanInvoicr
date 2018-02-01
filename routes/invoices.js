var express = require('express');
var router = express.Router();
var Invoices = require('../controllers/invoices.controller');

/* GET invoices listing. */
router.get('/', function(req, res) {
  Invoices.getInvoices(function(err, invoices) {
    if (err) {
      return console.error(err);
    }
    res.json(invoices);
    });
});

module.exports = router;
