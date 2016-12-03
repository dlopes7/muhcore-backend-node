
var mongoose = require('mongoose');
var Guild = require('../models/guild').Guild;

var config = require('../config');

mongoose.connect('mongodb://localhost/BnetBackend');


const blizzard = require('blizzard.js').initialize({ apikey: config.bnet.secret });

blizzard.wow.guild(['members'], { origin: 'us', realm: 'azralon', name: 'BURN'})
	.then(response => {
		console.log(response.data);
		var guild = new Guild({
			name: response.data['name'],
			achievements: response.data['achievementPoints']
			});
			
		console.log(guild);
			
		guild.save(function(err, guild){

			if (err) {
				console.log('Error: ' + err);
				process.exit(1);
				}
			console.log('Saved! ' + guild.name);
			process.exit(0);
			
		});
	
	});
	


