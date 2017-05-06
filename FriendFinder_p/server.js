// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var appPORT = process.env.PORT || 3000;

// Sets up the Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Starts
app.listen(appPORT, function () {
	console.log('App listening on PORT ' + appPORT);