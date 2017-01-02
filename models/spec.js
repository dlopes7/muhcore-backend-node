var mongoose = require('mongoose')
var findOrCreate = require('mongoose-findorcreate');

var ObjectId = mongoose.Schema.Types.ObjectId;

var SpecSchema = new mongoose.Schema({
	name: {
		type: String,
		index: true,
	},
	role: {
		type: String,
		enum: ['DPS', 'HEALING', 'TANK'],
		
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

SpecSchema.plugin(findOrCreate);

var Spec = mongoose.model('Spec', SpecSchema);

module.exports = {
	Spec: Spec
}