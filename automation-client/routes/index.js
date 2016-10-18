
/*
 * GET home page.
 */
 
//----------------------------------------------------------------------------------------------
// Module dependencies
//----------------------------------------------------------------------------------------------
 
var util = require('util'),
    exec = require('child_process').exec,
    child;
var autoLightsState = 1;
var lightsState = 1;
var fanState = 1;
 
//##############################################################################################
// Display home page
//##############################################################################################
exports.display = function(req, res){
  	// commenting out the main index page
  	res.render('index');
};

//##############################################################################################
//Display about page
//##############################################################################################
exports.about = function(req, res){
	res.render('about');
};

//##############################################################################################
//Toggle lights
//##############################################################################################
exports.lights = function(req, res){
	// Explicitly use 0 and 1 so output is integer
	if (lightsState == 0) {
		lightsState = 1;
	} else {
		lightsState = 0;
	}
	exec('gpio write 15 ' + lightsState,
	  function (error, stdout, stderr) {
	    console.log('stdout: ' + stdout);
	    console.log('stderr: ' + stderr);
	    if (error !== null) {
	      console.log('exec error: ' + error);
	    }
	});
	res.end();
};

//##############################################################################################
//Toggle auto lights
//##############################################################################################
exports.autolights = function(req, res){
	// Explicitly use 0 and 1 so output is integer
	if (autoLightsState == 0) {
		autoLightsState = 1;
	} else {
		autoLightsState = 0;
	}
	exec('gpio write 1 ' + autoLightsState,
	  function (error, stdout, stderr) {
	    console.log('stdout: ' + stdout);
	    console.log('stderr: ' + stderr);
	    if (error !== null) {
	      console.log('exec error: ' + error);
	    }
	});
	res.end();
};

//##############################################################################################
//Toggle fan
//##############################################################################################
exports.fan = function(req, res){
	// Explicitly use 0 and 1 so output is integer
	if (fanState == 0) {
		fanState = 1;
	} else {
		fanState = 0;
	}
	exec('gpio write 16 ' + fanState,
	  function (error, stdout, stderr) {
	    console.log('stdout: ' + stdout);
	    console.log('stderr: ' + stderr);
	    if (error !== null) {
	      console.log('exec error: ' + error);
	    }
	});
	res.end();
};