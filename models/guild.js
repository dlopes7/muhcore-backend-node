var mongoose = require('mongoose')
var findOrCreate = require('mongoose-findorcreate');

var ObjectId = mongoose.Schema.Types.ObjectId;

var GuildSchema = new mongoose.Schema({
	name: {
		type: String,
		index: true,
	},
	id : {
		type: String,
		index: {unique: true}
	},
	_realm : {
		 type: ObjectId, 
		 ref: 'Realm' 
		},
		
});

GuildSchema.plugin(findOrCreate);

var Guild = mongoose.model('Guild', GuildSchema);

module.exports = {
	Guild: Guild
}