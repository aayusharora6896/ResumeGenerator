var mongoose = require("mongoose");

var SkillsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    skills_title: String,
    skillSet: [String],
});


module.exports = mongoose.model("Skills", SkillsSchema);
