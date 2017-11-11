"use strict";

/**
 * Module dependencies.
 */

var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var routes = require('./server/routes');
var http = require('http');
var path = require('path');
var util = require('util');
var env = process.env.NODE_ENV || 'development';

var app = express();

// Setup Express
app.set('port', process.env.PORT || 7080);
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'doc')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')));


// Add our routes
routes(app);

// Start the web service
http.createServer(app)
.on('error',function(err) {
  util.log(err);
  process.exit(1);
})
.listen(app.get('port'), function(){
  util.log("Fulfillment Service listening on port " + app.get('port'));
});
