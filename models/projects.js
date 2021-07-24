var mongoose = require("mongoose");

var ProjectSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    project_title: String,
    skills_used: String,
    link: String,
    description: [String],
});


module.exports = mongoose.model("Project", ProjectSchema);
