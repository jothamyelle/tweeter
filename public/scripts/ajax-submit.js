$(document).ready(function() {
  $("form").on("submit", function(event) {
    if ($("#textInput").val() === "") {
      $("#errorMessage").html("Sorry, you can't submit an empty tweet!").css("display","block");
      return false;
    }
    if ($("#textInput").val().length > 140) {
      $("#errorMessage").html("Sorry, you can't submit a tweet that's longer than 140 characters!").css("display","block");
      return false;
    }
    $("#errorMessage").css("display","none");
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