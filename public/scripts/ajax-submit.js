function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

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

    var input = escape($("#textInput").val());

    if (input.indexOf("&lt;") >= 0 || input.indexOf("&gt;") >= 0) {
      $("#errorMessage").text(`Sorry, your post can't contain these characters: < >`).slideDown().css("display","block");
      return false;
    }

    $("#errorMessage").css("display","none");
    var safeText = `text=${input}`;
  
    $.post("/tweets", safeText)
    .done(function(data) {
      var newTweet = createTweetElement(data);
      $("#tweet-container").prepend(newTweet);
      $("#textInput").val('');
    });
  });
});