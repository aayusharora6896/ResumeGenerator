var mongoose = require("mongoose");

var ProfileSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    first_name: String,
    last_name: String,
    profile_pic: String,
});


module.exports = mongoose.model("Profile", ProfileSchema);
