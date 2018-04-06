var express = require('express');
var bodyParser = require('body-parser');
var CONFIG = require('./config/config.json');
var stripe = require('stripe')(CONFIG.SECRET_KEY);
var path = require('path');
var PORT = process.env.PORT || 8080;
var app = express();
var helpers = require('./helpers/helpers');

// global variable
var barCodeData = '';

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.static('client'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.get('/charge', function(req, res) {
  barCodeData = req.query.data;
  res.sendFile(path.join(__dirname + '/client/checkout.html'));
});

app.get('/sendData', function(req, res) {
  res.send({ price: helpers._parseBarCodeData(barCodeData) });
});

app.post('/charge', function(req, res) {
  console.log(barCodeData);
  var stripeToken = req.body.stripeToken;

  stripe.charges.create(
    {
      card: stripeToken,
      currency: 'usd',
      amount: helpers._parseBarCodeData(barCodeData)
    },
    function(err, charge) {
      console.log(charge);
      if (err) {
        res.sendStatus(500, err);
      } else {
        res.redirect('/confirmation.html');
      }
    }
  );
});

app.listen(PORT, function() {
  console.log(`Server listening on ${PORT}`);
});