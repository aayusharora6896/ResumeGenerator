var express = require("express");
var router = express.Router();
var passport = require("passport");
var ContactDetails = require("../models/contact_details");

router.post("/", isLoggedIn, function(req, res){
    var user ={
        id: req.user._id,
    }
    var address1 = req.body.address1;
    var address2 = req.body.address2;
    var address_city = req.body.address_city;
    var address_state = req.body.address_state;
    var address_country = req.body.address_country;
    var pincode = req.body.pincode;
    var phone_number = req.body.phone_number;
    var mail_id = req.body.mail_id;
    var web_portfolio = req.body.web_portfolio;
    var github = req.body.github;
    var linkedIn = req.body.linkedIn;
    
    var newContactDetails = {
        user: user,
        address1: address1,
        address2: address2,
        address_city: address_city,
        address_state: address_state,
        address_country: address_country,
        pincode: pincode,
        phone_number: phone_number,
        mail_id: mail_id,
        web_portfolio: web_portfolio,
        github: github,
        linkedIn: linkedIn,
    }
    ContactDetails.create(newContactDetails, function(err, newlyCreated){
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
