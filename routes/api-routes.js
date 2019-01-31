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
    db.CaliProducts.findAll({ where: { ProductName: parsedproduct } }).then(
      data => {
        res.render("index", {products: data});
      }
    );
  });

  app.get("/api/ingredient/:ingredient", (req, res) => {
    const ingredient = req.params.ingredient;
    const parsedingredient = ingredient.replace(/%20/g, " ");
    db.CaliProducts.findAll({ where: { ChemicalName: parsedingredient } }).then(
      data => res.json(data)
    )
  });

  app.get("/api/ingredientrate/:ingredient", (req, res) => {
    const ingredient = req.params.ingredient;
    const parsedingredient = ingredient.replace(/%20/g, " ");
    db.IngredientRatings.findAll({ where: { ChemicalName: parsedingredient } }).then(
      data => res.json(data)
    );
  });
};
