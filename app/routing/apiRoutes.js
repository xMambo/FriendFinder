var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        console.log(req.body);

        // Take the results of the user's survey POST and parse it.
        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores);

        // calculate the difference between the users scores and the scores in the database
        var totalDiffernece = 0;

        //loop through all the friend possibilities in the database
        for (var i = 0; i < friends.length; i++) {

            console.log(friends[i]);
            totalDiffernece = 0;

            //loop through scores of each friend
            for (var i = 0; i < friends.length; i++) {

                //calculate the differnece between the scores and sum them into the totalDifference
                totalDiffernece
            }
        }
    })
}