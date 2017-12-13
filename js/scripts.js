$(document).ready(function(){
// Opening navigation
$('#open-nav').click(function(){
  $('nav').animate({right:"0"},1000);
});
//Closing navigation
$('#close-nav').click(function(){
  $('nav').animate({right:"100%"},1000);
});
});
