var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var mongoUri = 'mongodb://localhost/invoicr';
var seed = true;

// Clean db
mongoose.connect(mongoUri, {}, function(err) {
  if (err) {
    console.log(err);
  } else {
    // Clean database
    var db = mongoose.connection.db.dropDatabase(function(err) {
      if (err) {
        console.log('Connected to ' + mongoUri);
      } else {
        console.log('Cleaned: ' + mongoUri);
      }

      // Seed database
      if (seed) { require('./seed.js'); }

    });

  }
});


var customers = require('./routes/customers');
var invoices = require('./routes/invoices');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.send('Use /api/customers or /api/invoices');
});
app.use('/api/customers', customers);
app.use('/api/invoices', invoices);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
