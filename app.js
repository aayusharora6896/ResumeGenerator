const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const dotenv = require("dotenv");

//use Routes
const userRoutes = require("./routes/user_route");
const profileRoutes = require("./routes/profile_route");
const contactRoutes = require("./routes/contact_details_route");
const educationRoutes = require("./routes/education_route");
const achievementRoutes = require("./routes/achievement_route");
const experienceRoutes = require("./routes/experience_route");
const projectRoutes = require("./routes/projects_route");
const skillsRoutes = require("./routes/skills_route");
const publicationsRoutes = require("./routes/publication_route");

// const print = require("./generate-endpoints");
const app = express();
const cors = require("cors");

//Body parser middlware
app.use(bodyParser.urlencoded({ urlencoded: false }));
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

//MONGOOSE CONFIGURATION
mongoose.connect(
  process.env.DATABASE,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
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
//Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

// api dump
app.use("/api/user", userRoutes);
app.use("/api", profileRoutes);
app.use("/api", contactRoutes);
app.use("/api", educationRoutes);
app.use("/api", experienceRoutes);
app.use("/api", achievementRoutes);
app.use("/api", projectRoutes);
app.use("/api", skillsRoutes);
app.use("/api", publicationsRoutes);
// app.use("/api", visibilityRoutes);

// check forms-mongoose to create forms from mongoose schema
// https://github.com/aluzed/react-mongoose-form-maker
// Generating Endpoints
// app._router.stack.forEach(print.bind(null, []));

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server is running on ${port}`)
);