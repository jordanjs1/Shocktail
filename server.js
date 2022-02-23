var express = require("express");


// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/cocktail-api-routes.js")(app);
require("./routes/reviews-api-routes.js")(app);
require("./routes/pref-api-routes.js")(app);



db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});