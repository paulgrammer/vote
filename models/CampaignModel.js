var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var CampaignSchema = new Schema({
	'candidates' : [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
	'name' :  { type: String, required: true },
	'voters': [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
	'startsAt' : { type: Date, required: true },
	'endsAt' : { type: Date, required: true },
	'createdBy': { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { 
	timestamps: true,
	toJSON: {
		virtuals: true,
	},
	toObject: {
		virtuals: true,
	},
});

module.exports = mongoose.model('Campaign', CampaignSchema);
