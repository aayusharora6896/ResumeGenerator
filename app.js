const express = require("express"),
  // bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  dotenv = require("dotenv"),
  morgan = require("morgan"),
  passport = require("passport"),
  flash = require("connect-flash"),
  LocalStrategy = require("passport-local"),
  User = require("./models/user");

var app = express();
dotenv.config();

//MONGOOSE CONFIGURATION
mongoose.connect(
  process.env.DATABASE,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to the database");
    }
  }
);

const conn = mongoose.connection;
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(flash());

app.set("view engine", "ejs");

// PASSPORT CONFIGURATION
app.use(
  require("express-session")({
    secret: "You better start your vocab practice Patrice!!!",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

//Requring Routes
var userRoute = require("./routes/user_route");
app.use("/", userRoute);
var profileRoute = require("./routes/profile_route");
app.use("/profile", profileRoute);

// Port number decelaration
app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port 3000");
  }
});
