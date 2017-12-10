const express = require("express"),
      ejs     = require("ejs");
      app     = express();

const homeRoutes      = require("./routes/home"),
      blogRoutes      = require("./routes/blog"),
      projectsRoutes  = require("./routes/projects");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(homeRoutes);
app.use(blogRoutes);
app.use(projectsRoutes);

// SERVER
app.listen(3000, () => console.log("Server is up"));