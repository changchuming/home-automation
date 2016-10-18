//----------------------------------------------------------------------------------------------
// Module dependencies
//----------------------------------------------------------------------------------------------
// Express
var express = require('express');
var app = express();

// Middleware
var favicon = require('serve-favicon'); 
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');
var static = require('serve-static');
var errorHandler = require('errorhandler');
var cors = require('cors');

// Standard stuff	  
var http = require('http');
var path = require('path');
var fs = require('fs');
var util = require("util");

//----------------------------------------------------------------------------------------------
// Routes
//----------------------------------------------------------------------------------------------
var index = require('./routes');

//----------------------------------------------------------------------------------------------
// Express - All environments
//----------------------------------------------------------------------------------------------
var port = process.env.PORT || 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(methodOverride('_method'));
app.use(static(__dirname + '/public'));
app.use(cors());

//----------------------------------------------------------------------------------------------
// Development only
//----------------------------------------------------------------------------------------------

if ('development' == app.get('env')) {
  app.use(errorHandler());
}

//----------------------------------------------------------------------------------------------
// Create server and listen to port
//----------------------------------------------------------------------------------------------

app.listen(port, function(){
   console.log("Express server listening on port " + port);
});

//##############################################################################################
// Display landing page
//##############################################################################################
app.get('/', index.display);

//##############################################################################################
// Display about page
//##############################################################################################
app.get('/about', index.about);

//##############################################################################################
// Toggle lights
//##############################################################################################
app.post('/lights', index.lights);

//##############################################################################################
// Toggle fan
//##############################################################################################
app.post('/fan', index.fan);