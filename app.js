var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var dbConnString  = 'mongodb://localhost/carselling';


var app = express();

app.configure(function(){
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

require('./configs/routes.js')(app);


mongoose.connect(dbConnString, function(err, res){
	if(err){
		console.log('Error connection to: ' + dbConnString + '! ' + err);		
	} else {
		console.log('Successfully connected to: ' + dbConnString);
	}
});

app.listen(3000);