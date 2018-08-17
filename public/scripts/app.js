/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function createTweetElement(tweetData) {
  var $avatar = tweetData.user.avatars.small;
  var $user = tweetData.user.name;
  var $handle = tweetData.user.handle;
  var $userTweet = escape(tweetData.content.text);
  var todaysDate = new Date();
  var tweetDate = new Date(tweetData.created_at);
  var newAge = todaysDate - tweetDate;
  var $tweetAge = Math.floor(newAge / (1000*60*60*24));
  var $tweetID = tweetData._id;
  var $likes = tweetData.content.likes;
  if (!($likes > 0)) {
    $likes = 0;
  }

  return  `
  <article>
    <header>
      <img class="avatar" src="${$avatar}">
      <span class="user">${$user}</span>
      <span class="handle">${$handle}</span>
    </header>
    <div class="tweetArea">
      <span class="tweetText">${$userTweet}</span>
    </div>
    <footer class="tweetFooter">
      <div class="tweetAge">
        <span class="tweetAge">${$tweetAge} days ago</span>
        <span class="numLikes"><span>${$likes}</span> likes</span>
      </div>
      <div class="showOnHover">
        <img class="replyIcon" src="images/reply.png"/>
        <img class="retweetIcon" src="images/retweet.png"/>
        <img  data-tweet-id="${$tweetID}" data-liked="false" class="likeIcon" src="images/like.png"/>
      </div>
    </footer>
  </article>`;
}

function renderTweets(tweets) {
  var reversedTweets = tweets.reverse();
  reversedTweets.forEach(tweetData => { // returning an error since tweets are not an array
    var $tweet = createTweetElement(tweetData);
    $($tweet).appendTo('#tweet-container').css("display","none").slideDown(850);
  });
}

function loadTweets() {
  $.ajax("/tweets", {method:"GET"})
  .then(function(tweetsJSON) {
    renderTweets(tweetsJSON);
  });
}

$(document).ready(function() {
  loadTweets();
});
