var express = require('express');
var bodyParser = require('body-parser');
var CONFIG = require('./config/config.json');
var stripe = require('stripe')(CONFIG.SECRET_KEY);
var path = require('path');
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.post('/charge', function(req, res) {
  var stripeToken = req.body.stripeToken;
  var amount = 1000;

  stripe.charges.create(
    {
      card: stripeToken,
      currency: 'usd',
      amount: amount
    },
    function(err, charge) {
      if (err) {
        res.send(500, err);
      } else {
        res.send(204);
      }
    }
  );
});

app.listen(PORT, function() {
  console.log(`Server listening on ${PORT}`);
});

