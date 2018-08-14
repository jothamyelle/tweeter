$(document).ready(function() {
  $('textarea').keyup(function() {
    let count = 140 - (this.value.length);
    let parent = $(this).parent().get( 0 ); 
    let counter = $(parent).children(".counter");
    console.log(counter.html(count));
  });
});