/**
 * New node file
 */

$(function() {
	if (lightsState == 0) {
	$('#lightsOff').addClass('active');
	} else if (lightsState == 1) {
		$('#lightsOn').addClass("active");
	} else {
		$('#lightsAuto').addClass('active');
	}

	if (fanState == 2) {
		$('#fanSpeed2').addClass('active');
	} else if (fanState == 1) {
		$('#fanSpeed1').addClass('active');
	} else {
		$('#fanSpeedOff').addClass('active');
	}
});

$( "#lights :input" ).change(function() {
	var lightsState = 0;
	if ($('#lightsOff').hasClass('active')) {
		lightsState = 0;
	} else if ($('#lightsOn').hasClass('active')) {
		lightsState = 1;
	} else {
		lightsState = 2;
	}
  $.post('/lights', {lightsState: lightsState});
});

$( "#fan :input" ).change(function() {
	var fanState = 0;
	if ($('#fanSpeed2').hasClass('active')) {
		fanState = 2;
	} else if ($('#fanSpeed1').hasClass('active')) {
		fanState = 1;
	} else {
		fanState = 0;
	}
  	$.post('/fan', {fanState: fanState});
});

var currentLocation = window.location.href;
$("#cameraframe").attr("src", currentLocation.substring(0,currentLocation.length-1)+":8081");
