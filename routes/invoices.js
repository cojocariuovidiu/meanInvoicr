var express = require('express');
var router = express.Router();
var Invoice = require('../controllers/invoices.controller');

/* GET invoices listing. */
router.get('/', function(req, res) {
  Invoice.getInvoices(function(err, invoices) {
    if (err) {
      return console.error(err);
    }
    res.json(invoices);
    });
});

/* GET a single invoice */
router.get('/:id', function(req, res) {
  Invoice.getInvoiceById(req.params.id, function(err, invoice) {
   console.log('Inside callback: After query...');
    if (err) {
      return console.error(err);
    }
    res.json(invoice);
    });
});

/* GET customer invoices */
router.get('/customer/:id', function(req, res) {
  console.log('Receiving the request...');
  Invoice.getInvoicesByCustomerId(req.params.id, function(err, invoices) {
    if (err) {
      return console.error(err);
    }
    res.json(invoices);
    });
});

/* POST a single invoice */
router.post('/', function(req, res) {
  Invoice.createInvoice(req.body, function(err, invoice) {
    if (err) {
      return console.error(err);
    }
    res.json(invoice);
    });
});

/* PUT a single invoice */
router.put('/:id', function(req, res) {
  Invoice.updateInvoice(req.params.id, req.body, function(err, invoice) {
    if (err) {
      return console.error(err);
    }
    res.json(invoice);
    });
});

/* DELETE a single invoice */
router.delete('/:id', function(req, res) {
  Invoice.deleteInvoiceById(req.params.id, function(err, invoice) {
    if (err) {
      return console.error(err);
    }
    res.json(invoice);
    });
});


module.exports = router;
