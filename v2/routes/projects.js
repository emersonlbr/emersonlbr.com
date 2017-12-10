const express = require("express"),
      router  = express.Router();

router.get("/projects", (req, res) => {
  res.render("projects");
});

module.exports = router;
