
var mongoose = require('mongoose');
var Guild = require('../models/guild').Guild;
var Realm = require('../models/realm').Realm;
var Class = require('../models/class').Class;
var Spec = require('../models/spec').Spec;

var config = require('../config');

mongoose.connect('mongodb://mongodb/BnetBackend');

const Promise = require('bluebird');
const blizzard = require('blizzard.js').initialize({ apikey: config.bnet.secret });


var realm_data ={
	name: 'Azralon'
};


createRealms = function (){
	blizzard.wow.realm()
	.then(response => {
		console.log(response);
	});

	
}


//First step, retrieve or create the realm.
Realm.findOrCreate(realm_data, function(err, realm, created){
			if (err) {
				console.log('Error: ' + err);
				}
			if (created){
				console.log('Realm Saved! ' + realm.name);
			}else{
				console.log('Realm already exists! ' + realm.name);
			}
			
			//If the Realm is created or retrieved, do the same with the guild.
			blizzard.wow.guild(['members'], { origin: 'us', realm: realm.name, name: 'Defiant'})
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
					
					
					// Now for each character in the guild.
					for (var i = 0; i < response.data['members'].length; i++) { 
						var member = response.data['members'][i]['character'];
						var char_data = {
							name: member['name']
						};
						console.log(member, char_data);
						
					}
		
					process.exit(0);
			
		});
	
	});

			
			
		});





