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

// const db = require("../models");
// var passport = require('../config/passport.js');
// var path = require('path');
// var isAuthenticated = require ('../config/middleware/isAuthenticated');

// module.exports = app => {
//   //This route I made for test purposes. It inserts 4 rows of test data into our test table.
//   app.get("/api/seed", (req, res) => {
//     db.Exampletable.create({
//       column1: "row1, col1",
//       column2: "row1, col2"
//     }).then(() => {
//       db.Exampletable.create({
//         column1: "row2, col1",
//         column2: "row2, col2"
//       }).then(() => {
//         db.Exampletable.create({
//           column1: "row3, col1",
//           column2: "row3, col2"
//         }).then(() => {
//           db.Exampletable.create({
//             column1: "row4, col1",
//             column2: "row4, col2"
//           }).then(() => {
//             db.Exampletable.findAll({}).then(data => {
//               res.render("index", { data: data });
//             });
//           });
//         });
//       });
//     });
//   });

//   //api route for searching for a product.
//   app.get("/api/product/:product", (req, res) => {
//     const product = req.params.product;
//     const parsedproduct = product.replace(/%20/g,' ')
//     console.log(parsedproduct);
//     db.CaliProducts.findAll({ where: { ProductName: parsedproduct } }).then(data => {
//       console.log(data)
//       res.json(data);
//     });
//   });

//   app.get("/api/ingredient/:ingredient", (req, res) => {
//     const ingredient = req.params.ingredient;
//     console.log(ingredient);
//     db.CaliProducts.findAll({ where: { ChemicalName: ingredient } }).then(
//       data => {
//         res.json(data);
//       }
//     );
//   });
  
// };
var email;
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  app.get('/', function (req,res){
    res.render('signup')
  })
  
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    email=req.body.email;
    res.json("/members");
  });

  app.get('/members', function (req, res){
    console.log(email)
    
      db.User.findOne({
        where:{
          email:email
        }
      }).then(function(dbuser){
        res.render("members")
      })
  }) 

  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create(req.body).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    }
    else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

};
