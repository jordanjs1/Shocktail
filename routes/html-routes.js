var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/test.html"));
    });

    app.get("/pref", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/pref.html"));
    });
    
    app.get("/main", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/main.html"));
    });
}