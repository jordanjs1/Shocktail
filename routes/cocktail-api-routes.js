var db = require("../models");

module.exports = function(app) {
    app.get("/api/cocktails", function(req, res) {
        var query = {};
        if (req.query.cocktail_id) {
            query.cocktailId = req.query.cocktail_id;
        }
        db.Cocktail.findAll({
            where: query
        }).then(function(dbCocktail) {
            res.json(dbCocktail);
        });
    });
}