
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
 
//##############################################################################################
// Display home page
//##############################################################################################
exports.display = function(req, res){
  	// commenting out the main index page
  	console.log(lightsState);
  	res.render('index', {lightsState: lightsState, fanState: fanState});
};

//##############################################################################################
//Display about page
//##############################################################################################
exports.about = function(req, res){
	res.render('about');
};

//##############################################################################################
// Change lights
//##############################################################################################
exports.lights = function(req, res){
	// Explicitly use 0 and 1 so output is integer
	lightsState = req.body.lightsState;
	if (lightsState == 2) {
		exec('gpio write 1 1',
		  function (error, stdout, stderr) {
		    console.log('stdout: ' + stdout);
		    console.log('stderr: ' + stderr);
		    if (error !== null) {
		      console.log('exec error: ' + error);
		    }
		});
	} else {
		exec('gpio write 1 0',
		  function (error, stdout, stderr) {
		    console.log('stdout: ' + stdout);
		    console.log('stderr: ' + stderr);
		    if (error !== null) {
		      console.log('exec error: ' + error);
		    }
		});
		exec('gpio write 15 ' + lightsState,
		  function (error, stdout, stderr) {
		    console.log('stdout: ' + stdout);
		    console.log('stderr: ' + stderr);
		    if (error !== null) {
		      console.log('exec error: ' + error);
		    }
		});
	}
	
	res.end();
};

//##############################################################################################
// Change fan
//##############################################################################################
exports.fan = function(req, res){
	// Explicitly use 0 and 1 so output is integer
	fanState = req.body.fanState;
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