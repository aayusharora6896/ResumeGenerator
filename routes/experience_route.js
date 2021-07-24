var express = require("express");
var router = express.Router();
var passport = require("passport");
var Experience = require("../models/experience");

router.post("/", isLoggedIn, function(req, res){
    var user ={
        id: req.user._id,
    }
    var job_position = req.body.job_position;
    var company = req.body.company;
    var location = req.body.location;
    var start_date = req.body.start_date;
    var end_date = req.body.end_date;
    var primaryWorkBreif = req.body.primaryWorkBreif;
   
    var newExperience = {
        user: user,
        job_position = job_position,
        company = company,
        location = location,
        start_date = start_date,
        end_date = end_date,
        primaryWorkBreif = primaryWorkBreif,
    }
    Experience.create(newExperience, function(err, newlyCreated){
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
