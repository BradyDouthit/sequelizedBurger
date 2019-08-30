let burger = require('../models/burger');
let db = require("../models")

module.exports = function (app) {
  //handlebars routes
  app.get('/', function (req, res) {
    db.burger.create({
      burger_name: "classic cheeseburger"
    });
    db.burger.create({
      burger_name: "Bacon cheeseburger"
    })
    db.burger.findAll({})
      .then(function (data) {

        for (var i = 0; i < data.length; i++) {
          var burgerName = data[i].burger_name
          console.log(burgerName)
        };

        res.render("index", {
          burgers: burgerName
        });
      })
  });



  //api routes
  app.get('/api/burgers', function (req, res) {
    db.burger.findAll({})
      .then(function (dbBurger) {
        //console.log(dbBurger)
        res.json(dbBurger)
      });
  });

  app.post('/api/burgers', function (req, res) {
    db.burger.create(req.body).then(function (dbBurger) {
      // console.log(req.body)
      // console.log(req.params)
      res.json(dbBurger)
    });
  });

};