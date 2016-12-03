
var mongoose = require('mongoose');
var Guild = require('../models/guild').Guild;

mongoose.connect('mongodb://localhost/BnetBackend');


const blizzard = require('blizzard.js').initialize({ apikey: 'nm3jrgp8avwjpqnptby38z763t9afyes' });

//blizzard.wow.character(['profile'], { origin: 'us', realm: 'amanthul', name: 'charni' })
//  .then(response => {
//   console.log(response.data);
//  });
  
 
blizzard.wow.guild(['members'], { origin: 'us', realm: 'azralon', name: 'Defiant'})
	.then(response => {
		console.log(response.data);
		var guild = new Guild({
			name: response.data['name'],
			achievements: response.data['achievementPoints']
			});
			
		console.log(guild);
			
		guild.save(function(err){

			if (err) {
				console.log('Error: ' + err);
				process.exit(1);
				}
			console.log('Saved! ' + guild.name);
			process.exit(0);
			
		});
	
	});
	


