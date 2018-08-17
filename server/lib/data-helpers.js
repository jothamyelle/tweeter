"use strict";
var ObjectID = require('mongodb').ObjectID

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
        db.collection("tweets").insertOne(newTweet);
        callback(null, true);
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      db.collection("tweets").find().toArray(callback);
    },

    // saves likes to the db
    saveLike: function(tweetID, liked, callback) {
      db.collection("tweets").findOne({_id: ObjectID(tweetID)})
      .then((tweet) => {
        var likes = Number(tweet.content.likes);
        var newCount = 0;
        if (liked === "true") {
          newCount = likes - 1;
        } else {
          newCount = likes + 1;
        }
        db.collection("tweets").updateOne({_id: ObjectID(tweetID)}, {$set: {"content.likes": newCount}});
        callback(null, true);
      })
    }

  };
}
