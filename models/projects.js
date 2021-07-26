var mongoose = require("mongoose");

var ProjectSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    project_title: String,
    skills_used: [String],
    description1: String,
    description2: String,
    description3: String,
});


module.exports = mongoose.model("Project", ProjectSchema);
