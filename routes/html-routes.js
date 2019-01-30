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
var path = require('path');
var isAuthenticated = require('../config/middleware/isAuthenticated.js');

// module.exports = app => {
//   //this is the get request for the home page. It currently gets all rows from the database and uses handlebars to render the data in the view
//   app.get("/", (req, res) => {
//     db.Exampletable.findAll({}).then(data => {
//       res.render("index", { data: data });
//     });
//   });
// };

module.exports = function(app){
  app.get('/', function (req, res){
      if(req.user){
          res.redirect('/members');
      }
      
      res.render('signup');
  });

  app.get('/login', function(req, res){
      if(req.user){
          res.redirect('/members');
      }
      res.render("/login");
  });

  app.get('/members', isAuthenticated, function (req, res){
      res.render('/members');
  });

  app.get('/logout', function(req, res){
      req.logout();
          res.redirect('/');
  });
};

