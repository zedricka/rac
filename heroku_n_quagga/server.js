var express = require('express'),
	path = require('path'),
	app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static('public'));

app.listen(app.get('port'), function (){
	console.log('The server is running on http://localhost:' + app.get('port'));
});