var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        var newFriendScore = 0

        var friendName;

        var friendPhoto;

        var lowestDiff = Infinity;

        for (var i = 0; i < friendsData.length; i++) {
            var currentFriend = friendsData[i].scores;

            var sum = 0

            newFriendScore = 0;
            for (var j = 0; j < currentFriend.length; j++) {
                // current score add it to the new score,
                // loop through all the scores until none add 
                newFriendScore += Number(newFriend.scores[j])
                sum += Number(currentFriend[j])
                // console.log(currentFriend[j])


            }
            console.log(sum);
            console.log("new Score", newFriendScore)

            if (Math.abs(sum - newFriendScore) <= lowestDiff) {
                lowestDiff = Math.abs(sum - newFriendScore)
                friendName = friendsData[i].name;
                friendPhoto = friendsData[i].photo;
            }
        }
        console.log(friendName, friendPhoto);
        res.send(`Your match is ${friendName} ${friendPhoto}`);
    });
}