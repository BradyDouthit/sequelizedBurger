let burger = require('../models/burger');
let db = require("../models")

module.exports = function (app) {
  //handlebars routes
  app.get('/', function (req, res) {
    // db.burger.create({
    //   burger_name: "classic cheeseburger"
    // });
    // db.burger.create({
    //   burger_name: "Bacon cheeseburger"
    // })
    db.burger.findAll({})
      .then(function (data) {
        var burgerArray = [];
        for (var i = 0; i < data.length; i++) {
          var id = data[i].id
          var burgerName = data[i].burger_name;
          var devoured = data[i].devoured;
          //console.log(`Devoured: ${devoured[i]}`)
          burgerArray.push(id + '. ' + burgerName);
        };
        res.render("index", {
          id: id,
          burgers: burgerName,
          burgerArray: burgerArray,
          devoured: devoured
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
    db.burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function (dbBurger) {
      console.log(req.body)
      res.json(dbBurger)
    });
  });

  app.put('/api/burgers/:id', function(req, res) {
    db.burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });
};
