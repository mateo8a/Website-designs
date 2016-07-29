$(document).ready(function() {
  $(".header .list-inline a").mouseover(function() {
    $(this).parent().css("background-color", "#ff3399");
    $(this).css("text-decoration","none");
  });
  
  $(".header .list-inline a").mouseleave(function() {
    $(this).parent().css("background-color", "#4080bf");
    $(this).css("text-decoration","none");
  });
  
});