var express = require("express");
var router = express.Router();
var passport = require("passport");
var Profile = require("../models/profile");

router.post("/", isLoggedIn, function(req, res){
    var user ={
        id: req.user._id,
    }
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var profile_pic = req.body.profile_pic;
   
    var newProfile = {
        user: user,
        first_name: first_name,
        last_name: last_name,
        profile_pic: profile_pic,
    }
    Profile.create(newProfile, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.json(newlyCreated);
        }
    });
});


//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;
