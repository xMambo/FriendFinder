var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

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
        var totalDifference = 0;

        //loop through all the friend possibilities in the database
        for (var i = 0; i < friends.length; i++) {

            console.log(friends[i]);
            totalDifference = 0;

            //loop through scores of each friend
            for (var j = 0; j < friends.length; j++) {

                //calculate the differnece between the scores and sum them into the totalDifference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                //if the sum of difference is less then the differences of the current "best match"
                if (totalDifference <= bestMatch.friendDifference) {

                    //reset the bestMatch to be the new friend.
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        //Save the user's data to the database. make sure this is after the check
        friends.push(userData);

        //return a JSON with the user's bestMatch. this will be used by the html in the next page
        res.json(bestMatch);
    });
}