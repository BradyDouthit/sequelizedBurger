let express = require('express');
let burger = require('../models/burger');


module.exports = function(app) {
app.get('/', function(req, res) {
      res.render("index")
  });
};