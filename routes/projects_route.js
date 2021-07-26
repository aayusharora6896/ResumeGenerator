var express = require("express");
var router = express.Router();
var passport = require("passport");
var Projects = require("../models/projects");

router.post("/project", function(req, res){
    var user = req.body.user;
    // var user = req.user.id;
    var project_title = req.body.project_title;
    var skills_used = req.body.skills_used;
    skills_used = skills_used.split(",");
    var description1 = req.body.description1;
    var description2 = req.body.description2;
    var description3 = req.body.description3;

    var newProject = {
        user: user,
        project_title: project_title,
        skills_used: skills_used,
        description1: description1,
        description2: description2,
        description3:  description3,
    }

    Projects.create(newProject, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.json(newlyCreated);
        }
    });
});


router.get(
    "/user/:user_id/projects", function(req, res){
      Projects.find({"user": req.params.user_id}).populate("user", 'email username').exec(function(err, foundProjects){
        if(err){
          res.json({"sucess": "false", "error": err});
        }else{
          res.json(foundProjects);
        }
      })
    });


module.exports = router;
