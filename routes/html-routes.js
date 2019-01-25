/* ____    ______________ ___       ______
   `MM'    `MM'MMMMMMMMMM `MMb     dMM`MM'
    MM      MM /   MM   \  MMM.   ,PMM MM
    MM      MM     MM      M`Mb   d'MM MM
    MM      MM     MM      M YM. ,P MM MM
    MMMMMMMMMM     MM      M `Mb d' MM MM
    MM      MM     MM      M  YM.P  MM MM
    MM      MM     MM      M  `Mb'  MM MM
    MM      MM     MM      M   YP   MM MM
    MM      MM     MM      M   `'   MM MM    _
   _MM_    _MM_   _MM_    _M_      _MM_MMMMMMM
*/
const db = require("../models");

module.exports = app => {
  //this is the get request for the home page. It currently gets all rows from the database and uses handlebars to render the data in the view
  app.get("/", (req, res) => {
    db.Exampletable.findAll({}).then(data => {
      res.render("index", { data: data });
    });
  });
};
