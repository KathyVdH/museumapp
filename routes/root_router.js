var express = require("express");
var root = express.Router();

root.get('/', function(req, res) {
  res.render("index", {
    schilderij: req.app.get('schilderijFile').schilderij,
    categorieen: req.app.get('categorieenFile').categorieen
  });
});

module.exports = root;
