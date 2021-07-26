var express = require("express");
var router = express.Router();
var passport = require("passport");
var Achievements = require("../models/achievement");

router.post("/achievement", function(req, res){
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

router.get(
    "/user/:user_id/achievements", function(req, res){
      Achievements.find({"user": req.params.user_id}).populate("user", 'email username').exec(function(err, foundAchievement){
        if(err){
          res.json({"sucess": "false", "error": err});
        }else{
          res.json(foundAchievement);
        }
      })
    });


module.exports = router;
