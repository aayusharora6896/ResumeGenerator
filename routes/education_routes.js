var express = require("express");
var router = express.Router();
var passport = require("passport");
var Education = require("../models/education");

router.post("/", isLoggedIn, function(req, res){
    var user ={
        id: req.user._id,
    }
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
        degree_name = degree_name,
        domain_name = domain_name,
        school_name = school_name,
        university_name = university_name,
        university_city = university_city,
        university_state = university_state,
        university_country = university_country,
        year_begin = year_begin,
        year_end = year_end,
    }
    Education.create(newEducation, function(err, newlyCreated){
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
