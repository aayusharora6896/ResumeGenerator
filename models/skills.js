var mongoose = require("mongoose");

var SkillsSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    skills_title: String,
    skills: [{
        name: String,
        level: Integer,
    }],
});


module.exports = mongoose.model("Skills", SkillsSchema);
