var mongoose = require("mongoose");

var ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    first_name: String,
    last_name: String,
});


module.exports = mongoose.model("Profile", ProfileSchema);
