/*   ____  ____   ___ __ ____  ___  __   ____     ____     ____
     6MMMMb `MM(   )P' `M6MMMMb `MM 6MM  6MMMMb   6MMMMb\  6MMMMb\
    6M'  `Mb `MM` ,P    MM'  `Mb MM69 " 6M'  `Mb MM'    ` MM'    `
    MM    MM  `MM,P     MM    MM MM'    MM    MM YM.      YM.
    MMMMMMMM   `MM.     MM    MM MM     MMMMMMMM  YMMMMb   YMMMMb
    MM         d`MM.    MM    MM MM     MM            `Mb      `Mb
    YM    d9  d' `MM.   MM.  ,M9 MM     YM    d9 L    ,MM L    ,MM
     YMMMM9 _d_  _)MM_  MMYMMM9 _MM_     YMMMM9  MYMMMM9  MYMMMM9
                        MM
                        MM
                       _MM_
*/
//express
const express = require("express");
const app = express();

//sequelize
const db = require("./models");

//routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

//handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//public folder
app.use(express.static("public"));

//sync and connect
const PORT = process.env.PORT || 8080;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
  });
});
