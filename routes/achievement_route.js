var express = require("express");
var router = express.Router();
var passport = require("passport");
var Achievements = require("../models/achievement");

router.post("/", function(req, res){
    var user = req.body.user;
    // var user = req.user._id;
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

module.exports = router;
