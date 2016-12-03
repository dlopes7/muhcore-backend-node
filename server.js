var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost');


var app = express();

app.get('/guilds', function(req, res){
	res.send([{name: 'guild1'}, {name: 'guild2'} ]);

});


app.listen(3000);
console.log('Listening on port 3000');
