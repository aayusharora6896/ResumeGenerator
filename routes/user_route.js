var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

// Index
router.get("/", (req, res) => {
  res.render("landing");
});

router.get("/secret", isLoggedIn, (req, res) => {
  res.render("secret");
});

// Register
// show register form
router.get("/register", function (req, res) {
  res.render("../views/register");
});

//handle sign up logic
router.post("/register", function (req, res) {
  var newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password, function (err, user) {
    if (err) {
      // req.flash("error", err.message);
      // return res.render("../views/register");
      res.json({"error": err});
    }
    passport.authenticate("local")(req, res, function () {
      res.json({"success": true})
      // req.flash("success", "Successfully Logged in");
      // res.redirect("/secret");
    });
  });
});

// Sign In
//show signin form
router.get("/login", function (req, res) {
  res.render("login");
});

//handling login logic
router.post(
  "/login",
  'basic', { session: false }),
  function(req, res) {
    res.json({ id: req.user.id, username: req.user.username });
  }
  // passport.authenticate("local", {
  //   // successRedirect: "/secret",
  //   // failureRedirect: "/login",
  //   // failureFlash: true,
  //   // successFlash: "Logged In Successfully!",
  // }),
  // function (req, res) {}
);

// Logout
router.get("/logout", function (req, res) {
  req.logout();
  req.flash("success", "Logged out the user!!");
  res.redirect("/");
});

// Middleware
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error", "Please Login First");
  res.redirect("/login");
}

module.exports = router;
