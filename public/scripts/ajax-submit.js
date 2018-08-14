$(document).ready(function() {
  $("form").on("submit", function(event) {
    event.preventDefault();
    var input = $("form").serialize();
  
    $.post("/tweets", input)
    .done(function(data) {
      var newTweet = createTweetElement(data);
      $("#tweet-container").append(newTweet);
      $("#textInput").val('');
    });
  });
});