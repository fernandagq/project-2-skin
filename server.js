const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./routes/apiRoutes")(app);


var db = require("./models");

// Start our server so that it can begin listening to client requests.
db.sequelize.sync().then(function(){app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
  })
