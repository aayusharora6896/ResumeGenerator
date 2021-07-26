var express = require("express");
var router = express.Router();
var passport = require("passport");
var Profile = require("../models/profile");

router.post("/", function(req, res){
    var user = req.body.user;
    // var user = req.user.id;
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
   
    var newProfile = {
        user: user,
        first_name: first_name,
        last_name: last_name,
    }
    Profile.create(newProfile, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.json(newlyCreated);
        }
    });
});


module.exports = router;
