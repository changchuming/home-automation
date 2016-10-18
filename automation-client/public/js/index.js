/**
 * New node file
 */

$(function() {
	// if (lightsState == 0) {
	// $('#lightsOff').addClass('active');
	// } else if (lightsState == 1) {
	// 	$('#lightsOn').addClass("active");
	// } else {
	// 	$('#lightsAuto').addClass('active');
	// }

	// if (fanState == 2) {
	// 	$('#fanSpeed2').addClass('active');
	// } else if (fanState == 1) {
	// 	$('#fanSpeed1').addClass('active');
	// } else {
	// 	$('#fanSpeedOff').addClass('active');
	// }
});

$( "#lights :input" ).change(function() {
	console.log(this.val());
  	$.post('/lights', {lightsState: this.val()});
});

$( "#fan :input" ).change(function() {
  	$.post('/fan', {fanState: $('#filterDay label.active input').val()});
});

var currentLocation = window.location.href;
$("#cameraframe").attr("src", currentLocation.substring(0,currentLocation.length-1)+":8081");
