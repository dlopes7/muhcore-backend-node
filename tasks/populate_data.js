
var mongoose = require('mongoose');
var Guild = require('../models/guild').Guild;
var Realm = require('../models/realm').Realm;

var config = require('../config');

mongoose.connect('mongodb://localhost/BnetBackend');


const blizzard = require('blizzard.js').initialize({ apikey: config.bnet.secret });


var realm_data ={
	name: 'Azralon'
};

Realm.findOrCreate(realm_data, function(err, realm, created){
			if (err) {
				console.log('Error: ' + err);
				}
			if (created){
				console.log('Realm Saved! ' + realm.name);
			}else{
				console.log('Realm already exists! ' + realm.name);
			}
			
			blizzard.wow.guild(['members'], { origin: 'us', realm: realm.name, name: 'Overcoming'})
			.then(response => {
				//console.log(response.data);
				var guild_data = {
					name: response.data['name'],
					_realm : realm._id,
					id: response.data['name'] + '@' + realm.name
					}

				Guild.findOrCreate(guild_data, function(err, guild, created){
				
					if (err) {
						console.log('Error: ' + err);
						process.exit(1);
						}
					if (created){
						console.log('Guild Saved! ' + guild.name);
					}else{
						console.log('Guild already exists! ' + guild.name);
					}	
		
					process.exit(0);
			
		});
	
	});

			
			
		});





