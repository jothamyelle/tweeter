$(document).ready(function() {
  $('textarea').keydown(function() {
    console.log(140 - (this.value.length + 1));
  });
});