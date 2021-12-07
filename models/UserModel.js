var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var UserSchema = new Schema({
	'fullName' : { type: String, required: true },
	'phone' : { type: String, required: true },
	'role': { type: String, default: 'user', enum: ['user', 'admin']}
}, {
	timestamps: true,
	toJSON: {
		virtuals: true,
	},
	toObject: {
		virtuals: true,
	},
});

module.exports = mongoose.model('User', UserSchema);
