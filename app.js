// console.log('Sanity Check');

// importing our dependencies
const express = require('express');
// used to parse body response
const bodyParser = require('body-parser');
const path = require('path');
// create express app
const app = express(); 
// environment port or 3000
const PORT = process.env.PORT || 8080;
// bring in secret key
const CONFIG = require('./config/config.json');
// stripe dependency
const stripe = require('stripe')(CONFIG.SECRET_KEY);


// routes to main page

// parses response body
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/charge', function (req, res){
	var stripeToken = req.body.stripeToken;
	var amount = 1000;

	stripe.charges.create(
	{
		card: stripeToken,
		currency:'used',
		amount: amount
	},
	function(err, charge) {
		if (err) {
			res.send(500, err);
		} else {
			res.send(204);
		}
	})
});
// server listening on PORT
app.listen(PORT, function() {
	console.log(`Server running on ${PORT}`);
});