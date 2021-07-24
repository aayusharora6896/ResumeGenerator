var express = require("express");
var router = express.Router();
var passport = require("passport");
var Skills = require("../models/skills");

router.post("/", isLoggedIn, function(req, res){
    var user ={
        id: req.user._id,
    }
    var skills_title = req.body.skills_title;
    var skills = req.body.skills;
   
    var newSkills = {
        user: user,
        skills_title: skills_title,
        description: skills,
    }
    Skills.create(newSkills, function(err, newlyCreated){
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
