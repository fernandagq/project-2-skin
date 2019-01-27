/*        _     ________  ____
          dM.    `MMMMMMMb.`MM'
         ,MMb     MM    `Mb MM
         d'YM.    MM     MM MM
        ,P `Mb    MM     MM MM
        d'  YM.   MM    .M9 MM
       ,P   `Mb   MMMMMMM9' MM
       d'    YM.  MM        MM
      ,MMMMMMMMb  MM        MM
      d'      YM. MM        MM
    _dM_     _dMM_MM_      _MM_
*/

const db = require("../models");

module.exports = app => {
  //This route I made for test purposes. It inserts 4 rows of test data into our test table.
  app.get("/api/seed", (req, res) => {
    db.Exampletable.create({
      column1: "row1, col1",
      column2: "row1, col2"
    }).then(() => {
      db.Exampletable.create({
        column1: "row2, col1",
        column2: "row2, col2"
      }).then(() => {
        db.Exampletable.create({
          column1: "row3, col1",
          column2: "row3, col2"
        }).then(() => {
          db.Exampletable.create({
            column1: "row4, col1",
            column2: "row4, col2"
          }).then(() => {
            db.Exampletable.findAll({}).then(data => {
              res.render("index", { data: data });
            });
          });
        });
      });
    });
  });

  //api route for searching for a product.
  app.get("/api/product/:product", (req, res) => {
    const product = req.params.product;
    console.log(product);
    db.CaliProducts.findAll({ where: { ProductName: product } }).then(data => {
      res.json(data);
    });
  });

  app.get("/api/ingredient/:ingredient", (req, res) => {
    const ingredient = req.params.ingredient;
    console.log(ingredient);
    db.CaliProducts.findAll({ where: { ChemicalName: ingredient } }).then(
      data => {
        res.json(data);
      }
    );
  });
  
};
