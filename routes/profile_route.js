var express = require("express");
var router = express.Router();
var passport = require("passport");
var Profile = require("../models/profile");

// There can be only one profile so check for that and dont add this condition in routes which can be more than one. 
// Profile and contact details
// Also maybe write FindOne in get if needed
router.post("/profile", function(req, res){
    var user = req.body.user;
    // var user = req.user.id;
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
   
    var newProfile = {
        user: user,
        first_name: first_name,
        last_name: last_name,
    }
    Profile.create(newProfile, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.json(newlyCreated);
        }
    });
});

router.get(
    "/user/:user_id/profile", function(req, res){
      Profile.find({"user": req.params.user_id}).populate("user", 'email username').exec(function(err, foundProfile){
        if(err){
          res.json({"sucess": "false", "error": err});
        }else{
          res.json(foundProfile);
        }
      })
    });



module.exports = router;
