var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Guild = require('../models/guild').Guild;

router.get('/', function(req, res, next){
	Guild.find(function(err, guilds){
		if (err) return next(err);
		
		res.json(guilds)
	});
});

module.exports = router;