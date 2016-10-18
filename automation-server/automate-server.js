//----------------------------------------------------------------------------------------------
// Module dependencies
//----------------------------------------------------------------------------------------------
// Express.io, combination of express and socket.io
var express = require('express.io'); 
var app = module.exports = express();
app.http().io();
// Redis, database module
var redis = require('redis');
redisClient = redis.createClient();

//----------------------------------------------------------------------------------------------
// Express - All environments
//----------------------------------------------------------------------------------------------
app.set('port', process.env.PORT || 8080);

//----------------------------------------------------------------------------------------------
// Development only
//----------------------------------------------------------------------------------------------

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//----------------------------------------------------------------------------------------------
// Create server and listen to port
//----------------------------------------------------------------------------------------------

app.listen(app.get('port'), function(){
   console.log("Express server listening on port " + app.get('port'));
});

//##############################################################################################
// Display landing page
//##############################################################################################
app.get('/', redirect);

function redirect(req, res) {
	redisClient.get('urlredirect', function (err, reply) {
		if (reply != null) {
			res.redirect(reply);
		} else {
			res.send('No link!');
		}
	});
}
