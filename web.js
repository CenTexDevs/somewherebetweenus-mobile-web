var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.post('/joingroup', function(req, res) {
    res.write('in joingroup handler');
	res.end();
});

app.use(express.static(__dirname + '/dist'));
app.listen(port);
console.log('Listening on port 3000');
