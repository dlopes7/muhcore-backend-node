var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

var RealmSchema = new mongoose.Schema({
	name: {
		type: String,
		index: {unique: true},		
	}
});

RealmSchema.plugin(findOrCreate);

var Realm = mongoose.model('Realm', RealmSchema);

module.exports = {
	Realm: Realm
}