$(document).ready(function() {
  $("body").on("click", function(event) {
    if ($(event.target).attr("class") === "likeIcon") {
      var tweetID = $(event.target).attr("data-tweet-id");
      var liked = $(event.target).attr("data-liked");
      if ($(event.target).attr("data-liked") === "false") {
        $(event.target).attr("data-liked", "true");
        $(event.target).attr("src", "images/liked.png");
        var numLikes = Number($(event.target).parent().parent().find(".numLikes span").html());
        $(event.target).parent().parent().find(".numLikes span").html(numLikes + 1);
      } else {
        $(event.target).attr("data-liked", "false");
        $(event.target).attr("src", "images/like.png");
        var numLikes = Number($(event.target).parent().parent().find(".numLikes span").html());
        $(event.target).parent().parent().find(".numLikes span").html(numLikes - 1);
      }


      $.post(`/tweets/likes/${tweetID}/${liked}`)
      .done(function(data) {
      });
    }
  });
})