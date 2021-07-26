var express = require("express");
var router = express.Router();
var passport = require("passport");
var Skills = require("../models/skills");

router.post("/skills", function(req, res){
    var user = req.body.user;
    // var user = req.user.id;
    var skills_title = req.body.skills_title;
    var skills = req.body.skills;
    skills = skills.split(",");

    var newSkills = {
        user: user,
        skills_title: skills_title,
        skills: skills,
    }
    Skills.create(newSkills, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.json(newlyCreated);
        }
    });
});

router.get(
    "/user/:user_id/skills", function(req, res){
      Skills.find({"user": req.params.user_id}).populate("user", 'email username').exec(function(err, foundSkills){
        if(err){
          res.json({"sucess": "false", "error": err});
        }else{
          res.json(foundSkills);
        }
      })
    });
  

module.exports = router;
