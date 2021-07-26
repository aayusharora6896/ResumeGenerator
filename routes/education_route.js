var express = require("express");
var router = express.Router();
var passport = require("passport");
var Education = require("../models/education");

router.post("/education", function(req, res){
    var user = req.body.user;
    // var user = req.user.id;
    var degree_name = req.body.degree_name;
    var domain_name = req.body.domain_name;
    var school_name = req.body.school_name;
    var university_name = req.body.university_name;
    var university_city = req.body.university_city;
    var university_state = req.body.university_state;
    var university_country = req.body.university_country;
    var year_begin = req.body.year_begin;
    var year_end = req.body.year_end;
   
    var newEducation = {
        user: user,
        degree_name: degree_name,
        domain_name: domain_name,
        school_name: school_name,
        university_name: university_name,
        university_city: university_city,
        university_state: university_state,
        university_country: university_country,
        year_begin: year_begin,
        year_end: year_end,
    }
    Education.create(newEducation, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.json(newlyCreated);
        }
    });
});

router.get(
    "/user/:user_id/education", function(req, res){
      Education.find({"user": req.params.user_id}).populate("user", 'email username').exec(function(err, foundEducation){
        if(err){
          res.json({"sucess": "false", "error": err});
        }else{
          res.json(foundEducation);
        }
      })
    });

module.exports = router;
