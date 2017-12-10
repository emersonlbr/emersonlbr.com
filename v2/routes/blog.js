const express = require("express"),
      router  = express.Router();

router.get("/blog", (req, res) => {
  res.render("blog");
});

router.post("/blogs/new", (req, res) => {
  
});

router.get("/blog/:id", (req, res) => {
  
});

module.exports = router;
