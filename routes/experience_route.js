var express = require("express");
var router = express.Router();
var passport = require("passport");
var moment = require("moment");
var Experience = require("../models/experience");
var User = require("../models/user");

router.post("/user/:user_id/experience", function(req, res){
  User.findOne({"_id": req.params.user_id}).populate("user", 'email username').exec(function(err, foundUser){
    if(err){
      res.json({"sucess": "false", "error": err});
    }else{
    // var user = req.user.id;
    // var user = req.body.user;
    var job_position = req.body.job_position;
    var company = req.body.company;
    var location = req.body.location;
    var start_date = req.body.start_date;
    start_date = moment(new Date(start_date)).format('MMMM YYYY');
    var end_date = req.body.end_date;
    end_date = moment(new Date(end_date)).format('MMMM YYYY');
    var primary_work_breif = req.body.primary_work_breif;
    var impact1 = req.body.impact1;
    var impact2 = req.body.impact2;
    var impact3 = req.body.impact3;
    var impact4 = req.body.impact4;
   
    var newExperience = {
        user: foundUser._id,
        job_position: job_position,
        company: company,
        location: location,
        start_date: start_date,
        end_date: end_date,
        primary_work_breif: primary_work_breif,
        impact1: impact1,
        impact2: impact2,
        impact3: impact3,
        impact4: impact4,
    }
    Experience.create(newExperience, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.json(newlyCreated);
        }
    });
  }
});
});

router.get(
    "/user/:user_id/experiences", function(req, res){
      Experience.find({"user": req.params.user_id}).populate("user", 'email username').exec(function(err, foundExperience){
        if(err){
          res.json({"sucess": "false", "error": err});
        }else{
          res.json(foundExperience);
        }
      })
    });

  // Update the experience
    router.patch("/user/:user_id/experiences/:id", function(req, res){
      //find and update the correct experience
      // var data
        Experience.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, updatedExperiences){
          if(err){
            res.json(err);
          }else{
            res.json(updatedExperiences);
          }
      });
  });

  // Delete the experience
  router.delete("/user/:user_id/experience/:id", function(req, res){
    Experience.findByIdAndRemove(req.params.id, function(err){
        if(err){
            return res.json(err);
        }else{
            return res.json("Deleted");
        }
    });
  });
  
module.exports = router;
