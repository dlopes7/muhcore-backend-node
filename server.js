var express = require('express');
var mongoose = require('mongoose');

var guilds = require('./routes/guild')

mongoose.connect('mongodb://localhost/BnetBackend');


var app = express();
app.use('/guilds', guilds)


app.listen(3000);
console.log('Listening on port 3000');
