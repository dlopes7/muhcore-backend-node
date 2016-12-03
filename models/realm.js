var mongoose = require('mongoose')

var RealmSchema = new mongoose.Schema({
	name: {
		type: String,
		index: true,
	},
	guilds : [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Guild'
	}]

});

var Realm = mongoose.model('Realm', RealmSchema);

module.exports = {
	Realm: Realm
}