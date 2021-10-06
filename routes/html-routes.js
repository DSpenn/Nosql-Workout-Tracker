const path = require("path");
const route = require("express").Router();

route.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"), err => {
      if (err) throw err;
  });
});

route.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"), err => {
      if (err) throw err;
  });
});





module.exports = route;