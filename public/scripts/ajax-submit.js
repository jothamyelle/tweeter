$(document).ready(function() {
  $("form").on("submit", function(event) {
    event.preventDefault();
    if ($("#textInput").val() === "") {
      $("#errorMessage").text("Sorry, you can't submit an empty tweet!").slideDown().css("display","block");
      return false;
    }
    if ($("#textInput").val().length > 140) {
      $("#errorMessage").text("Sorry, you can't submit a tweet that's longer than 140 characters!").slideDown().css("display","block");
      return false;
    }
    $("#errorMessage").slideUp();
    var input = $("#textInput").serialize();
  
    $.post("/tweets", input)
    .done(function(data) {
      var newTweet = createTweetElement(data);
      $("#tweet-container").prepend(newTweet);
      $("#textInput").val('');
    });
  });
});