var express = require('express');
var http = require('http');


var app = express();

app.configure(function(){
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

require('./configs/routes.js')(app);

var dbUrl = process.env.MONGOHQ_URL || 'mongodb://@127.0.0.1:27017/carselling';
var mongoose = require('mongoose');
var connection = mongoose.createConnection(dbUrl);
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {
  console.info('connected to database')
})


app.listen(3000);