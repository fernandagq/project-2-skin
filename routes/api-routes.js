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

  //api route for searching for a product.
  app.get("/api/product/:product", (req, res) => {
    const product = req.params.product;
    const parsedproduct = product.replace(/%20/g, " ");
    console.log(parsedproduct);
    db.CaliProducts.findAll({ where: { ProductName: parsedproduct } }).then(
      data => {
        console.log(data);
        res.json(data);
      }
    );
  });

  app.get("/api/ingredient/:ingredient", (req, res) => {
    const ingredient = req.params.ingredient;
    db.CaliProducts.findAll({ where: { ChemicalName: ingredient } }).then(
      data => res.json(data)
    );
  });

  app.get("/api/ingredientrate/:ingredient", (req, res) => {
    const ingredient = req.params.ingredient;
    db.IngredientRatings.findAll({ where: { ChemicalName: ingredient } }).then(
      data => res.json(data)
    );
  });

  app.get("/api/ingredientimg/:ingredient", (req, res) => {
    const ingredient = req.params.ingredient;
    
  })
};
