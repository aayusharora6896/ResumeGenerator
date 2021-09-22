var mongoose = require("mongoose");

var visibilitySchema = mongoose.Schema({
	user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
	profile: Boolean,
	contact: Boolean,
	education: Boolean,
	skills: Boolean,
	experiences: Boolean,
	projects: Boolean,
	achievements: Boolean,
});

module.exports = mongoose.model('Visibility', visibilitySchema);