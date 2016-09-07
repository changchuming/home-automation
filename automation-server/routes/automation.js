//----------------------------------------------------------------------------------------------
// Module dependencies
//----------------------------------------------------------------------------------------------

var util = require('util'),
    exec = require('child_process').exec,
    child;
var blindsState = 0;

//##############################################################################################
// Display automation page
//##############################################################################################
exports.display = function(req, res){
  	// commenting out the main index page
  	res.render('automation');
};

//##############################################################################################
//Toggle blinds
//##############################################################################################
exports.blinds = function(req, res){
	exec('gpio write 15 ' + blindsState,
	  function (error, stdout, stderr) {
	    console.log('stdout: ' + stdout);
	    console.log('stderr: ' + stderr);
	    if (error !== null) {
	      console.log('exec error: ' + error);
	    }
	});
	if (blindsState == 0) {
		blindsState = 1;
	} else {
		blindsState = 0;
	}
	res.end();
};