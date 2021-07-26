var mongoose = require("mongoose");

var ExperienceSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    job_position: String,
    company: String,
    location: String,
    start_date: String,
    end_date: String,
    primary_work_breif: String,
    impact1: String,
    impact2: String,
    impact3: String,
    impact4: String,
});


module.exports = mongoose.model("Experience", ExperienceSchema);
