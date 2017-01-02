var mongoose = require('mongoose')
var findOrCreate = require('mongoose-findorcreate');

var ObjectId = mongoose.Schema.Types.ObjectId;

var CharacterSchema = new mongoose.Schema({
	name: {
		type: String,
		index: true,
	},
	
	id : {
		type: String,
		index: {unique: true}
	},
	
	level: {
		type: Number,
	},
	
	_class: {
		 type: ObjectId, 
		 ref: 'Class' 
		},
		
	_realm : {
		 type: ObjectId, 
		 ref: 'Realm' 
		},
		
	_spec : {
		 type: ObjectId, 
		 ref: 'Spec' 
		},
		
	_guild : {
		 type: ObjectId, 
		 ref: 'Guild' 
		},
		
});

CharacterSchema.plugin(findOrCreate);

var Character = mongoose.model('Character', CharacterSchema);

module.exports = {
	Character: Character
}