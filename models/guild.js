var mongoose = require('mongoose')

var GuildSchema = new mongoose.Schema({
	name: {
		type: String,
		index: true,
	},
	members: {
		type: Number,
		
	}
});

var Guild = mongoose.model('Guild', GuildSchema);

module.exports = {
	Guild: Guild
}