/**
 * New node file
 */

$( "#lights" ).click(function() {
  $.post('/lights');
});

$( "#fan" ).click(function() {
  $.post('/fan');
});

var currentLocation = window.location.href;
$("#cameraframe").attr("src", currentLocation.substring(0,currentLocation.length-1)+":8081");
