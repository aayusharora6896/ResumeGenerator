var mongoose = require("mongoose");

var SkillsSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    skills_title: String,
    skills: [String],
});


module.exports = mongoose.model("Skills", SkillsSchema);