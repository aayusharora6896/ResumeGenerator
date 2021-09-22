const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
var ObjectId = require('mongodb').ObjectID;
var mongoose = require("mongoose");

// Load input validation
// const validateRegisterInput = require("../validation/register");
// const validateLoginInput = require("../validation/login");

// Create Account
router.post("/register", (req, res) => {
  // const { errors, isValid } = validateRegisterInput(req.body);
  // Check Validation
  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      // errors = "Email already exist";
      // return res.status(400).json(errors);
      return res.status(400).json("Email already exist");
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});


// post Login
router.post("/login", (req, res) => {
  // const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  // if (!isValid) {
  //   return res.status(400).json(errors);
  // }

  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email }).then((user) => {
    //Check for user
    if (!user) {
      // errors = "User not found";
      // return res.status(404).json(errors);
      return res.status(404).json("User not found");
    }
    //User Matched

    //Check Password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        //Password Matched
        // Payload for jwt sign
        const payload = { user: user.id, name: user.username };

        // Sign Token
        jwt.sign(
          payload,
          process.env.KEY,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res.status(400).json("Password Incorrect");
      }
    });
  });
});

router.get(
  "/:id", function(req, res){
          User.aggregate([{
             $project: {
              _id: 1,
              username: 1,
              email: 1,
            } }, { $lookup: {
              from: 'profiles',
              localField: '_id',
              foreignField: 'user',
              as: 'Profile'
            } }, { $unwind:{
              path: '$Profile',
            } }, { $lookup: {
              from: 'contactdetails',
              localField: '_id',
              foreignField: 'user',
              as: 'Contact Details'
            } }, { $unwind: {
              path: '$Contact Details',
            } }, { $lookup: {
              from: 'educations',
              localField: '_id',
              foreignField: 'user',
              as: 'Education'
            } }, { $lookup: {
              from: 'projects',
              localField: '_id',
              foreignField: 'user',
              as: 'Projects'
            } }, { $lookup: {
              from: 'experiences',
              localField: '_id',
              foreignField: 'user',
              as: 'Experiences'
            } }, { $lookup: {
              from: 'skills',
              localField: '_id',
              foreignField: 'user',
              as: 'Skills'
            } }, { $lookup: {
              from: 'achievements',
              localField: '_id',
              foreignField: 'user',
              as: 'Achievements'
            } }, 
            { $match: {

              _id: ObjectId(req.params.id),
            } },  
        ],function(err, foundUser){
          if(err){
            res.json({"sucess": "false", "error": err});
          }else{
            return res.json(foundUser);
          }
        }
  );
});

module.exports = router;