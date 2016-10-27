/**
 * New node file
 */

$(function() {
	// setup
	$('#cameraframe').hide();
	$.post('/status', function(data) {
		if (data) {
			$('#lights input[value="' + data.lightsState + '"]').parent('.btn').addClass('active');
			$('#fan input[value="' + data.fanState + '"]').parent('.btn').addClass('active');
			$('#camera input[value="' + data.cameraState + '"]').parent('.btn').addClass('active');
		  	if (data.cameraState==1) {
		  		$('#cameraframe').show();
		  		var currentLocation = window.location.href;
				$("#cameraframe").attr("src", currentLocation.substring(0,currentLocation.length-1)+":8081");
		  	} else {
		  		$('#cameraframe').hide();
		  	}
		}
	});
});

$( "#lights :input" ).change(function() {
  	$.post('/lights', {lightsState: $(this).val()});
});

$( "#fan :input" ).change(function() {
  	$.post('/fan', {fanState: $(this).val()});
});

$( "#camera :input" ).change(function() {
	var that = $(this);
  	$.post('/camera', {cameraState: $(this).val()}, function (data) {
  		if (data) {
		  	if (that.val()==1) {
		  		$('#cameraframe').show();
		  		var currentLocation = window.location.href;
				$("#cameraframe").attr("src", currentLocation.substring(0,currentLocation.length-1)+":8081");
		  	} else {
		  		$('#camera input[value="' + 0 + '"]').parent('.btn').addClass('active');
		  		$('#cameraframe').hide();
		  	}
  		}
  	});
});
