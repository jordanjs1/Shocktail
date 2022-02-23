var db = require("../models");

module.exports = function(app) {
    app.get("/api/pref", function(req, res) {
        var query = {};
        if (req.query.id) {
            query.id = req.query.id;
        }
        db.Pref.findAll({
            where: query,
            include: [db.User]
        }).then(function(dbPref) {
            res.json(dbPref);
        });
    });
};