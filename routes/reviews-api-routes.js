//data will get here from review table in db
var db = require("../models");

module.exports = function (app) {

    //it will return all reviews
    app.get("/api/reviews", function (req, res) {
        db.Review.findAll({}).then(
            function (dbReview) {
                res.json(dbReview);
            }
        )
    });

    app.get("/api/reviews/:id", function(req, res) {
        db.Review.findOne({
            where: {
                id: req.params.id
            },
            include: [db.User]
        }).then(function(dbReview) {
            console.log(dbReview);
            res.json(dbReview);
        });
    });

     //user can add new review from db
     app.post("/api/reviews", function(req, res){
        db.Review.create(req.body).then(function (dbReview){
            res.json(dbReview);
        });
    });
    
}