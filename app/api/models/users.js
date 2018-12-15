const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	uid: {
		type: String,
		trim: true,
		required: true
	},
	username: {
		type: String,
		trim: true,		
		required: true
	},
	email: {
		type: String,
		trim: true,
		required: true
	},
	password: {
		type: String,
		trim: true,
		required: true
	},
	role: {
		type: String,
		trim: true,
		required: true
	}
});

module.exports = mongoose.model('User', UserSchema);