/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
function createTweetElement(tweetData) {
  var $avatar = tweetData.user.avatars.small;
  var $user = tweetData.user.name;
  var $handle = tweetData.user.handle;
  var $userTweet = tweetData.content;

  return `
  <article>
    <header>
      <img class="avatar" src="${$avatar}">
      <span class="user">${$user}</span>
      <span class="handle">${$handle}</span>
    </header>
    <div class="tweetArea">
      <span class="tweetText">${$userTweet.text}</span>
    </div>
    <footer>
      <div class="tweetAge">
        <span>10 Days Ago</span>
      </div>
      <div class="showOnHover">
        <img src="images/reply.png">
        <img src="images/retweet.png">
        <img src="images/like.png">
      </div>
    </footer>
  </article>`;
}


// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

$( document ).ready(function() {
  var $tweet = createTweetElement(tweetData);
  $('#tweet-container').append($tweet);
});
