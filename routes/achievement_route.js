var express = require("express");
var router = express.Router();
var passport = require("passport");
var Achievements = require("../models/achievements");

router.post("/", isLoggedIn, function(req, res){
    var user ={
        id: req.user._id,
    }
    var title = req.body.title;
    var description = req.body.description;
   
    var newAchievement = {
        user: user,
        title: title,
        description: description,
    }
    Achievements.create(newAchievement, function(err, newlyCreated){
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
