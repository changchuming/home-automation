
/*
 * GET home page.
 */
 
//----------------------------------------------------------------------------------------------
// Module dependencies
//----------------------------------------------------------------------------------------------
 
var util = require('util'),
    exec = require('child_process').exec,
    child;
var lightsState = 1;
var fanState = 1;
var cameraState = 0;
 
//##############################################################################################
// Display home page
//##############################################################################################
exports.display = function(req, res){
  	// commenting out the main index page
  	console.log(lightsState);
  	res.render('index', {lightsState: lightsState, fanState: fanState, cameraState: cameraState});
};

//##############################################################################################
//Display about page
//##############################################################################################
exports.about = function(req, res){
	res.render('about');
};

//##############################################################################################
//Get status
//##############################################################################################
exports.status = function(req, res){
	res.send({lightsState: lightsState, fanState: fanState, cameraState: cameraState});
}

//##############################################################################################
// Change lights
//##############################################################################################
exports.lights = function(req, res){
	if (req.body.lightsState == 2) {
		exec('gpio write 1 1',
		  function (error, stdout, stderr) {
		    console.log('stdout: ' + stdout);
		    console.log('stderr: ' + stderr);
		    if (error !== null) {
		      	console.log('exec error: ' + error);
		      	res.send(false);
		    } else {
		    	lightsState = req.body.lightsState;
		    	res.send(true);
		    }
		});
	} else {
		exec('gpio write 1 0',
		  function (error, stdout, stderr) {
		    console.log('stdout: ' + stdout);
		    console.log('stderr: ' + stderr);
    	    if (error !== null) {
		      	console.log('exec error: ' + error);
		      	res.send(false);
		    } else {
		    	lightsState = req.body.lightsState;
		    	res.send(true);
		    }
		});
		exec('gpio write 15 ' + req.body.lightsState,
		  function (error, stdout, stderr) {
		    console.log('stdout: ' + stdout);
		    console.log('stderr: ' + stderr);
    	    if (error !== null) {
		      	console.log('exec error: ' + error);
		      	res.send(false);
		    } else {
		    	lightsState = req.body.lightsState;
		    	res.send(true);
		    }
		});
	}
};

//##############################################################################################
// Change fan
//##############################################################################################
exports.fan = function(req, res){
	exec('gpio write 16 ' + req.body.fanState,
	  function (error, stdout, stderr) {
	    console.log('stdout: ' + stdout);
	    console.log('stderr: ' + stderr);
	    if (error !== null) {
	      	console.log('exec error: ' + error);
	      	res.send(false);
	    } else {
	    	fanState = req.body.fanState;
	    	res.send(true);
	    }
	});
};

//##############################################################################################
// Change camera
//##############################################################################################

exports.camera = function(req, res){
	if (req.body.cameraState) {
		exec ('../webcam-server/motion -n -c motion-mmalcam.conf &',
		  	function (error, stdout, stderr) {
			    console.log('stdout: ' + stdout);
			    console.log('stderr: ' + stderr);
			    if (error !== null) {
			      	console.log('exec error: ' + error);
			      	res.send(false);
			    } else {
		    		cameraState = req.body.cameraState;
			    	res.send(true);
			    }
			}
		);
	} else {
		exec('sudo killall motion',
			function (error, stdout, stdout) {
			    console.log('stdout: ' + stdout);
			    console.log('stderr: ' + stderr);
			    if (error !== null) {
			      	console.log('exec error: ' + error);
			      	res.send(false);
			    } else {
			    	cameraState = req.body.cameraState;
			    	res.send(true);
			    }
			}
		);
	}
};