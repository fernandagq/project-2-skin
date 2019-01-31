var db = require("../models");

module.exports = function(app){
  app.get("/", function (req, res ){
    db.Products.findAll({}).then(function(dbProducts){
      console.log(req.body)
      // console.log(dbProducts[0].name)
      // res.json(dbProducts)
      res.render("index", {Products:dbProducts})
    })
  })
  app.get("/api/products/:name", function(req, res){

    db.Products.findOne({
      where:{
        name: req.params.name
      }
    }).then(function(dbProducts){
      res.json(dbProducts)
      // res.render("index", {Products:dbProducts})
    }); 

  });
  app.post("/api/products", function(req, res) {
    console.log(req.body);
    db.Products.create({
      name: req.body.name,
      day: req.body.day
    }).then (function (dbProducts){
      res.json(dbProducts)
      // res.render("index", {Products:dbProducts})

    });
   
  });

  app.put("/api/products/:id", function(req, res) {
    db.Products.update({
      name: req.body.name,
      day: req.body.day

    },
    {
      where: {
        id: req.body.id
      }
    }).then(function(dbProducts){
      res.json(dbProducts)
      // res.render("index", {Products:dbProducts})

    });
   
  });

  app.delete("/api/products/:id", function(req, res) {
   db.Products.destroy({
     where:{
       id:req.params.id
     }
   }).then(function(dbProducts){
     res.json(dbProducts)
    // res.render("index", {Products:dbProducts})

   });
  });
};
