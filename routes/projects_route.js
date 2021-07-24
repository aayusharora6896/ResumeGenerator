var express = require("express");
var router = express.Router();
var passport = require("passport");
var Projects = require("../models/project");

router.post("/", isLoggedIn, function(req, res){
    var user ={
        id: req.user._id,
    }
    var project_title = req.body.project_title;
    var skills_used = req.body.skills_used;
    var description = req.body.description;
    var link = req.body.link;

    var newProject = {
        user: user,
        project_title: project_title,
        skills_used = skills_used,
        description = description,
    }

    Projects.create(newProject, function(err, newlyCreated){
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
