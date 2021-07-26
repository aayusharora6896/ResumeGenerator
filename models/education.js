var mongoose = require("mongoose");

var EducationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    degree_name: String,
    domain_name: String,
    school_name: String,
    university_name: String,
    university_city: String,
    university_state: String,
    university_country: String,
    year_begin: String,
    year_end: String
});


module.exports = mongoose.model("Education", EducationSchema);
