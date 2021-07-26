var express = require("express");
var router = express.Router();
var passport = require("passport");
var Skills = require("../models/skills");

router.post("/", function(req, res){
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

module.exports = router;
