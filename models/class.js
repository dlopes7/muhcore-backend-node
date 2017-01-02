var mongoose = require('mongoose')
var findOrCreate = require('mongoose-findorcreate');

var ObjectId = mongoose.Schema.Types.ObjectId;

var ClassSchema = new mongoose.Schema({
	name: {
		type: String,
		index: {unique: true}
	}	
});

ClassSchema.plugin(findOrCreate);

var Class = mongoose.model('Class', ClassSchema);

module.exports = {
	Class: Class
}