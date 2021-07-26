var express = require("express");
var router = express.Router();
var passport = require("passport");
var ContactDetails = require("../models/contact_details");

router.post("/contact", function(req, res){
    // var user = req.user.id;
    var user = req.body.user;
    var address1 = req.body.address1;
    var address2 = req.body.address2;
    var address_city = req.body.address_city;
    var address_state = req.body.address_state;
    var address_country = req.body.address_country;
    var pincode = req.body.pincode;
    var phone_number = req.body.phone_number;
    var mail_id = req.body.mail_id;
    // var mail_id = req.user.email;
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

router.get(
    "/user/:user_id/contact", function(req, res){
      ContactDetails.find({"user": req.params.user_id}).populate("user", 'email username').exec(function(err, foundContact){
        if(err){
          res.json({"sucess": "false", "error": err});
        }else{
          res.json(foundContact);
        }
      })
    });


module.exports = router;
