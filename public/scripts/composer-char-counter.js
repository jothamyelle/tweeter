$(document).ready(function() {
  $('textarea').keyup(function() {
    let count = 140 - (this.value.length);
    let parent = $(this).parent().get( 0 ); 
    let counter = $(parent).children(".counter");
    if (count <= 0) {
      counter.css("color","red");
    } else {
      counter.css("color","black");
    }
    counter.html(count);
  });
});