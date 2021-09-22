var express = require("express");
var router = express.Router();
var passport = require("passport");
var Visibility = require("../models/visibility");

// There can be only one profile so check for that and dont add this condition in routes which can be more than one. 
// Profile and contact details
// Also maybe write FindOne in get if needed
router.post("/visibility", function(req, res){
    var user = req.body.user;
    // var user = req.user.id;
    var profile = req.body.profile;
    var contact = req.body.contact;
    var education = req.body.education;
    var skills = req.body.skills;
    var experiences = req.body.experiences;
    var projects = req.body.projects;
    var achievements = req.body.achievements;

    var newVisibility = {
        user: user,
        profile: profile,
        contact: contact,
        education: education,
        skills: skills,
        experiences: experiences,
        projects: projects,
        achievements: achievements,
    }
    Visibility.create(newVisibility, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.json(newlyCreated);
        }
    });
});

router.get(
    "/user/:user_id/visibility", function(req, res){
      Visibility.find({"user": req.params.user_id}).populate("user", 'email username').exec(function(err, foundVisibility){
        if(err){
          res.json({"sucess": "false", "error": err});
        }else{
          res.json(foundVisibility);
        }
      })
    });

//     router.put("/profile", function(req, res){
//       //find and update the correct profile
//       // var data
//       Profile.findOneAndUpdate({"user": req.body.user}, function (err, updatedProfile){
//           if(err){
//             res.json({"sucess": "false", "error": err});
//           }else{
//               res.json(updatedProfile);``
//           }
//       });
//   });


module.exports = router;
