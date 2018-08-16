$(document).ready(function() {
  
  function displayErrorMsg(msg) {
    $("#errorMessage").text(msg).slideDown().css("display","block");
  }

  $("form").on("submit", function(event) {
    event.preventDefault();
    if ($("#textInput").val() === "") {
      displayErrorMsg("Sorry, you can't submit an empty tweet!");
      return false;
    }
    if ($("#textInput").val().length > 140) {
      displayErrorMsg("Sorry, you can't submit a tweet that's longer than 140 characters!");
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