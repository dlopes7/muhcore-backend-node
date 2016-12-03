var mongoose = require('mongoose')

var GuildSchema = new mongoose.Schema({
	name: {
		type: String,
		index: true,
	},
	achievements: {
		type: Number,
	}
});

var Guild = mongoose.model('Guild', GuildSchema);

module.exports = {
	Guild: Guild
}