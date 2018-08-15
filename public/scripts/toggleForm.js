$(function() {
  $("#nav-bar button").on("click", function(event) {
    if ($(".new-tweet").css("display") === "none") {
      $(".new-tweet").slideDown("slow");
      $("textarea").focus();
    } else {
      $(".new-tweet").slideUp("slow");
    }
  });
});